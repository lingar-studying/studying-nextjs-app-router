'use client'

import {Box} from "@mui/material";
import useGetUser from "@/app/client/client-services/use-get-user";

const Records = ()=> {

    const {user, loading} = useGetUser();

    return (
        <Box component={"div"} >
            {user? `Hello ${user.name}` : "Login"}
            <h2>Highlights</h2>
        </Box>
    )
}

export default Records;