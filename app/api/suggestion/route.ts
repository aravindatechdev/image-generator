export async function GET(request: Request) {
  //Connect Azure function endpoint
  const response = await fetch(
    "https://ai-image-generator-123.azurewebsites.net/api/getchatgptsuggestion",
    {
      cache: "no-cache",
    }
  );
  const textData = await response.text();

  return new Response(JSON.stringify(textData.trim()), {
    status: 200,
  });
}
