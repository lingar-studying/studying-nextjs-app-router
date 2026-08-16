'use client'

import React, {use, useContext, useState} from "react";
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import {Box} from "@mui/material";
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

const GameZone = (props) => {

    const user= initialUserMock;
    const guestName = useState(null);
    const timerN = useState(10);
    const accumulatedScore = useState(0);
    const roundScore = useState(20);
    const gridSize = useState(2);
    const cards = useState([]);
    const firstChosenCard = useState(null);
    const secondChosenCard = useState(null);
    const roundNumber = useState(1);
    const {loggedUser} = useContext(GlobalContext);


    return (
        <Box component={"div"}>
            <p> {loggedUser && `user logged ${loggedUser.name}`}</p>

            <Round cardLength={200} gridLength={5}/>
        </Box>
    )
}


export default GameZone;