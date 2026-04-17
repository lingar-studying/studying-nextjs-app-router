
import React from "react";
import AlignHorizontalRightIcon from '@mui/icons-material/AlignHorizontalRight';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import {Box} from "@mui/material";


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

const IconsStore = [AcUnitIcon, AlignHorizontalRightIcon, AlignHorizontalLeftIcon];

const Game = (props)=>{


    return(
        <Box component={"div"}>
            <h2>Game</h2>
            <AlignHorizontalLeftIcon/>
        </Box>
    )
}


export default Game;