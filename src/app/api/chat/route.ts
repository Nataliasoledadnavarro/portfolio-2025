import { readFileSync } from "fs";
import { join } from "path";
import { NextRequest, NextResponse } from "next/server";
 
interface Message {
  role: "user" | "assistant";
  content: string;
}
 
interface RequestBody {
  messages: Message[];
}
 
interface GeminiMessage {
  role: "user" | "model";
  parts: { text: string }[];
}
 
interface GeminiResponse {
  candidates: { content: { parts: { text: string }[] } }[];
}
 
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: RequestBody = await request.json();
 
    if (!body.messages || !Array.isArray(body.messages)) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }
 
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      const errorMsg = "❌ GEMINI_API_KEY environment variable is not set";
      console.error(errorMsg);
      return NextResponse.json({ error: errorMsg }, { status: 500 });
    }
 
    // Read chatbot context from public folder
    const contextPath = join(process.cwd(), "public", "chatbot-context.md");
    let systemPrompt = "";
 
    try {
      systemPrompt = readFileSync(contextPath, "utf-8");
    } catch (fileError) {
      console.error(`Error reading chatbot context: ${fileError}`);
      systemPrompt =
        "You are Ada, a helpful assistant for Natalia Navarro's portfolio.";
    }
 
    // Map messages to Gemini format (sin contaminar el contenido del usuario)
    const geminiMessages: GeminiMessage[] = body.messages.map((msg) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));
 
    // Call Gemini API con system_instruction como campo separado
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: systemPrompt }],
          },
          contents: geminiMessages,
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      }
    );
 
    if (!response.ok) {
      const errorData = await response.json();
      const errorMsg = `Gemini API Error (${response.status}): ${JSON.stringify(errorData)}`;
      console.error("❌ " + errorMsg);
      return NextResponse.json({ error: errorMsg }, { status: response.status });
    }
 
    const data: GeminiResponse = await response.json();
 
    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      console.error("Invalid response format from Gemini API");
      return NextResponse.json(
        { error: "Invalid response format" },
        { status: 500 }
      );
    }
 
    const assistantMessage = data.candidates[0].content.parts[0].text;
 
    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error(`Unexpected error in chat API: ${error}`);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
 