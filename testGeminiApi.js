import { GoogleGenerativeAI } from "@google/generative-ai";

// Replace with your actual API key
const apiKey = "AIzaSyArlaN4dUvftABBY7bsVEPeDH8XnnS4gBw";

try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = await genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
    });

    console.log("API key is valid and the model is accessible!");
} catch (error) {
    console.error("Failed to validate API key:", error.message);
}
