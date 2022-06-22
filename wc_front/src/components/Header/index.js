import * as React from "react";
import {useState} from "react";

import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

import {useDispatch, useSelector} from "react-redux";

import {AppBar} from "../AppBar";
import {setSideBarOpen} from "store/reducers/SideBar";

export default function Header({theme, drawerWidth}) {
    const dispatch = useDispatch();
    const open = useSelector(state => state.sidebar_reducer.open)
    const current_page = useSelector(state => state.current_page_reducer.page)
    const [headerText, setHeaderText] = useState();

    const handleDrawerOpen = () => {
        dispatch(setSideBarOpen(true));
    };

    return (
        <AppBar position="fixed" theme={theme} drawerWidth={drawerWidth} open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Grid container spacing={1}>

                    <Grid item md={6}>
                        <Typography variant="h6" noWrap component="div">
                            {current_page.title}
                        </Typography>
                    </Grid>
                    {/*<Grid item md={6}>*/}
                    {/*    {*/}
                    {/*        token === null ? <LoginRegisterButton/> : null*/}
                    {/*    }*/}
                    {/*</Grid>*/}
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
