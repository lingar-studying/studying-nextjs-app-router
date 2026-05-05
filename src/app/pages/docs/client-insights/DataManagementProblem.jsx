import {Box} from "@mui/material";

const DataManagementProblem =()=>{


    return(
        <Box component={"div"}>
            <h1>Data Management Problem</h1>

            <h2>See those components. Do the task. TODO:</h2>

            <ol>
                <li>Make the child component will get the parent values.</li>
                <li>You cannot add any props to the medium component.</li>

            </ol>


        </Box>
    )

}

export default DataManagementProblem;

//inner component

const Parent = (props)=>{

    return(
        <Box component={"div"} sx ={{border: "2px solid black", width: squareSize, height: squareSize}}>

            <h2>I am Parent Component, MY VALUE IS : {props.value}</h2>
            <h3>I have here MEDIUM component that must not have props available</h3>


        </Box>
    )

}

const VALUES = [22, 23, 58, 94, 75];

const squareSize = 20;