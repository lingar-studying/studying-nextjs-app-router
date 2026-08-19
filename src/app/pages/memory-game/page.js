"use client"
import Game from "@/app/client/components/memory-game/Game";
import {Box} from "@mui/material";
import MainPageGame from "@/app/client/components/memory-game/MainPageGame";

export default function Home() {
    return (
        <Box component={"div"} className={"styles.page"}
             sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}
        >
            <Box component={"div"} sx={{width: 1}} >
                <MainPageGame/>
            </Box>


        </Box>
    );
}
