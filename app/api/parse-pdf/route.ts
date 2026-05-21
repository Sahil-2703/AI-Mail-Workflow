import { NextRequest, NextResponse } from "next/server";

const pdfParse = require("pdf-parse");

export async function POST(
  req: NextRequest
) {

  try {

    const formData =
      await req.formData();

    const file =
      formData.get("file") as File;

    if (!file) {

      return NextResponse.json(
        {
          error: "No file uploaded",
        },
        { status: 400 }
      );
    }

    const bytes =
      await file.arrayBuffer();

    const buffer =
      Buffer.from(bytes);

    const data =
      await pdfParse(buffer);

    return NextResponse.json({
      text: data.text,
    });

  } catch (err) {

    console.error(err);

    return NextResponse.json(
      {
        error:
          "Failed to parse PDF",
      },
      { status: 500 }
    );
  }
}