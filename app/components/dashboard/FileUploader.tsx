"use client";

import { useCallback } from "react";

import { useDropzone } from "react-dropzone";

interface Props {
  onFileRead: (content: string, fileName: string) => void;
}

export default function FileUploader({ onFileRead }: Props) {
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (!file) return;

      const extension = file.name.split(".").pop();

      // TXT
      if (extension === "txt") {
        const text = await file.text();

        onFileRead(text, file.name);
      }

      // PDF
      else if (extension === "pdf") {
        const formData = new FormData();

        formData.append("file", file);

        const res = await fetch("/api/parse-pdf", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();

        onFileRead(data.text, file.name);
      }

      // DOCX
      else if (extension === "docx") {
        const mammoth = await import("mammoth");

        const arrayBuffer = await file.arrayBuffer();

        const result = await mammoth.extractRawText({
          arrayBuffer,
        });

        onFileRead(result.value, file.name);
      } else {
        alert("Unsupported file type.");
      }
    },
    [onFileRead],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-3xl p-10 text-center transition cursor-pointer ${
        isDragActive
          ? "border-orange-500 bg-orange-500/10"
          : "border-white/10 bg-white/5"
      }`}
    >
      <input {...getInputProps()} />

      <p className="text-lg font-medium">Drag & Drop Files</p>

      <p className="text-sm text-gray-400 mt-3">PDF, DOCX, TXT supported</p>
    </div>
  );
}
