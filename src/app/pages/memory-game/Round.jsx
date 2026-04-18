'use client'
import React from 'react';
import {Box} from "@mui/material";
import {iconsStore} from "@/app/pages/memory-game/constant-memory-game";
import useCardList from "@/app/pages/memory-game/use-card-list";

const Round = ({gridLength, cardLength}) => {

    const length = gridLength*gridLength;

    const cardsData = useCardList(gridLength);
    const getIcon =(i)=>{

        // const IconComp = iconsStore[0];
        // const IconComp = iconsStore[(i + 1 > gridLength ? length - gridLength : i)];

        const index = (((i +1) % gridLength) + 1)-1;
        // console.log("index", index, ((i +1) % gridLength) + 1, i)
        const IconComp = iconsStore[index];

        return <IconComp fontSize={"50px"}/>

    }
    return (
        <>
            <Box component={"div"}
                 sx={{
                     display: "grid",
                     gridTemplateColumns: `repeat(${gridLength}, 1fr)`,
                     gridTemplateRows: `repeat(${gridLength}, 1fr)`,
                     gap: "50px",
                     padding: 4,
                     width: "fit-content",
                     border: "2px solid red"


                 }}>
                {Array.from({length: length}).map((_, i) => (

                    <Box component={"div"} sx={{
                        width: cardLength, height: cardLength,
                        border: "1px solid black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "san-serif",


                        fontSize: "6rem"

                    }}
                         key={i}>
                        <strong>
                            {/*{(()=> {*/}

                            {/*   return (i + 1 > gridLength ? length - gridLength : i);*/}
                            {/*}) ()}*/}
                            {getIcon(i)}
                        </strong>

                    </Box>
                ))}
            </Box>
        </>
    )
}

export default Round;