"use client"
import GameZone from "@/app/client/components/memory-game/GameZone";
import {Box} from "@mui/material";
import MainPageGame from "@/app/client/components/memory-game/MainPageGame";

export default function Home() {
    return (
        <Box component={"div"} className={"styles.page"}
             sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}
        >

            <h1>Here will come memory game</h1>

            <Box component={"div"} sx = {{width: 1}} p ={"200px"}>
                <MainPageGame/>
            </Box>


        </Box>
    );
}
