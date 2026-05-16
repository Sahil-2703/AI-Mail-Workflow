import { NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  try {
    const { thread } = await req.json();

    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",

      messages: [
        {
          role: "system",
          content: `
          - Client Name
          Extract the following from the email thread:
          - Priority
          - Pending Action
          
          Return ONLY JSON format like:
          {
            "client": "",
            "issue": "",
            "priority": "",
            "action": ""
            }
            - Issue
`,
        },
        {
          role: "user",
          content: thread,
        },
      ],
    });

    const text = response.choices[0]?.message?.content || "{}";

    const parsed = JSON.parse(text);

    return NextResponse.json(parsed);
    console.log("Parsed Response:", parsed);
  } catch (error: any) {
    console.error(error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
