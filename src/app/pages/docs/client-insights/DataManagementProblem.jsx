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

            <Box component={"div"}
            sx = {{
                display: "flex",
                flexWrap: "wrap",
                padding: 3,
                justifyContent: "space-around",
                border: "2px solid purple",
                gap: 2

            }}

            >
                {VALUES.map(item=> <Parent value={ item}/>)

                }


            </Box>


        </Box>
    )

}

export default DataManagementProblem;

//inner component

const Parent = (props)=>{

    return(
        <Box component={"div"} sx ={{border: "2px solid black",    width: '250px',
            aspectRatio: '1 / 1', padding: 3}}>

            <p>I am Parent Component, <br/>MY VALUE IS : <b>{props.value}</b></p>
            <p>I have here MEDIUM component that must not have props available</p>


        </Box>
    )

}

const VALUES = [22, 23, 58, 94, 75];

const squareSize = 20;