
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSecurityAdvice = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are the AI Security Advisor for Alex Vance's Cybersecurity Portfolio. 
                 Answer the following question professionally, with technical depth and a focus on defensive best practices. 
                 Keep answers concise (max 100 words). If asked about Alex Vance, say he is a security expert specializing in Defensive Security.
                 
                 Question: ${query}`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 250,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently undergoing maintenance. Please try again later.";
  }
};
