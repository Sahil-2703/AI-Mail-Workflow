export async function streamText(
  text: string,
  callback: (chunk: string) => void
) {

  const words = text.split(" ");

  let current = "";

  for (let i = 0; i < words.length; i++) {

    current += words[i] + " ";

    callback(current);

    await new Promise((resolve) =>
      setTimeout(resolve, 20)
    );
  }
}