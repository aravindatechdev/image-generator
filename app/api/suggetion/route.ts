export async function GET(request: Request) {
    //Connect Azure function endpoint
    const response = await fetch('...', {
        cache:'no-cache'
    })
    const textData = await response.text();

  return new Response(JSON.stringify(textData.trim()), {
    status:200,
  })
}
