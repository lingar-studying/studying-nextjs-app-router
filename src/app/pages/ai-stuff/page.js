'use client'
import {Box} from "@mui/material";
import {useEffect, useState} from "react";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import PetsIcon from '@mui/icons-material/Pets';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const icons = [
    AutoAwesomeIcon,
    PsychologyIcon,
    SmartToyIcon,
    StarIcon,
    FavoriteIcon,
    HomeIcon,
    PetsIcon,
    EmojiEventsIcon,
    MusicNoteIcon,
    LightbulbIcon,
];

export default function AiStuff() {

    const cardLength = 200;
    const [gridLength, setGridLength] = useState(3);
    const [length, setLength] = useState(gridLength*gridLength);


    useEffect(()=>{
        setLength(gridLength*gridLength);
    }, [gridLength])


    return (
        <>
            <h1>Here will come the AI-Stuff work</h1>

            <h2>Let's start make POC for memoroy-game</h2>

            <p>First, let's show Grid of cards: </p>

            <input type={"number"} placeholder={"Grid Length"} value={gridLength}
                   onChange={(ev) => setGridLength(ev.target.value)}/>
            <br/>
            <br/>
            <Box component={"div"}
                 sx={{
                     display: "grid",
                     gridTemplateColumns: `repeat(${gridLength}, 1fr)`,
                     gridTemplateRows: `repeat(${gridLength}, 1fr)`,
                     gap: "50px",
                     padding: 4,
                     width: "fit-content",
                     border: "2px solid red"


                 }}>

                {Array.from({length: length}).map((_, i) => {
                    const Icon = icons[i % icons.length];

                    return (
                        <Box component={"div"} sx={{
                            width: cardLength, height: cardLength,
                            border: "1px solid black",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                             key={i}>
                            <Icon sx={{fontSize: "6rem"}}/>
                        </Box>
                    );
                })}
            </Box>


        </>


    );


}
