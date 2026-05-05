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
                {VALUES.map(item=> (<Parent value={ item}>

                        <Medium> <Child/> </Medium>
                    </Parent>
                    ))

                }


            </Box>


        </Box>
    )

}

export default DataManagementProblem;

//inner component

const Parent = (props)=>{

    return(
        <Box component={"div"} sx ={{border: "2px solid black",    minWidth: '250px', maxWidth: "400px",
            aspectRatio: '1 / 1', padding: 3}}>

            <p>I am Parent Component, <br/>MY VALUE IS : <b>{props.value}</b></p>
            <p>I have here MEDIUM component that must not have props available</p>

            <hr/>
            {props.children}
        {/*    The above props saved for the inner element of component. <Parent>%HERE IS THE CHILDREN% </Parent>*/}

        </Box>
    )

}

const Medium =(/**Props forbidden here beside children*/{children})=> (
    <Box component={"div"} sx ={{border: "2px solid black",    width: '250px',
        aspectRatio: '1 / 1', padding: 3}}>
        <p>I am <b>MEDIUM</b> component, <br/>
        I can only to pass children from me. No Logic or data here. No Props to get or pass...
        </p>

        <hr/>
        {children}


    </Box>
);

const Child = ()=>(
    <Box component={"div"}>
        <p>I am the son of the parent.</p>

        <p>I want to get the value from my parent, but <b>I don't know how.</b> </p>
    </Box>


)

const VALUES = [22, 23, 58, 94, 75];

const squareSize = 20;