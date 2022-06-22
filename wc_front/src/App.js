import logo from './logo.svg';
import './App.css';

import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import {createTheme} from "@mui/material";

import Content from "./components/Content";


const theme = createTheme();


function App() {


    return (
        <Box sx={{ display: 'flex' }}>
            <Content theme={theme}/>
        </Box>
    );
}

export default App;
