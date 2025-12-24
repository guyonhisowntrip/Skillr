import { GoogleGenAI } from "@google/genai";
import { AIResponse, GroundingChunk } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const queryAI = async (prompt: string): Promise<AIResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "You are a helpful AI assistant for the 'One Tapp University' workshop landing page. You are concise, professional, and helpful. Use Google Search to provide up-to-date information about AI tools, trends, or concepts if asked.",
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "I couldn't generate a response.";
    
    // Extract grounding sources
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const sources = chunks
      .filter((chunk: GroundingChunk) => chunk.web)
      .map((chunk: GroundingChunk) => ({
        title: chunk.web?.title || "Source",
        url: chunk.web?.uri || "#",
      }));

    // Remove duplicates based on URL
    const uniqueSources = sources.filter((source, index, self) =>
      index === self.findIndex((t) => t.url === source.url)
    );

    return {
      text,
      sources: uniqueSources,
    };

  } catch (error) {
    console.error("Error querying Gemini:", error);
    return {
      text: "I encountered an error while processing your request. Please try again later.",
      sources: []
    };
  }
};