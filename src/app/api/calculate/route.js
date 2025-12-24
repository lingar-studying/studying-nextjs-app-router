export async function GET(req1) {

  const urlData = new URL(req1.url);
  console.log("urlData = ", urlData);
  const {searchParams} = urlData;
  // const searchParams = urlData.searchParams;
  const x = Number(searchParams.get("x")); 
  const y = Number(searchParams.get("y")); 


    return Response.json({ result: `${x} + ${y} = ${x+y}` })


    // return Response.json({ result: `${x} + ${y} = ${x+y}` })
  }