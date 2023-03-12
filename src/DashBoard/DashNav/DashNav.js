import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';
import head from '../../Images/headDash.png'
import VIcon from '../../Images/VIcon.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import girl from '../../Images/girl.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
import './DashNav.css'
import { Link } from 'react-router-dom';




function DashNav() {
    const [anchorElNav, setAnchorElNav] = useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar
    position="fixed"
    sx={{ background: "transparent", position: "relative" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "white",
              lineHeight: "20px",
              marginLeft: "70px",
              position: "absolute",
              top: "0px",
              height: "70px",
            }}
          >
            <img src={head} alt="aa"></img>
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Montserrat",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
              lineHeight: "20px",
              height: "70px",
            }}
          >
            <img src={head} alt="aa"></img>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginTop:'30px',
              paddingBottom:'10px'
            // justifyContent:'flex-end'
             
            }}
          >
            <>
              <input  type='text'  style={{height:'40px',width:'500px',marginLeft:'400px',borderRadius:'50px',backgroundColor:'#D9D9D959',border:'#D9D9D959',position:'relative',fontFamily:'Montserrat'}}/>
             <SearchIcon sx={{position:'absolute',color:'black',marginLeft:'410px',padding:'10px',color:'grey'}}/>
             <p style={{position:'absolute',color:'grey',marginLeft:'470px',marginTop:'15px',fontFamily:'Montserrat'}}>Search Here</p>
              <div className='navtext'>
              <NotificationsIcon sx={{marginTop:'10px'}}/>
              </div>
              <div className='navicon'>
             <img src={VIcon} alt='VIcon' style={{width:'20px',height:'20px',marginTop:'10px'}}/>
              </div>
              <div className="dropdown">
                    <button className="dropbtn">
                    <img src={girl} alt='girl' style={{width:'35px',height:'35px',marginRight:'130px'}}/>
                    <div style={{marginRight:'10px',marginTop:'-50px',color:'black'}}>
                     <p style={{fontWeight:'BOLD',fontFamily:'Montserrat'}}>Tutor</p>
                     <p style={{marginTop:'-10px',fontFamily:'Montserrat'}}>Admin</p>
                    </div>
                   <div style={{color:'black',marginLeft:'90px',marginTop:'-50px'}}><ArrowDropDownIcon style={{fontSize:'30px'}}/></div>
                     
                      
                 
                    </button>
                    <div className="dropdown-content">
                    <div className="d">
                    <div >
                    <AccountCircleIcon sx={{marginLeft:'-20px',marginTop:'10px'}}/> <p style={{marginLeft:'20px',marginTop:'-27px'}}><Link to='/ProfileSetting' style={{textDecoration:'none',color:'black',fontFamily:'Montserrat'}}>ProfileSetting</Link></p>
                    </div>
                

                      </div>

                      <div className="d" >
                      <div >
                    <AccountBalanceIcon sx={{marginLeft:'-20px',marginTop:'10px'}}/> <p style={{marginLeft:'20px',marginTop:'-27px'}} ><Link to='/BankAccount' style={{textDecoration:'none',color:'black',fontFamily:'Montserrat'}}>BankAccount</Link></p>
                    </div>
                      
                      </div>
                      <div className="d">
                      <LoginIcon sx={{marginLeft:'-20px',marginTop:'10px'}}/> <p style={{marginLeft:'20px',marginTop:'-27px',fontFamily:'Montserrat'}}>LogOut</p></div>
                    </div>
                  </div>
            
           
 
            </>
          </Box>

          <Box sx={{ flexGrow: -2, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Box
                style={{
                  paddingLeft: "30px",
                  paddingRight: "10px",
                  paddingBottom: "70px",
                }}
              >
                <>
                <input  type='text'  style={{height:'40px',width:'200px',borderRadius:'50px',backgroundColor:'#D9D9D959',border:'#D9D9D959',position:'relative',fontFamily:'Montserrat'}}/>
                <SearchIcon sx={{position:'absolute',marginLeft:'-195px',padding:'10px',color:'grey'}}/>
             <p style={{position:'absolute',color:'grey',fontFamily:'Montserrat',marginTop:'-30px',marginLeft:'50px'}}>Search Here</p>
              <div className='navtext'>
              <NotificationsIcon sx={{marginTop:'10px'}}/>
              </div>
              <div className='navicon'>
             <img src={VIcon} alt='VIcon' style={{width:'20px',height:'20px',marginTop:'10px'}}/>
              </div>
              <div className="dropdown">
                    <button className="dropbtn">
                    <img src={girl} alt='girl' style={{width:'35px',height:'35px',marginRight:'130px'}}/>
                    <div style={{marginRight:'10px',marginTop:'-50px',color:'black'}}>
                     <p style={{fontWeight:'BOLD',fontFamily:'Montserrat'}}>Tutor</p>
                     <p style={{marginTop:'-10px',fontFamily:'Montserrat'}}>Admin</p>
                    </div>
                   <div style={{color:'black',marginLeft:'90px',marginTop:'-50px'}}><ArrowDropDownIcon style={{fontSize:'30px'}}/></div>
                     
                      
                 
                    </button>
                    <div className="dropdown-content">
                    <div className="d">
                    <div >
                    <AccountCircleIcon sx={{marginLeft:'-20px',marginTop:'10px'}}/> <p style={{marginLeft:'20px',marginTop:'-27px'}}><Link to='/ProfileSetting' style={{textDecoration:'none',color:'black',fontFamily:'Montserrat'}}>ProfileSetting</Link></p>
                    </div>
                

                      </div>

                      <div className="d" >
                      <div >
                    <AccountBalanceIcon sx={{marginLeft:'-20px',marginTop:'10px'}}/> <p style={{marginLeft:'20px',marginTop:'-27px'}}><Link to='/BankAccount' style={{textDecoration:'none',color:'black',fontFamily:'Montserrat'}}>BankAccount</Link></p>
                    </div>
                      
                      </div>
                      <div className="d">
                      <LoginIcon sx={{marginLeft:'-20px',marginTop:'10px'}}/> <p style={{marginLeft:'20px',marginTop:'-27px',fontFamily:'Montserrat'}}>LogOut</p></div>
                    </div>
                  </div>

                 
                </>
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default DashNav;