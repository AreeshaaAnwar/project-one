

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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {faCommentDollar as faCircleDollarr } from "@fortawesome/free-solid-svg-icons";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
library.add(faPens,faWallets,faCircleDollarr);
const Teachers = props => {


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

    <div style={{backgroundColor:'#F5F5F5',minHeight:'100vh'}}>
    <DashNav/>
  
    <Box sx={{ width: '100%' ,minHeight:'10vh'}}>
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
        sx={{ marginLeft:'200px',marginTop:'-60px'}}
        TabIndicatorProps={{sx:{backgroundColor:'white'}}}
      >
       <Tab label={<span style={{ color: ' white' ,fontFamily:'Montserrat' }}><AccountCircleIcon style={{marginRight:'10px',marginTop:'-150px',fontSize:'30px',marginBottom:'-10px'}}/>Available Tutoring</span>}  sx={{paddingTop:'1px',marginRight:'50px'}} component={Link} to={"/Available"} style={{marginTop:'10px'}} value='/Available' />
        <Tab label={<span style={{ color: ' white',fontFamily:'Montserrat'  }}><GradingIcon sx={{marginRight:'10px',marginTop:'-150px',fontSize:'30px',marginBottom:'-10px'}}/>Proposals</span>}  sx={{paddingTop:'10px',marginRight:'50px'}}  component={Link} to={"/CheckOut"} value='/CheckOut'/>
        <Tab label={<span style={{ color: ' white',fontFamily:'Montserrat'  }}><MessageIcon sx={{marginRight:'10px',marginTop:'-160px',fontSize:'30px',marginBottom:'-10px'}}/>Message</span>}  sx={{paddingTop:'10px',marginRight:'50px'}}  component={Link} to={"/messages"} value='/messages'/> 
        <Tab label={<span style={{ color: ' white',fontFamily:'Montserrat'  }}><FontAwesomeIcon icon={faCircleDollarr} style={{marginRight:'10px',marginTop:'-150px',fontSize:'30px',marginBottom:'-5px'}}/>Earning</span>}  sx={{paddingTop:'10px',marginRight:'50px'}}   component={Link} to={"/Earning"} value='/Earning'/>
        <Tab label={<span style={{ color: ' white',fontFamily:'Montserrat'  }}><AccountBalanceIcon icon={faWallets}  style={{marginRight:'10px',marginTop:'-150px',fontSize:'30px',marginBottom:'-10px'}}/>BankAccount</span>}  sx={{paddingTop:'10px',marginRight:'50px'}}  index={3} component={Link} to={"/BankAccount"} value='/BankAccount'/>
        <Tab label={<span style={{ color: ' white',fontFamily:'Montserrat'  }}><AccountCircleIcon sx={{marginRight:'10px',marginTop:'-150px',fontSize:'30px',marginBottom:'-10px'}}/>ProfileSetting</span>}  sx={{paddingTop:'10px',marginRight:'50px'}}  component={Link} to={"/ProfileSetting"} value='/ProfileSetting'/> 
        <Tab label={<span style={{ color: ' white',fontFamily:'Montserrat'  }}><LogoutIcon sx={{marginRight:'10px',marginTop:'-150px',fontSize:'30px',marginBottom:'-10px'}}/>LogOut</span>}  sx={{paddingTop:'10px',marginRight:'50px'}}  component={Link} to={"/"} />
      </Tabs>
    </AppBar>
</Box> 

</div> 
   
  );
};

export default Teachers;
