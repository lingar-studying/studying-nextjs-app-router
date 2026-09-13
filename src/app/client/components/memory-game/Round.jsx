'use client'
import React, {useEffect, useMemo, useReducer, useRef, useState} from 'react';
import {Box} from "@mui/material";
import {iconsStore, PPR} from "@/app/client/components/memory-game/constant-memory-game";
import useCardList from "@/app/client/components/memory-game/use-card-list";
import {gameReducer, roundReducer} from "@/app/client/components/memory-game/memory-game-reducers";

const Round = ({gridLength, cardLength, gameDispatch}) => {


    const length = gridLength * gridLength;

    const [seconds, setSeconds] = useState(5);
    const [globalState, dispatch] = useReducer(roundReducer,
        {
            roundRunning: true,
            roundPoints: PPR,
            freeze: false
        }
    );


    const roundDispatcher = useMemo(() => ({
        successQueue: () => dispatch({type: "SUCCESS_CHOICE"}),
        failureQueue: () => dispatch({type: "FAILURE_CHOICE"}),
        startQueue: () => dispatch({type: "START_QUEUE"}),
        successFinishRound: () => dispatch({type: "SUCCESS_FINISH_ROUND"})


    }), []);


    const {cardList, selectCard} = useCardList(gridLength, roundDispatcher) || [];

    const intervalRef = useRef(null);


    const freeze = globalState?.freeze;


    //EFFECTS

    useEffect(() => {


        intervalRef.current = setInterval(() => {
            setSeconds(prev => prev - 1);
        }, 1000);


        return () => clearInterval(intervalRef.current); // ניקוי חובה למניעת זליגת זיכרון
    }, []);

    useEffect(() => {
        if (seconds <= 0) {
            // gameDispatch({type: "ROUND_FINISHED"});
            clearInterval(intervalRef.current);
            return;
        }
    }, [seconds])

    useEffect(() => {
        if (globalState?.roundPoints < 0) gameDispatch({type: "FINISH_GAME"});
    })

    useEffect(()=>{
        console.log("lingar - ", globalState.roundRunning)
        if(!globalState.roundRunning)  gameDispatch({type:"ROUND_FINISHED"});


    },[globalState.roundRunning])
    const getIcon = (i) => {

        const IconComp = iconsStore[i];

        return <IconComp fontSize={"50px"}/>

    }
    return (
        <>
            <Box component={"h3"} textAlign={"center"}> new Points: {globalState?.roundPoints}</Box>
            <Box component={"h4"} textAlign={"center"}> TIME: {seconds}</Box>
            <p>Round of inner: {globalState?.roundRunning+""}</p>
            <Box component={"div"} sx={{display: "flex", width: "100%", justifyContent: "center"}}>
                <Box component={"div"}
                     sx={{
                         display: "grid",
                         gridTemplateColumns: `repeat(${gridLength}, 1fr)`,
                         gridTemplateRows: `repeat(${gridLength}, 1fr)`,
                         gap: "50px",
                         padding: 4,
                         width: "fit-content",
                         border: "8px double purple",
                         backgroundColor: freeze && 'rgba(0, 0, 0, 0.2)', // Half-black (50% opacity)


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
                                <Box component={"div"} sx={{cursor: !freeze ? "initial" : "not-allowed",
                                    width: "100%", height: "100%", justifyContent: "center", display: "flex", alignItems: "center"}}>
                                    <strong>
                                        {/*{(()=> {*/}

                                        {/*   return (i + 1 > gridLength ? length - gridLength : i);*/}
                                        {/*}) ()}*/}
                                        {getIcon(card.iconIndex)}
                                    </strong>
                                </Box>
                                :
                                <Box component={"div"} sx={{
                                    width: "100%", height: "100%",
                                    cursor: !freeze ? "pointer" : "not-allowed"
                                    , "&:hover": !freeze && {backgroundColor: "primary.main"}
                                }}

                                     onClick={() => {
                                         if (!freeze) selectCard(card);
                                     }}
                                />
                            }

                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    )
}

export default Round;