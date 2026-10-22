import {
    createEntity,
    deleteEntity,
    getAllEntities,
    updateEntity
} from "@/app/server/generic-db-service";
import {GameScheme, RecordModel} from "@/app/server/models/many-schemes";
import {connectDB2} from "@/app/server/db-services";


const entityName = "record";

export async function GET(req1) {

    const records = await getAllEntities(entityName, GameScheme);
    records.sort((a, b) => {

        if (a.rank <= b.rank) return -1;
        else return 0;
    });


    return Response.json(records);
}

export async function POST(req) {

    /**
     * ALGO:
     * Sign the new parameter rank 0
     *Sort them by rank.
     * if there are more than ten - cut the larger than 10. (use substr for removing more than 10)
     * iterate on the last to the top. on each check if the points of the new record vs the points of the current...
     * if current >= new - leave the state and stop. Else - replace them in the rank value.
     * Than - if list contains 0, find it and remove from the array - and delete from db. create new entity from the new record. Save All array/.
     * That's all.
     *
     */

    try {
        await connectDB2();
        console.log(req.body)
        const record = await req.json();

        const records = await RecordModel.find({});
        // Sort them by rank.
        records.sort((a, b) => {

            if (a.rank <= b.rank) return -1;
            else return 0;
        });

        //some cleaning to the data. - if there are more than ten - cut the larger than 10. (use substr for removing more than 10)
        const deleteRecords = records.filter(item => (item.rank < 1 || !item.rank));
        let leftRecords = records.filter(item => item.rank >= 1);
        if (leftRecords.length > 9) {
            const deleteAlso = leftRecords.slice(10);
            leftRecords = leftRecords.slice(0, 10)
            deleteRecords.concat(deleteAlso);
        }
        await RecordModel.deleteMany({_id: {$in: deleteRecords.map(r => r._id)}});

        let newRecordFound = false;
        let deleteId = null;

        // iterate on the last to the top. on each check if the points of the new record vs the points of the current...
        for (let i = leftRecords.length - 1; i >= 0; i--) {

            const current = records[i];
            // if current >= new - leave the state and stop. Else the new is better - replace them in the rank value.
            if (record?.accumulatedPoints >= current.accumulatedPoints) {
                newRecordFound = true;
                //adding the new to the list

                // if (record?.accumulatedPoints > current.accumulatedPoints) {
                const tempRank = records[i].rank;
                current.rank++;
                record.rank = tempRank;
                if (i == 0 && leftRecords.length == 10) {//if it's the first item it should be deleted
                    deleteId = current._id;


                }
                // } else {
                //     record.rank = current.rank;
                // }



            } else {
                break;
            }
        }


        if (newRecordFound) {

            if (leftRecords.length == 0) record.rank = 1;
            const recordDbDoc = new RecordModel(record);
            records.push(recordDbDoc);
            if(deleteId){
                await RecordModel.deleteOne({_id: deleteId});//assume it will be failed should be {_id: current._id}
            }
        }

            //saving the new list
            await RecordModel.bulkSave(records);



        // const newRecord = await createEntity(record, entityName, GameScheme);


        return Response.json(records);
    } catch (e) {
        return Response.json({error: e.message}, {status: 500})
    }


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