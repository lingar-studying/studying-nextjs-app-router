import {Box} from "@mui/material";
import {createContext, useContext, useState} from "react";
import Mouse from "@/app/client/components/Mouse";


const CommonLogicProblem = () => {


    const [mouseData, setMouseData ] = useState({ id: 2, manufacturer: "Logitech", model: "M185", price: 49.9, color: "Black", isWireless: true });

    const onChangeMouse = (ev,id)=>{
        setMouseData((prev)=>({...prev, [ev.target.name]: ev.target.value}));
    }
    return (
        <Box component={"div"}>
            <h1>Common Data Problem</h1>

            <h2>See those 3 special product components. Do the task. TODO:</h2>

            <ol>
                <li>Product Mouse knows to calculate the total price (with vat addition).</li>
                <li>You can see that it's getting the price and then calculate by useEffect.</li>
                <li>We want this behavior in product 2, and 3 too. but without duplicate the useEffect and keep good practice of
                keeping the common behavior at one place. How can we do it?
                </li>

            </ol>

            <h2>Solution:??? </h2>

            <Box component={"div"}
                 sx={{
                     display: "flex",
                     flexWrap: "wrap",
                     padding: 3,
                     justifyContent: "space-around",
                     border: "2px solid purple",
                     gap: 2

                 }}

            >

                <Mouse data={mouseData} onChange = {onChangeMouse}/>


            </Box>


        </Box>
    )

}

export default CommonLogicProblem;

//inner component
