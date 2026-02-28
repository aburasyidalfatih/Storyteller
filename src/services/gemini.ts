import { GoogleGenAI } from "@google/genai";

async function callGemini(prompt: string, referenceImage?: string): Promise<string> {
  const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error("No API key found. Please select a paid API key.");
  }

  const ai = new GoogleGenAI({ apiKey });

  const parts: any[] = [{ text: prompt }];

  if (referenceImage) {
    // Extract base64 data if it includes the prefix
    const base64Data = referenceImage.replace(/^data:image\/\w+;base64,/, "");
    parts.unshift({
      inlineData: {
        mimeType: "image/png",
        data: base64Data
      }
    });
  }

  const response = await ai.models.generateContent({
    model: 'gemini-3.1-flash-image-preview',
    contents: {
      parts: parts,
    },
    config: {
      imageConfig: {
        aspectRatio: "9:16",
        imageSize: "1K"
      },
    },
  });

  // Check for image data
  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }

  // Check for text refusal/explanation
  const textPart = response.candidates?.[0]?.content?.parts?.find(p => p.text);
  if (textPart?.text) {
    console.error("Model returned text instead of image:", textPart.text);
    throw new Error(`Model refused to generate image: ${textPart.text}`);
  }
  
  // Check for finish reason
  const finishReason = response.candidates?.[0]?.finishReason;
  if (finishReason) {
    throw new Error(`Generation stopped due to: ${finishReason}`);
  }

  throw new Error("No image data found in response (Unknown reason)");
}

export async function generateImage(prompt: string, referenceImage?: string): Promise<string> {
  try {
    return await callGemini(prompt, referenceImage);
  } catch (error: any) {
    console.error("Error generating image:", error);
    
    // If we failed with a reference image, try again without it
    // This handles 'OTHER' errors which often happen when the model rejects the reference image
    if (referenceImage) {
      console.warn("Retrying generation without reference image due to error...");
      try {
        return await callGemini(prompt);
      } catch (retryError) {
        console.error("Retry without reference image also failed:", retryError);
        // Throw the original error to keep the context of why it failed initially if the retry also fails
        throw error; 
      }
    }
    
    throw error;
  }
}
