import {Box, TextField} from "@mui/material";
import {createContext, useContext, useEffect, useState} from "react";
import Mouse from "@/app/client/components/Mouse";
import AppConfigContext from "@/app/app-config-context";


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
                <li>This is only use case example for different products/components</li>
                <li>You can change the logic of mouse, create another file. </li>
                <li>But you <b>MUST</b> not duplicate the useEffect that does it, and get the total in one row maximum. </li>
                <li><b>Make it happen.</b></li>

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

                <Furniture data ={{id: 3, manufacturer: "IKEA", model: "Desk", price: 429.23, color: "white"}}/>

                <Commodity data ={{id: 3, manufacturer: "Elite", model: "Pesek Zeman", price: 6.5, color: "white"}}/>


            </Box>


        </Box>
    )

}

export default CommonLogicProblem;

//inner component
const Furniture = (props2) => {

    const [total, setTotal] = useState(0);

    const [data, setData] = useState(props2.data);

    const onChange = (ev)=>{
        setData((prev)=>({...prev, [ev.target.name]: ev.target.value}));
    }

    return (
        <div>
            <h3>Furniture</h3>
            <Box component={"div"} sx={{
                display: "flex", justifyContent: "space-between",
                width: "500px", flexWrap: "wrap", border: "2px solid yellow",
                backgroundColor: "brown",
                color: "white"
            }} p={2}>


                <span>Manufacturer: {data?.manufacturer}</span>

                <span>Model: {data?.model}</span>

                <span>Price: {data?.price}</span>


            </Box>
            <form  noValidate autoComplete="off">
                <Box component={"div"} sx={{
                    display: "flex", justifyContent: "space-between",
                    width: "500px", flexWrap: "wrap", border: "2px solid blue", gap: 2
                }} p={2}>

                    <TextField variant={"outlined"}
                               name = "manufacturer"
                               value={data?.manufacturer}
                               label={"Manufacturer"} onChange={onChange}/>

                    <TextField variant={"outlined"}
                               value={data?.model}
                               name = "model"

                               label="Model" onChange={onChange}/>

                    <TextField variant={"outlined"}
                               value={data?.price}
                               name = "price"


                               label="Price" onChange={onChange}/>

                    <h4>Total = {total}</h4>

                </Box>
            </form>


        </div>
    )
}


const Commodity = (props2) => {

    const [total, setTotal] = useState(0);

    const [data, setData] = useState(props2.data);

    const onChange = (ev)=>{
        setData((prev)=>({...prev, [ev.target.name]: ev.target.value}));
    }

    return (
        <div>
            <h3>Commodity</h3>
            <Box component={"div"} sx={{
                display: "flex", justifyContent: "space-between",
                width: "500px", flexWrap: "wrap", border: "2px solid yellow",
                backgroundColor: "green",
                color: "white"
            }} p={2}>


                <span>Manufacturer: {data?.manufacturer}</span>

                <span>Model: {data?.model}</span>

                <span>Price: {data?.price}</span>


            </Box>
            <form  noValidate autoComplete="off">
                <Box component={"div"} sx={{
                    display: "flex", justifyContent: "space-between",
                    width: "500px", flexWrap: "wrap", border: "2px solid blue", gap: 2
                }} p={2}>

                    <TextField variant={"outlined"}
                               name = "manufacturer"
                               value={data?.manufacturer}
                               label={"Manufacturer"} onChange={onChange}/>

                    <TextField variant={"outlined"}
                               value={data?.model}
                               name = "model"

                               label="Model" onChange={onChange}/>

                    <TextField variant={"outlined"}
                               value={data?.price}
                               name = "price"


                               label="Price" onChange={onChange}/>

                    <h4>Total = {total}</h4>

                </Box>
            </form>


        </div>
    )
}