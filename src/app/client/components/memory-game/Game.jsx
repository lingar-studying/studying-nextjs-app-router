'use client'

import React, {use, useContext, useEffect, useMemo, useReducer, useState} from "react";
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import {Box, Button, FormControl, TextField, Typography} from "@mui/material";
import Round from "@/app/client/components/memory-game/Round";
import GlobalContext from "@/app/client/client-services/global-context";
import Input from '@mui/material/Input';
import {gameReducer} from "@/app/client/components/memory-game/memory-game-reducers";


/**
 * The flow of the game - mock
 */

const initialUserMock = {
    username: "lingar",
    password: "12345678",
    email: "a@a.com",
    tel: "01244",
    gamesPlayed: 0,
    accumulatedPoint: 0

}

const Game = (props) => {

    const timerN = useState(10);
    const accumulatedScore = useState(0);
    const roundScore = useState(20);
    // const gridSize = useState(3);
    const cards = useState([]);
    const firstChosenCard = useState(null);
    const secondChosenCard = useState(null);
    const roundNumber = useState(1);
    const {loggedUser} = useContext(GlobalContext);
    const [guestName, setGuestName] = useState(null);

    //reducer
    const [globalState, dispatch] = useReducer(gameReducer, {
        gameRunning: true,
        roundRunning: false,
        gridSize: 2,
        gamePoints: 0,
        lastRoundPoints: 0
    });

    const [showSuccessMsg, setShowSuccessMsg] = useState(false);

    //FUNCTIONS
    const handleGuestNameSave = (e) => {
        e.preventDefault();
        const guestName = e.currentTarget.elements?.guestName.value;
        setGuestName(guestName);

    }


    //EFFECTS

    // const finishGame = useMemo(()=> dispatch({type: "FINISH_GAME"}))

    useEffect(()=>{

        let runTimeout = null;
        if(!globalState.roundRunning && globalState.gameRunning){
            setShowSuccessMsg(true);
           runTimeout = setTimeout(function (){
                setShowSuccessMsg(false);
                dispatch({type: "ADD_POINTS"})

            },3000);
        }

        return ()=>clearTimeout(runTimeout);
    }, [globalState.roundRunning])

    return (
        <Box component={"div"}>
            <p> {loggedUser && `user logged ${loggedUser.name}`}</p>
            {(!loggedUser && !guestName) &&
                <>
                    <Box component="form" onSubmit={handleGuestNameSave} sx={{'& > :not(style)': {m: 1}}}
                         noValidate
                         autoComplete="off">

                        <Input variant={"outlined"} name="guestName"
                               placeholder={"Add Guest Name"}
                               color={"white"}
                               defaultValue=""
                        />
                        <Input type={"submit"} value="Save Guest Name"
                        />

                    </Box>

                </>}
            {guestName && <p>{guestName ?? ""} is playing</p>}


            <p>game running? {globalState.gameRunning+""}</p>

            <p>round running? {globalState.roundRunning+""}</p>
            <h1>Game Points: {globalState?.gamePoints}</h1>

            {!globalState.roundRunning && globalState.gameRunning && showSuccessMsg &&
            <p>Great You have finished the round with {globalState.lastRoundPoints}.
                Your new score will be: {globalState.gamePoints} + {globalState.lastRoundPoints} =
                {globalState.gamePoints +globalState.lastRoundPoints}</p>}



            {globalState?.gameRunning ? (globalState?.roundRunning ?<Round cardLength={200} gridLength={globalState?.gridSize}
                                                                           gameDispatch = {dispatch}/>
            :  <Button onClick={()=>dispatch({type: "START_NEXT_ROUND"})}>Ready To Start Round? </Button>)
                :<Typography
                    variant="h1"
                    sx={{
                        fontSize: '4rem',
                        fontWeight: 900,
                        // color: '#ff3333',
                        textTransform: 'uppercase',
                        textShadow: '3px 3px 0 #000, 6px 6px 0 grey, 9px 9px 15px rgba(0,0,0,0.8)',
                        textAlign: "center"
                    }}
                >
                    Game Over
                </Typography>
            }



        </Box>
    )
}


export default Game;