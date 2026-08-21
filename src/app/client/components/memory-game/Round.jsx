'use client'
import React, {useEffect, useRef, useState} from 'react';
import {Box} from "@mui/material";
import {iconsStore, PPR} from "@/app/client/components/memory-game/constant-memory-game";
import useCardList from "@/app/client/components/memory-game/use-card-list";

const Round = ({gridLength, cardLength, gameDispatch}) => {



    const length = gridLength * gridLength;
    const [pointsPerRound, setPointsPerRound] = useState(PPR)
    const decreasePoints = ()=>{
        setPointsPerRound(pointsPerRound-1);
    }
    const [seconds, setSeconds] = useState(5);

    const {cardList, selectCard} = useCardList(gridLength, decreasePoints) || [];

    const intervalRef = useRef(null);


    useEffect(() => {


        intervalRef.current = setInterval(() => {
            setSeconds(prev => prev- 1);
        }, 1000);


        return () => clearInterval(intervalRef.current); // ניקוי חובה למניעת זליגת זיכרון
    }, []);

    useEffect(()=>{
        if(seconds <=0 ){
            gameDispatch({type: "ROUND_FINISHED"});
            clearInterval(intervalRef.current);
            return ;
        }
    }, [seconds])

    const getIcon = (i) => {

        const IconComp = iconsStore[i];

        return <IconComp fontSize={"50px"}/>

    }
    return (
        <>
            <Box component={"h3"} textAlign={"center"}> points: {pointsPerRound}</Box>
            <Box component={"h4"} textAlign={"center"}> TIME: {seconds}</Box>
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
                        backgroundColor: !card.isFlipped && "grey",


                        fontSize: "6rem"

                    }}
                         key={card.key}>

                        {card.isFlipped ?
                            <strong>
                                {/*{(()=> {*/}

                                {/*   return (i + 1 > gridLength ? length - gridLength : i);*/}
                                {/*}) ()}*/}
                                {getIcon(card.iconIndex)}
                            </strong>
                            :
                            <Box component={"div"} sx = {{width: "100%", height: "100%",
                            cursor: "pointer"
                            ,"&:hover":{backgroundColor: "primary.main"} }}

                                 onClick = {()=>selectCard(card)}

                            />
                        }

                    </Box>
                ))}
            </Box>
        </>
    )
}

export default Round;