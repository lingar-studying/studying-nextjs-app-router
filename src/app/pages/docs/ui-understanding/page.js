'use client'
import {useState} from "react";
import {Box} from "@mui/material";


const Page = () => {


    const [myState, setMyState]= useState("heelo");
    return (
        <>
            <Box component={"div"} p ={"40px"}>


                <h2>Here is some examples of how to create and manage the pages in next </h2>

                <p>In Next App Router - everything is working by the folder structure.</p>
                <Box>For running a page - you need to create it and put it under the specific folder,
                    under app. this will be the structure of the path.
                    For creating a page create page.js file (U MUST follow this name), and put the react
                    component you want.
                    Than route to http://localhost:3000/the_folder_name
                    and you should see the page.

                </Box>
                <Box color="info.main" component={"p"}>
                    For example this page reside in the project under
                    app/docs/ui-understanding/page.js
                    and the URL is :

                    <a href={"http://localhost:3000/pages/docs/ui-understanding"} target={"blank"}>http://localhost:3000/pages/docs/ui-understanding</a>
                </Box>

                <Box color={"warning.main"} component={"p"}>
                    This is unlike create a web service which you put there route.js.
                    Pay attention that you need to pass <b>only one</b> of route.js OR page.js,
                    because if you create them both - next will confused which one to choose.
                </Box>

                <Box color={"warning.main"} component={"p"}>Pay attention that for using react useState and useEffect, you need to add 'use client'
                    notation at the file head. See in this file if you remove it - how you get bugs... </Box>
                <p>State = {myState}</p>

                <Box component={"p"}>
                    The above can work with the nested you want you can do as you want.

                    <a href = "http://localhost:3000/pages/docs/ui-understanding/a/b/c/z"
                    target={"_blank"}
                    >This is page ui-understand/a/b/c/z</a>


                </Box>

                <Box component={"p"}>

                    Layout provide outer layout to the component and its children (what reside under it).
                    It's great for menus, and for the website or specific features frame.



                </Box>
                <Box component={"p"}>


                </Box>
                <Box component={"p"}>


                </Box>




            </Box>
        </>
    )
}

export default Page;