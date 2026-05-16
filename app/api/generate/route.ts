import { NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  try {
    const { input } = await req.json();

    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",

      messages: [
        {
          role: "system",
          content:
            "You are a professional AI assistant for business emails and escalations.",
        },
        {
          role: "user",
          content: input,
        },
      ],
    });

    return NextResponse.json({
      output: response.choices[0]?.message?.content,
    });

  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}