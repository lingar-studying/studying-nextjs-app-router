'use client'

import React, {use, useContext, useState} from "react";
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import {Box, FormControl, TextField} from "@mui/material";
import Round from "@/app/client/components/memory-game/Round";
import GlobalContext from "@/app/client/client-services/global-context";
import Input from '@mui/material/Input';


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
    const [guestName, setGuestName] = useState(null);


    //FUNCTIONS
    const handleGuestNameSave = (e) => {
        e.preventDefault();
        const guestName = e.currentTarget.elements?.guestName.value;
        setGuestName(guestName);

    }

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

            <Round cardLength={200} gridLength={5}/>
        </Box>
    )
}


export default Game;