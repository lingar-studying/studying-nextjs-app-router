import {createTheme} from "@mui/material";

const MemoryGameTheme = createTheme({


    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    backgroundColor: "white",
                }
            }
        }
    }

});


export default MemoryGameTheme;