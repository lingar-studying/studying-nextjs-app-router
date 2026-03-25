'use client'
import {useState} from "react";
import {Box} from "@mui/material";

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



    return (
        <>
            <Box component={"div"} p={"40px"}>


                <h2>Client Insights</h2>




            </Box>
        </>
    )
}

export default Page;