

import React, { useState,useEffect } from "react";
import MessageIcon from '@mui/icons-material/Message';
import { Tabs,Tab, AppBar } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";
import {faPen as  faPens } from "@fortawesome/free-solid-svg-icons";
import Box from '@mui/material/Box';
import GradingIcon from '@mui/icons-material/Grading';
import {faWallet as  faWallets } from "@fortawesome/free-solid-svg-icons";
import LogoutIcon from '@mui/icons-material/Logout';
import DashNav from "../DashBoard/DashNav/DashNav";
import { useLocation } from 'react-router-dom';
library.add(faPens,faWallets);
const StudentDash = props => {


    const location =useLocation()
    console.log(location);
    console.log(location.pathname);
    var a=location.pathname
    console.log(a);
  const [value, setValue] = useState(a);
useEffect(() => {
  setValue(a);
}, [value])


  console.log(value)
  return (

    <div style={{backgroundColor:'#F5F5F5',minHeight:'100vh'}} >
    <DashNav/>
   
    <Box sx={{ width: '100%' ,minHeight:'10vh',zIndex:'1'}}>
      <AppBar  color="transparent" style={{ backgroundColor: '#074276',position:'relative',zIndex:'1'}}>
      <h4 style={{marginLeft:'10px',marginTop:'25px',color: ' white' ,fontFamily:'Montserrat' }}>TUTORS COMMUNITY</h4>
       <Tabs
     variant="scrollable"
        value={value}
        onChange={()=>setValue(a)}
        aria-label="Navigation"
        indicatorColor="primary"
        scrollButtons={false}
        textColor="primary"
        sx={{ marginLeft:'200px',marginTop:'-60px',zIndex:'1'}}
        TabIndicatorProps={{sx:{backgroundColor:'white'}}}
      >
       <Tab label={<span style={{ color: ' white' ,fontFamily:'Montserrat' }}><FontAwesomeIcon icon={faPens}  style={{marginRight:'10px',marginTop:'-150px',fontSize:'30px',marginBottom:'-10px'}}/>Request Lesson</span>}  sx={{paddingTop:'1px',marginRight:'50px'}} component={Link} to={"/RequestLesson"} style={{marginTop:'10px'}} value='/RequestLesson' />
        <Tab label={<span style={{ color: ' white',fontFamily:'Montserrat'  }}><GradingIcon sx={{marginRight:'10px',marginTop:'-150px',fontSize:'30px',marginBottom:'-10px'}}/>Proposals</span>}  sx={{paddingTop:'15px',marginRight:'50px'}}  component={Link} to={"/Proposal"} value='/Proposal'/>
        <Tab label={<span style={{ color: ' white',fontFamily:'Montserrat'  }}><GradingIcon sx={{marginRight:'10px',marginTop:'-150px',fontSize:'30px',marginBottom:'-10px'}}/>Current Session</span>}  sx={{paddingTop:'15px',marginRight:'50px'}}   component={Link} to={"/CurrentSession"} value='/CurrentSession'/>
        <Tab label={<span style={{ color: ' white',fontFamily:'Montserrat'  }}><FontAwesomeIcon icon={faWallets}  style={{marginRight:'10px',marginTop:'-150px',fontSize:'30px',marginBottom:'-5px'}}/>Wallet</span>}  sx={{paddingTop:'15px',marginRight:'50px'}}  index={3} component={Link} to={"/Wallet"} value='/Wallet'/>
        <Tab label={<span style={{ color: ' white',fontFamily:'Montserrat'  }}><MessageIcon sx={{marginRight:'10px',marginTop:'-150px',fontSize:'30px',marginBottom:'-10px'}}/>Message</span>}  sx={{paddingTop:'15px',marginRight:'50px'}}  component={Link} to={"/messages"} value='/messages'/> 
        <Tab label={<span style={{ color: ' white',fontFamily:'Montserrat'  }}><LogoutIcon sx={{marginRight:'10px',marginTop:'-150px',fontSize:'30px',marginBottom:'-8px'}}/>LogOut</span>}  sx={{paddingTop:'15px',marginRight:'50px'}}  component={Link} to={"/"} />
      </Tabs>
    </AppBar>
</Box> 

</div> 
   
  );
};

export default StudentDash;
// import React from 'react'

// const StudentDash = () => {
//   const routes = ["/books", "/favorites"];
//   return (
//     <div> 
  
    
//       <Tab
//         value={routes[0]}
//         label="books"
//         component={Link}
//         to={routes[0]}
//       />
//       <Tab
//         value={routes[1]}
//         label="Favorites"
//         component={Link}
//         to={routes[1]}
//       />
   
//   </div>
//   )
// }

// export default StudentDash