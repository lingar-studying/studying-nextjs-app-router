'use client'

import {Box} from "@mui/material";
import useGetUser from "@/app/client/client-services/use-get-user";
import {useContext} from "react";
import GlobalContext from "@/app/client/client-services/global-context";

const Records = ()=> {

    const {loggedUser} = useContext(GlobalContext);

    return (
        <Box component={"div"} >
           <p> {loggedUser && `user logged ${loggedUser.name}`}</p>
            <h2>Highlights</h2>
        </Box>
    )
}

export default Records;