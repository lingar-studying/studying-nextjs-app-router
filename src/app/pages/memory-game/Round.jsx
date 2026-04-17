import React from 'react';
import {Box} from "@mui/material";

const Round = ({gridLength, cardLength}) => {

    const length = gridLength*gridLength;

    return (
        <>
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
                {Array.from({length: length}).map((_, i) => (

                    <Box component={"div"} sx={{
                        width: cardLength, height: cardLength,
                        border: "1px solid black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "san-serif",


                        fontSize: "6rem"

                    }}
                         key={i}>
                        <strong>
                            {i + 1}
                        </strong>

                    </Box>
                ))}
            </Box>
        </>
    )
}

export default Round;