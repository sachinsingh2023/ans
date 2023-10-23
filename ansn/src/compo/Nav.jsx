import React from 'react'
import Logo from "../images/logo.jpg"
import live from "../images/live tv.png"
// meterial---//
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';


const Nav = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <nav>
                <div className="nav-top" >
                    {/* <div className="status">
                        <div className="live-status col-10" style={{ float: "left" }}>
                            <p className='d-none d-md-block'>RSS supported Israel even before the state was formed</p>
                        </div>
                        <div className="social  d-md-col-2" style={{ float: "right" }}>
                            <i class="fa-brands fa-facebook" style={{ color: " #4567a1;" }}></i>
                            <i class="fa-brands fa-x-twitter"></i>
                            <i class="fa-brands fa-telegram"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin"></i>

                        </div>
                    </div> */}
                </div>
                <div className="nav-bottom" style={{ display: "flex" }}>
                    <a href="" style={{ textDecoration: "none", color: "black", textTransform: "capitalize" }}>
                        <p className='d-none d-md-block' style={{ padding: "10px", float: "left" }}>home</p>
                        <i class="fa-solid fa-bars d-block d-md-none" style={{ fontSize: "25px", color: "black", marginLeft: "20px", marginTop: "5px" }}></i>
                        {/* laptop */}

                    </a>
                    <div className="logo ">

                        <img src={Logo} style={{ height: "70px", width: "120px", position: "relative", bottom: "13px", backgroundColor: "white", left: "20px" }} alt="logo" />
                    </div>
                    <ul className='d-none d-md-flex' style={{ display: "flex" }}>
                        <li><a href="">live</a></li>
                        <li><a href="">eduation</a></li>
                        <li><a href="">trending</a></li>
                        <li><a href="">worlds</a></li>
                        <li><a href="">sports</a></li>
                        <li><a href="">science</a></li>
                        <li><a href=""> business</a></li>

                        <li><a href=""> india</a></li>
                        {/* 
                        <li><a href="">videos</a></li>
                        <li><a href="">games</a></li>
                        <li><a href="">shop</a></li>
                        <li><a href="">astrology</a></li>
                        <li><a href="">lifestyle</a></li> */}
                    </ul>
                    <div className="nav-icons" >
                        
                        <i class="fa-solid fa-magnifying-glass"></i>
                      

                        <i class="fa-regular fa-bell"></i>
                        <img src={live} style={{height:"30px", marginTop:"5px"}} alt="" />
                        <React.Fragment>
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
                                <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
                                <Tooltip title="Account settings">
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        sx={{ ml: 2 }}
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                    >
                                        <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Avatar /> Profile
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Avatar /> My account
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    Add another account
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Settings fontSize="small" />
                                    </ListItemIcon>
                                    Settings
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </React.Fragment>
                    </div>
                    <div className="user">


                       
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav