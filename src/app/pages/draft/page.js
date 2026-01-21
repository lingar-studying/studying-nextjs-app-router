"use client";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function Draft() {
  const cardLength = 200;
  const [gridLength, setGridLength] = useState(3);
  const [length, setLength] = useState(gridLength * gridLength);

  const [coverIdx, setCoverIdx] = useState(-1);

  useEffect(() => {
    setLength(gridLength * gridLength);
  }, [gridLength]);

  return (
    <>
      <h1>Here will come the Draft work</h1>

      <h2>Let's start make POC for memoroy-game</h2>

      <p>First, let's show Grid of cards: </p>

      <input
        type={"number"}
        placeholder={"Grid Length"}
        value={gridLength}
        onChange={(ev) => setGridLength(ev.target.value)}
      />
      <br />
      <br />
      <Box
        component={"div"}
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridLength}, 1fr)`,
          gridTemplateRows: `repeat(${gridLength}, 1fr)`,
          gap: "50px",
          padding: 4,
          width: "fit-content",
          border: "2px solid red",
        }}
      >
        {Array.from({ length: length }).map((_, i) => (
          <Box
            component={"div"}
            sx={{
              width: cardLength,
              height: cardLength,
              border: "1px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "san-serif",
              background: coverIdx === i ? "black" : "inital",
              fontSize: "6rem",
              cursor: "pointer",
            }}
            onClick={()=>{
                setCoverIdx(i);
                setTimeout(()=>{
                    setCoverIdx(-1);
                }, 2000)
            }}
            key={i}
          >
            <strong>{i + 1}</strong>
          </Box>
        ))}
      </Box>
    </>
  );
}
