
export async function GET(req1) {




    return Response.json({message: "signed"});
}

export async function POST(req) {
    console.log(req.body)

    // return Response.json(newApartment);

}

// export async function PUT(req) {
//     const updatedApartment = await req.json();
//
//     const index = apartments.findIndex(item => item.id === updatedApartment.id);
//     apartments[index] = updatedApartment;
//     return Response.json(updatedApartment);
//
// }
//
//
// export async function DELETE(req) {
//     const reqData = await req.json();
//
//     const id = reqData.id;
//     console.log("data " , id)
//
//     const index = apartments.findIndex(item => item.id === id);
//     if(index < 0) return Response.json({ message: "doesn't exist" }, { status: 400 });
//
//
//
//     console.log("index = ", index)
//     apartments.splice(index, 1);
//
//     return Response.json(true);
//
// }