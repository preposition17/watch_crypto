import * as React from 'react';

import { ThemeProvider } from '@mui/system';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from 'react-router-dom';

import {useDispatch, useSelector} from "react-redux";
import {setSideBarOpen} from "../../store/reducers/SideBar";
import {setCurrentPage} from "../../store/reducers/CurrentPage"

import Drawer from "./Drawer";
import {DrawerHeader} from "./Drawer/DrawerHeader";

import pages from "components/Pages";


export default function SideBar({theme, drawerWidth}) {
    const dispatch = useDispatch();
    const open = useSelector(state => state.sidebar_reducer.open);

    const handleDrawerClose = () => {
        dispatch(setSideBarOpen(false));
    };

    return (
        <ThemeProvider theme={theme}>
            <Drawer variant="permanent"
                    drawerWidth={drawerWidth}
                    open={open}
                    sx={{backgroundColor: "primary.dark"}}
            >
                    <DrawerHeader theme={theme}>
                        <IconButton onClick={handleDrawerClose} sx={{color: 'primary.contrastText'}}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                <Divider />
                <List sx={{backgroundColor: "primary.main"}}>
                    {pages.map((page, index) => (
                        <ListItem key={page.title} disablePadding sx={{ display: 'block' }}>
                            <NavLink to={page.endpoint} onClick={() => (dispatch(setCurrentPage(page)))}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <page.icon sx={{color: 'primary.contrastText'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary={page.title} sx={{ opacity: open ? 1 : 0, color: 'primary.contrastText'}} />
                                </ListItemButton>
                            </NavLink>
                        </ListItem>
                    ))}
                </List>
                <Divider />

                <Box sx={{backgroundColor: "primary.dark", height: "100%"}}>

                </Box>
            </Drawer>
        </ThemeProvider>
    )
}
