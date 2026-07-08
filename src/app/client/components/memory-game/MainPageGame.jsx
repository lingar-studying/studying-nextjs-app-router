import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Box} from "@mui/material";
import PropTypes from "prop-types";
import GameZone from "@/app/client/components/memory-game/GameZone";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
const MainPageGame = (props)=>{
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '90%' }} pl ={10}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Draft"  />
                    <Tab label="Highlights"  />
                    <Tab label="Game Zone"  />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <GameZone/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Highlights
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Game Zone
            </CustomTabPanel>
        </Box>
    );
}
export default MainPageGame;