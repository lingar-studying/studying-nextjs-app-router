import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Box} from "@mui/material";
import PropTypes from "prop-types";
import GameZone from "@/app/client/components/memory-game/GameZone";
import "./MainPageGame.css";
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
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className="game-page">
            <Box className="game-container">
                <Box className="game-header">
                    <h1>🏆 Memory Challenge</h1>
                    <p>Train your memory. Match the cards and beat your best score!</p>
                </Box>
                <Box className="game-tabs">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="game tabs"
                        TabIndicatorProps={{
                            className: "tab-indicator"
                        }}
                    >
                        <Tab className="game-tab" label="Draft" />
                        <Tab className="game-tab" label="Highlights" />
                        <Tab className="game-tab" label="Game Zone" />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <GameZone/>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    <div className="placeholder">
                        Highlights
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={2}>
                    <div className="placeholder">
                        Game Zone
                    </div>
                </CustomTabPanel>

            </Box>
        </Box>
    );
}
export default MainPageGame;