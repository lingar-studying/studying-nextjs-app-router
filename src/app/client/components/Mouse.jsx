import {Box} from "@mui/material";
import {daDK} from "@mui/material/locale";

//    { id: 1, manufacturer: "Logitech", model: "M185", price: 49.9, color: "Black", isWireless: true },
const Mouse = (props2)=>{



    console.log("mouse = ", props2.data)
    return(
        <div>
           <h3>Mouse</h3>
            <Box component={"div"} sx = {{display: "flex", justifyContent: "space-between",
            width: "500px", height: "500px", flexWrap: "wrap", border: "2px solid blue"}} p ={2}>
                <span>Manufacturer: {props2.data?.manufacturer}</span>

                <span>Model: {props2.data?.model}</span>

                <span>Price: {props2.data?.price}</span>



            </Box>
        </div>
    )
}

export default Mouse;