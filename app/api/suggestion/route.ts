export async function GET(request: Request) {
    //Connect Azure function endpoint
    const response = await fetch("http://localhost:7071/api/getChatGPTSuggestion", {
        cache:'no-cache'
    })
    const textData = await response.text();

  return new Response(JSON.stringify(textData.trim()), {
    status:200,
  })
}
