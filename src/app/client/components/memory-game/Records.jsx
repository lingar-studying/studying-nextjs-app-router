'use client'

import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import useGetUser from "@/app/client/client-services/use-get-user";
import {useContext, useEffect, useState} from "react";
import GlobalContext from "@/app/client/client-services/global-context";
import axios from "axios";

const Records = () => {

    const {loggedUser} = useContext(GlobalContext);

    const [records, setRecords] = useState([]);

    useEffect(() => {

        const getData = async () =>{
            const response = await axios.get(`/api/memory-game/record`);

            setRecords(response.data);
        }

        getData();


    }, []);

    return (
        <Box component={"div"}>
            <p> {loggedUser && `user logged ${loggedUser.name}`}</p>
            <h2>Highlights</h2>


            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Rank</TableCell>
                            <TableCell align="center">player name</TableCell>
                            <TableCell align="center">Points</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Level</TableCell>
                            <TableCell align="center">Grid Size</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {records.map((record) => (
                            <TableRow
                                key={record._id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell align="center">{record.rank}</TableCell>
                                <TableCell component="th" scope="row">
                                    {record.playerName}
                                </TableCell>
                                <TableCell align="center">{record.accumulatedPoints}</TableCell>
                                <TableCell align="center">{new Date(record.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "2-digit",
                                })}</TableCell>

                                <TableCell align="center">{record.level}</TableCell>
                                <TableCell align="center">{record.gridCount} X {record.gridCount} </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    )
}

export default Records;