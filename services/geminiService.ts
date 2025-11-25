import { GoogleGenAI, Modality, Type } from "@google/genai";

// Helper to lazily get the AI client
const getAIClient = () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        console.warn("API Key is missing. Caricature generation will fail.");
        throw new Error("API Key is missing. Please configure it in your deployment settings.");
    }
    return new GoogleGenAI({ apiKey: apiKey });
};

interface CreativeConcept {
    man_desc: string;
    woman_desc: string;
    scenario: string;
    visual_style_notes: string;
}

// Step 1: Analyze Photo AND Invent Scenario (Combined to save API calls & Latency)
const generateCreativeConcept = async (base64Image: string): Promise<CreativeConcept> => {
    try {
        const ai = getAIClient();
        // REVISED PROMPT: Removed "Roast" to prevent Safety Filter triggers.
        // Focuses on "Playful Comedy" and "Sitcom Humor" instead.
        const analysisPrompt = `
You are a creative Caricature Artist known for fun, energetic, and playful humor (Chibi Style).
Look at this couple photo and invent a UNIQUE, FUNNY caricature scenario.

1. ANALYZE:
   - Describe the Man's & Woman's clothing/hair/features briefly.
   - CHECK IDENTITIES: If the man has a beard, note it. If the woman has glasses, note it.

2. INVENT A SCENARIO (Physical Comedy):
   - The scenario MUST show them interacting playfully.
   - NO mean-spirited roasting. Keep it cute and funny.
   - NO random floating objects. 
   - EXAMPLES OF GOOD SCENARIOS:
     * Wife pumping air into Husband with a bicycle pump (he is round).
     * Husband carrying Wife on his shoulders, but his legs are wobbling.
     * Couple riding a tiny toy scooter together, knees hitting the ground.
     * Wife dragging Husband by his tie while he smiles happily.
     * Husband using Wife's long hair as a scarf.

3. OUTPUT JSON:
   {
     "man_desc": "short string describing features",
     "woman_desc": "short string describing features",
     "scenario": "The specific action scene description",
     "visual_style_notes": "Notes on expression (e.g., 'Man looks surprised', 'Woman looks laughing')"
   }
`;

        const response = await ai.models.generateContent({
            model: 'gemini-1.5-flash',
            contents: {
                parts: [
                    { inlineData: { data: base64Image, mimeType: 'image/jpeg' } },
                    { text: analysisPrompt }
                ]
            },
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        man_desc: { type: Type.STRING },
                        woman_desc: { type: Type.STRING },
                        scenario: { type: Type.STRING },
                        visual_style_notes: { type: Type.STRING }
                    },
                    required: ["man_desc", "woman_desc", "scenario", "visual_style_notes"]
                }
            }
        });

        if (response.text) {
            return JSON.parse(response.text) as CreativeConcept;
        }
        throw new Error("Empty analysis");
    } catch (e) {
        console.warn("Creative Concept generation failed, falling back to random.", e);
        // Fallback if Text API fails/quota hits or Safety filter blocks text
        return {
            man_desc: "Man in casual clothes",
            woman_desc: "Woman in casual clothes",
            scenario: "The Wife is holding the Husband like a baby in her arms. The Husband looks confused and happy.",
            visual_style_notes: "Exaggerated happy expressions, big smiles"
        };
    }
};

export const generateCaricature = async (base64Image: string, _mimeType: string): Promise<string> => {
    try {
        const ai = getAIClient();

        // Step 1: Get a unique idea from the creative brain
        const concept = await generateCreativeConcept(base64Image);
        console.log(`Generated Scenario: ${concept.scenario}`);

        // Step 2: Generate the Artwork
        const prompt = `
CONTEXT: You are a street artist at an Indian Wedding creating a quick, funny Live Caricature.

SUBJECT:
Man: ${concept.man_desc}
Woman: ${concept.woman_desc}

ACTION SCENE:
${concept.scenario}
${concept.visual_style_notes}

ART STYLE GUIDELINES:
1. MEDIUM: Hand-drawn Black Ink Marker outlines (sketchy, energetic lines) filled with loose Watercolor washes.
2. PROPORTIONS: "Big Head, Tiny Body" (Chibi style). Heads should be 50% of the image.
3. FACIAL FEATURES: Exaggerated but cute. Big noses, toothy smiles, expressive eyes.
4. BACKGROUND: Pure White paper background with maybe a faint yellow/orange watercolor splash. NO complex backgrounds.
5. PHYSICS: Ground the characters. 

QUALITY:
- Look like a real physical drawing on paper.
- Funny, cute, and memorable.
`;

        const response = await ai.models.generateContent({
            model: 'gemini-1.5-flash',
            contents: {
                parts: [
                    { inlineData: { data: base64Image, mimeType: 'image/jpeg' } },
                    { text: prompt },
                ],
            },
            config: {
                responseModalities: [Modality.IMAGE],
            },
        });

        if (!response.candidates || response.candidates.length === 0) {
            throw new Error("AI returned no results.");
        }

        const candidate = response.candidates[0];

        // Check if the model blocked the response due to safety
        if (candidate.finishReason === 'SAFETY') {
            throw new Error("Safety Filter Triggered: The AI found the image or concept slightly too 'spicy'. Please try a different photo.");
        }

        const imagePart = candidate.content.parts.find(part => part.inlineData);

        if (imagePart && imagePart.inlineData) {
            return imagePart.inlineData.data;
        }

        throw new Error("No image data found in response.");

    } catch (error: any) {
        console.error("Error generating caricature:", error);

        const errorMessage = (error.message || error.toString()).toLowerCase();

        // Detect Specific API Limits & Errors
        if (errorMessage.includes("429") || errorMessage.includes("resource_exhausted") || errorMessage.includes("quota")) {
            if (errorMessage.includes("day")) {
                throw new Error("Daily Limit Reached: You have used all free generations for today. Please try again tomorrow.");
            }
            throw new Error("Server Busy: Too many requests in a short time. Please wait 1 minute and try again.");
        }

        if (errorMessage.includes("safety") || errorMessage.includes("blocked")) {
            throw new Error("Safety Filter Triggered: The AI refused to generate this specific image. Try a clearer photo or one with better lighting.");
        }

        if (error instanceof Error) {
            throw error;
        }
        throw new Error("An unexpected error occurred. Please try again.");
    }
};