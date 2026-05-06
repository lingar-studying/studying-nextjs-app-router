import {Box, TextField} from "@mui/material";
import {daDK} from "@mui/material/locale";
import {useContext, useEffect, useState} from "react";
import AppConfigContext from "@/app/app-config-context";

//    { id: 1, manufacturer: "Logitech", model: "M185", price: 49.9, color: "Black", isWireless: true },
const Mouse = (props2) => {

    const [total, setTotal] = useState(0);
    const appConfigCtx = useContext(AppConfigContext);


    useEffect(()=>{

        setTotal(Number((props2?.data?.price * 1.18).toFixed(2)));
    },[props2?.data?.price])
    console.log("mouse = ", props2)
    return (
        <div>
            <h3>Mouse</h3>
            <Box component={"div"} sx={{
                display: "flex", justifyContent: "space-between",
                width: "500px", flexWrap: "wrap", border: "2px solid blue"
            }} p={2}>


                <span>Manufacturer: {props2.data?.manufacturer}</span>

                <span>Model: {props2.data?.model}</span>

                <span>Price: {props2.data?.price}</span>


                <span>{appConfigCtx.darkMode? "Dark ": "Light "} Mode</span>
            </Box>
            <form  noValidate autoComplete="off">
                <Box component={"div"} sx={{
                    display: "flex", justifyContent: "space-between",
                    width: "500px", flexWrap: "wrap", border: "2px solid blue", gap: 2
                }} p={2}>

                    <TextField variant={"outlined"}
                                name = "manufacturer"
                               value={props2.data?.manufacturer}
                               label={"Manufacturer"} onChange={(ev) => props2.onChange(ev, props2.data.id)}/>

                    <TextField variant={"outlined"}
                               value={props2.data?.model}
                               name = "model"

                               label="Model" onChange={(ev) => props2.onChange(ev, props2.data.id)}/>

                    <TextField variant={"outlined"}
                               value={props2.data?.price}
                               name = "price"


                               label="Price" onChange={(ev) => props2.onChange(ev, props2.data.id)}/>

                    <h4>Total = {total}</h4>

                </Box>
            </form>


        </div>
    )
}

export default Mouse;