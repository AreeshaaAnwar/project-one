import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "./NavBar.css";
import { useState } from "react";
import head from "../../Images/head.png";
import login from "../../Images/login.png";
import PersonIcon from '@mui/icons-material/Person';
// import monitor from "../../Images/monitor.png";
import { Link } from "react-router-dom";
// import {  useNavigate} from "react-router-dom";

function NavBar() {
  // const Navigate=useNavigate()
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
      sx={{ background: "transparent", position: "relative" }}
    >
      {/* <div className="cen">
        <img src={monitor} alt="monitor" style={{ height: "200px" }}></img>
      </div> */}

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
              fontFamily: "Montserrat",
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
              //   justifyContent: "flex-end",
              justifyContent: "center",
            }}
          >
            <>
              <Typography
                variant="h5"
                component="h2"
            sx={{marginTop:'30px',
            fontFamily:'Montserrat'
            }}
              >
              <Link to='/'  className="li hom">Home</Link> 
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  color: "white",
                  // marginLeft: "40px",
                  marginTop: "20px",
                  fontSize: "20px",
                  lineHeight: "54px",
                  fontFamily:'Montserrat'
                }}
             
              >
              
              <Link to="/About" className="li ab">About</Link>
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  color: "white",
                  // marginLeft: "40px",
                  marginTop: "20px",
                  fontSize: "20px",
                  lineHeight: "54px",
                  fontFamily:'Montserrat'
                }}
              >
        <div className="ab">  University</div>      
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  color: "white",
                  marginRight: "300px",
                  // marginLeft: "40px",
                  marginTop: "20px",
                  fontSize: "20px",
                  lineHeight: "54px",
                  fontFamily:'Montserrat'
                }}
              >
               <Link to="/Contact" className="li ab">Contact</Link>
              </Typography>
              <div class="dropdow">
  <Button class="dropbt">  <img src={login} alt="login" style={{ height: "20px" }} className='i'></img>
  
  <div className="spa">
             Login
                </div>
  </Button>
  <div class="dropdown-conten">
 <div className="d"> <Link to='/login' className="lii">Login<span> As </span>Tutor</Link></div>
 <div className="d">Login<span> As </span>Student</div> 
  </div>
</div>
            
            <div class="dropdo">
  <Button class="dropb">  
  Register
  </Button>
  <div class="dropdown-conte">
 <div className="d"> <Link to="/register" className="lii">SignUp<span> As </span>Tutor</Link></div>
 <div className="d"> <Link to="/register" className="lii">SignUp<span> As </span>Student</Link></div>
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
              sx={{ color: "white" }}
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
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                      color: "#1F90F3",
                      padding: "10px",
                      marginTop: "13px",
                      marginLeft: "20px",
                      fontFamily:'Montserrat'
                    }}
                  >
                <Link to='/'  style={{textDecoration:'none',color:'#1F90F3'}}>Home</Link>
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                      color: "#1F90F3",
                      padding: "10px",
                      marginTop: "13px",
                      marginLeft: "15px",
                      fontFamily:'Montserrat'
                    }}
                  >
                    <Link to="/About"  style={{textDecoration:'none',color:'#1F90F3'}} >About</Link>
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                      color: "#1F90F3",
                      padding: "10px",
                      marginTop: "13px",
                      marginLeft: "15px",
                      fontFamily:'Montserrat'
                    }}
                  >
                  University
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                      color: "grey",
                      padding: "10px",
                      marginTop: "13px",
                      marginLeft: "20px",
                      fontFamily:'Montserrat',
                      
                    }}
                  >
                   <Link to="/Contact" style={{textDecoration:'none',color:'#1F90F3'}} >Contact</Link>
                  </Typography>
                  <div class="dropd">
  <Button class="drop">  <img src={login} alt="login" style={{ height: "20px" }} className='i'></img>
  
  <div className="sp">
             Login
                </div>
  </Button>
  <div class="dropdown-cont">
 <div className="d"> <Link to='/login' className="lii">Login<span> As </span>Tutor</Link></div>
 <div className="d">Login<span> As </span>Student</div> 
  </div>
</div>



<div class="dro">
  <Button class="dr">  <img src={login} alt="login" style={{ height: "20px" }} className='i'></img>
  
  <div className="spp">
  Register
                </div>
  </Button>
  <div class="dropdown-con">
  <div className="d"> <Link to="/register" className="lii">SignUp<span> As </span>Tutor</Link></div>
 <div className="d"> <Link to="/register" className="lii">SignUp<span> As </span>Student</Link></div>
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
export default NavBar;
