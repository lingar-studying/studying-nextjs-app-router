'use client'
import React from 'react';
import {Box} from "@mui/material";
import {iconsStore} from "@/app/pages/memory-game/constant-memory-game";
import useCardList from "@/app/pages/memory-game/use-card-list";

const Round = ({gridLength, cardLength}) => {

    const length = gridLength*gridLength;

    const { cardList} = useCardList(gridLength) ||  [];
    const getIcon =(i)=>{

        const IconComp = iconsStore[i];

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
                     border: "8px double purple"


                 }}>
                {cardList.map((card) => (

                    <Box component={"div"} sx={{
                        width: cardLength, height: cardLength,
                        border: "1px solid black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "san-serif",


                        fontSize: "6rem"

                    }}
                         key={card.key}>
                        <strong>
                            {/*{(()=> {*/}

                            {/*   return (i + 1 > gridLength ? length - gridLength : i);*/}
                            {/*}) ()}*/}
                            {getIcon(card.iconIndex)}
                        </strong>

                    </Box>
                ))}
            </Box>
        </>
    )
}

export default Round;