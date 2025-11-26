const apartments = [];

/*
o address: string
o rooms: number
o floor: number
o type: string
o isCommercial: Boolean
*price: number


 */
export async function GET(req1) {

    if (apartments.length < 3) {
        apartments.push({
            address: "Hayezira 13 Petach Tikva",
            rooms: 1,
            floor: 2,
            type: "Industrial",
            isCommercial: true,
            price: 1800
        });
        apartments.push({
            address: "Ezel 1 Petach Tikva",
            rooms: 2,
            floor: 1,
            type: "OLD",
            isCommercial: false,
            price: 2600
        });

        apartments.push({
            address: "Savionim 6 Ariel",
            rooms: 4,
            floor: 3,
            type: "Karavan",
            isCommercial: false,
            price: 3300
        });
    }

    return Response.json(apartments);
}