'use client'
import {useState} from "react";
import {Box, Button, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import Mouse from "@/app/client/components/Mouse";
import DataManagementProblem from "@/app/pages/docs/client-insights/DataManagementProblem";

const mouseMockData = [
    { id: 1, manufacturer: "Logitech", model: "M185", price: 49.9, color: "Black", isWireless: true },
    { id: 2, manufacturer: "Razer", model: "DeathAdder Essential", price: 129.9, color: "Green", isWireless: false },
    { id: 3, manufacturer: "HP", model: "X500", price: 59.9, color: "Gray", isWireless: false },
    { id: 4, manufacturer: "Dell", model: "MS116", price: 39.9, color: "Black", isWireless: false },
    { id: 5, manufacturer: "Microsoft", model: "Bluetooth Mouse", price: 89.9, color: "Blue", isWireless: true },
    { id: 6, manufacturer: "Lenovo", model: "300 Wireless Compact", price: 74.9, color: "White", isWireless: true },
    { id: 7, manufacturer: "Asus", model: "WT425", price: 69.9, color: "Red", isWireless: true },
    { id: 8, manufacturer: "A4Tech", model: "OP-620D", price: 34.9, color: "Black", isWireless: false },
    { id: 9, manufacturer: "Corsair", model: "Harpoon RGB", price: 179.9, color: "Black", isWireless: false },
    { id: 10, manufacturer: "SteelSeries", model: "Rival 3", price: 159.9, color: "Black", isWireless: false }
];

const Page = () => {


    const [mouseMockState, setMouseMockState] = useState(mouseMockData);
    const [selectedMouse, setSelectedMouse] = useState(mouseMockData[2]);

    const onChangeMouse = (ev, id)=>{

        const changeIdx = mouseMockState.findIndex(item=> item.id === id);

        console.log("change idx = ", ev)

        const prop = ev.target.name;
        let change = mouseMockState[changeIdx];
        change[prop] = ev.target.value;

        console.log("changes", prop, ev.target.value)
        const temp = [...mouseMockState];
        temp[changeIdx] = change;

        setMouseMockState(temp);
    }
    return (
        <>
            <Box component={"div"} p={"40px"}>


                <h2>Client Insights</h2>
                <p>We go from new to the old. </p>
                <h3>Solve this:</h3>
                <DataManagementProblem/>




                <hr/>
                <h3>Simple component: </h3>
                <Mouse data = {mouseMockData[0]}/>

                <h3>Mouse with state prop:</h3>
                <Mouse data = {selectedMouse} onChange = {onChangeMouse}/>


                <Button variant={"contained"} color={"primary"}
                        onClick = {()=>setSelectedMouse(mouseMockData[0])}

                >Mouse 1 </Button>

                <Button variant={"contained"} color={"success"}
                        onClick = {()=>setSelectedMouse(mouseMockData[1])}

                >Mouse 2 </Button>

                <Button variant={"contained"} color={"secondary"}
                        onClick = {()=>setSelectedMouse(mouseMockData[2])}

                >Mouse 3 </Button>

                <Table width={"700px !important"}>

                    <TableHead>
                        
                        <TableRow>
                            <TableCell>
                                Id
                            </TableCell>
                            <TableCell>
                                Manufacturer
                            </TableCell>
                            <TableCell>
                                Model
                            </TableCell>
                            <TableCell>
                                Price
                            </TableCell>
                            
                        </TableRow>

                    </TableHead>

                    <TableBody>
                        {mouseMockState.map((item, idx)=>{

                            return(
                                <TableRow key={item.id}>
                                    <TableCell>
                                        {item.id}
                                    </TableCell>
                                    <TableCell>
                                        {item.manufacturer}
                                    </TableCell>

                                    <TableCell>
                                        {item.model}
                                    </TableCell>

                                    <TableCell>
                                        {item.price}
                                    </TableCell>


                                </TableRow>
                            )
                        })}

                    </TableBody>

                </Table>

            </Box>
        </>
    )
}

export default Page;