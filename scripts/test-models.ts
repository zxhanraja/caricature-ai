import { GoogleGenAI } from "@google/genai";

// Test script to verify model availability
const testModels = async () => {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
        console.error("❌ API_KEY not found in environment");
        process.exit(1);
    }

    console.log("✅ API Key found");

    const ai = new GoogleGenAI({ apiKey });

    // Try different model name variations
    const modelVariations = [
        'gemini-1.5-flash',
        'gemini-1.5-flash-latest',
        'gemini-1.5-flash-001',
        'models/gemini-1.5-flash',
        'models/gemini-1.5-flash-latest'
    ];

    console.log("\n🔍 Testing model variations...\n");

    for (const modelName of modelVariations) {
        try {
            console.log(`Testing: ${modelName}`);
            const response = await ai.models.generateContent({
                model: modelName,
                contents: {
                    parts: [{ text: "Hello" }]
                }
            });

            if (response.text) {
                console.log(`✅ SUCCESS: ${modelName} works!`);
                console.log(`   Response: ${response.text.substring(0, 50)}...`);
            }
        } catch (error: any) {
            console.log(`❌ FAILED: ${modelName}`);
            console.log(`   Error: ${error.message?.substring(0, 100) || error.toString().substring(0, 100)}`);
        }
        console.log("");
    }
};

testModels().catch(console.error);
