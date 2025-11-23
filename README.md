# Caricature AI - Couple Caricature Generator

A React application powered by Google's Gemini AI that transforms couple photos into hilarious, hand-drawn style caricatures.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- A Google Gemini API Key (from Google AI Studio)

### Installation

1.  **Clone the repository**
    ```bash
    git clone <your-repo-url>
    cd caricature-ai
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables**
    -   Create a `.env` file in the root directory.
    -   Add your API key:
        ```env
        API_KEY=your_google_gemini_api_key_here
        ```

4.  **Run Locally**
    ```bash
    npm run dev
    ```

## 🌐 Deployment (Vercel)

1.  Push your code to GitHub.
2.  Import the project into Vercel.
3.  **Important:** In the Vercel Project Settings > Environment Variables:
    -   Add a new variable named `API_KEY`.
    -   Paste your Gemini API Key as the value.
4.  Deploy!

## 🛠 Tech Stack
-   **Frontend:** React, TypeScript, Vite, Tailwind CSS
-   **AI Model:** Google Gemini (via `@google/genai` SDK)
-   **Animation:** CSS Transitions & Intersection Observer

## 📜 License
All Rights Reserved.
