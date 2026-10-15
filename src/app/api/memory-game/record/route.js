import {
    createEntity,
    deleteEntity,
    getAllEntities,
    updateEntity
} from "@/app/server/generic-db-service";
import {GameScheme} from "@/app/server/models/many-schemes";


const entityName = "record";

export async function GET(req1) {

    const records = await getAllEntities(entityName, GameScheme);
    records.sort((a,b)=>{

        if( a.rank <= b.rank) return -1;
        else return 0;
    })


    return Response.json(records);
}

export async function POST(req) {
    console.log(req.body)
    const record = await req.json();

    const records = await getAllEntities(entityName, GameScheme);




    const newRecord = await createEntity(record, entityName, GameScheme);



    return Response.json(newRecord);

}

export async function PUT(req) {
    const apartment = await req.json();

    const updatedApartment = await updateEntity(apartment, entityName);

    return Response.json(updatedApartment);

}


export async function DELETE(req) {
    const reqData = await req.json();

    const id = reqData._id;

    const result = await deleteEntity(id, entityName);

    return Response.json(result);

}