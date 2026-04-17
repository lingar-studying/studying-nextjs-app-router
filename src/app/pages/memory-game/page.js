import Game from "@/app/pages/memory-game/Game";
import {Box} from "@mui/material";

export default function Home() {
  return (
    <Box component={"div"} className={"styles.page"}
    sx = {{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}
    >

      <h1>Here will come memory game</h1>

        <Box component={"div"}>

            <h2>Game Zone</h2>

            <Game/>

        </Box>




    </Box>
  );
}
