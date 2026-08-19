'use client'

import React, {use, useContext, useState} from "react";
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import {Box, TextField} from "@mui/material";
import Round from "@/app/client/components/memory-game/Round";
import GlobalContext from "@/app/client/client-services/global-context";

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
    const gridSize = useState(2);
    const cards = useState([]);
    const firstChosenCard = useState(null);
    const secondChosenCard = useState(null);
    const roundNumber = useState(1);
    const {loggedUser} = useContext(GlobalContext);
    const guestName = useState(null);


    return (
        <Box component={"div"}>
            <p> {loggedUser && `user logged ${loggedUser.name}`}</p>
            {!loggedUser &&
            <>
                <form>
                    <TextField variant={"outlined"}  name = "guestName"
                    placeholder={"Add Guest Name"}
                               color={"white"}
                    />
                    <TextField type={"submit"} value = "Save Guest Name"
                               sx=
                                   {{'& .MuiInputBase-root': {backgroundColor: "primary.main"}}} />

                </form>

            </>}
            <Round cardLength={200} gridLength={5}/>
        </Box>
    )
}


export default Game;