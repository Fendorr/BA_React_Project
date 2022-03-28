import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import Link from '@mui/material/Link';

//MUI
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

//Icons
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HelpIcon from '@mui/icons-material/Help';
import EditIcon from '@mui/icons-material/Edit';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

//#region styling
const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

//in this case "open" refers to the drawer being open, because the AppBar has to change width dependently
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#f5f5f5",
    color: "black",
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        height: "100%",
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)})`,
});
//#endregion

function NavBar() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    }

    return (
        <Box sx={{ display: 'flex'}}>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        edge="start"
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        BA React Project
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <Link href="/" underline="none" color="inherit">
                        <ListItem button>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText>Responsive Grid</ListItemText>
                        </ListItem>
                    </Link>
                    <Link href="/forms" underline="none" color="inherit">
                        <ListItem button>
                            <ListItemIcon>
                                <EditIcon />
                            </ListItemIcon>
                            <ListItemText>Forms</ListItemText>
                        </ListItem>
                    </Link>
                    <Link href="/bindings" underline="none" color="inherit">
                        <ListItem button>
                            <ListItemIcon>
                                <CompareArrowsIcon />
                            </ListItemIcon>
                            <ListItemText>Bindings</ListItemText>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <Grid container direction="column" justifyContent="flex-start" alignItems="center">
                    <DrawerHeader />
                    <Outlet />
                </Grid>
            </Box>
        </Box>
    );

    // return (
    //     <>
    //         <IconContext.Provider value={{ color: "#fff" }}>
    //             <div className="navbar">
    //                 <Link to="#" className="menu-bars">
    //                     <FaIcons.FaBars onClick={toggleExpanded} />
    //                 </Link>
    //             </div>
    //             <nav className={expanded ? "nav-menu active" : "nav-menu"}>
    //                 <ul className="nav-menu-items" onClick={toggleExpanded}>
    //                     <li className='navbar-toggle'>
    //                         <Link to="#" className='menu-bars'>
    //                             <AiIcons.AiOutlineClose />
    //                         </Link>
    //                     </li>
    //                     <li className='nav-text'>
    //                         <Link to="/">
    //                             <AiIcons.AiFillHome />
    //                             <span>Home</span>
    //                         </Link>
    //                     </li>
    //                     <li className='nav-text'>
    //                         <Link to="/spaceholder">
    //                             <AiIcons.AiFillHome />
    //                             <span>Spaceholder</span>
    //                         </Link>
    //                     </li>
    //                 </ul>
    //             </nav>

    //             <Outlet />
    //         </IconContext.Provider>
    //     </>
    // )
}

export default NavBar;
