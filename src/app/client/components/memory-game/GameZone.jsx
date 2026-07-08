import React from "react";
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import {Box} from "@mui/material";
import Round from "@/app/client/components/memory-game/Round";


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


    return (
        <Box component={"div"}>
            <Round cardLength={200} gridLength={5}/>
        </Box>
    )
}


export default GameZone;