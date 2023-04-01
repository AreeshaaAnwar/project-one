import * as React from 'react';
import './Tabs.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import upcomming from '../../Images/upcomming.png'
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GradingIcon from '@mui/icons-material/Grading';
import MessageIcon from '@mui/icons-material/Message';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faCommentDollar as faCircleDollarr } from "@fortawesome/free-solid-svg-icons";
import {faPen as  faPens } from "@fortawesome/free-solid-svg-icons";
import {faWallet as  faWallets } from "@fortawesome/free-solid-svg-icons";
import Proposal from '../Proposal/Proposal';
import Earning from '../Earning/Earning';
import RequestLesson from '../RequestLesson/RequestLesson';
import CurrentSession from '../CurrentSession/CurrentSession';
import Wallet from '../Wallet/Wallet';
library.add(faCircleDollarr,faPens,faWallets);

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
export default function ScrollableTabsButtonPrevent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <Box sx={{ width: '100%',backgroundColor:'#F5F5F5',minHeight:'90vh' }}>
    <Box sx={{  bgcolor: '#074276' }}>

      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
        sx={{height:'10vh',paddingTop:'10px'}}
        TabIndicatorProps={{sx:{backgroundColor:'white'}}}
      >
          <Tab label={<span style={{ color: 'white',fontFamily:'Montserrat' }}>DashBoard</span>} sx={{paddingTop:'30px',marginRight:'50px'}} />
        <Tab label={<span style={{ color: ' white' ,fontFamily:'Montserrat' }}><AccountCircleIcon sx={{marginRight:'10px',marginTop:'5px',fontSize:'30px',marginBottom:'-10px'}}/>Available Tutoring</span>}  sx={{paddingTop:'15px',marginRight:'50px'}} {...a11yProps(1)}/>
        <Tab label={<span style={{ color: ' white',fontFamily:'Montserrat'  }}><GradingIcon sx={{marginRight:'10px',marginTop:'5px',fontSize:'30px',marginBottom:'-10px'}}/>Proposals</span>}  sx={{paddingTop:'15px',marginRight:'50px'}} {...a11yProps(2)}/>
        <Tab label={<span style={{ color: ' white',fontFamily:'Montserrat'  }}><MessageIcon sx={{marginRight:'10px',marginTop:'5px',fontSize:'30px',marginBottom:'-10px'}}/>Message</span>}  sx={{paddingTop:'15px',marginRight:'50px'}} {...a11yProps(3)}/>
        <Tab label={<span style={{ color: ' white' ,fontFamily:'Montserrat' }}><FontAwesomeIcon icon={faCircleDollarr}   style={{marginRight:'10px',marginTop:'5px',fontSize:'30px',marginBottom:'-10px'}}/> Earnings</span>}  sx={{paddingTop:'15px',marginRight:'50px'}} {...a11yProps(4)}/>
        <Tab label={<span style={{ color: ' white' ,fontFamily:'Montserrat' }}><FontAwesomeIcon icon={faPens}  style={{marginRight:'10px',marginTop:'5px',fontSize:'30px',marginBottom:'-10px'}}/>Request Lesson</span>}  sx={{paddingTop:'15px',marginRight:'50px'}} {...a11yProps(5)}/>
        <Tab label={<span style={{ color: ' white',fontFamily:'Montserrat'  }}><GradingIcon sx={{marginRight:'10px',marginTop:'5px',fontSize:'30px',marginBottom:'-10px'}}/>Current Session</span>}  sx={{paddingTop:'15px',marginRight:'50px'}} {...a11yProps(6)}/>
        <Tab label={<span style={{ color: ' white',fontFamily:'Montserrat'  }}><FontAwesomeIcon icon={faWallets}  style={{marginRight:'10px',marginTop:'5px',fontSize:'30px',marginBottom:'-10px'}}/>Wallet</span>}  sx={{paddingTop:'15px',marginRight:'50px'}} {...a11yProps(7)}/>
        
      </Tabs>
    </Box>
    <TabPanel value={value} index={1}>
    <div className='Available'>
  <div className="Available-left">
    <div className='up'>
    Upcoming Sessions
    </div>
    <div className='Sessions' >
    <img src={upcomming} alt='upcomming' style={{width:'100px',height:'100px'}}/>
        <ul className='ul'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Mustafa Arif</li>
            <li  style={{fontSize:'20px'}}>2023-02-04</li>
        </ul>
        <ul className='ull'>
            <li  className='ll' style={{fontWeight:'bold'}}>Physical science:Physics</li>
            <li  className='ll'>demo today</li>
        </ul>
        <ul className='ul'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Price</li>
            <li  style={{fontSize:'20px'}}>R  200</li>
        </ul>
        <div className='details'>  <button className='det'>Details</button></div>
      <div className='details'>  <button className='det'>Ignore</button></div>
      
    </div>
    <div className='Session' >
    <img src={upcomming} alt='upcomming' style={{width:'100px',height:'100px'}}/>
        <ul className='ul'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Waleed Ali</li>
            <li  style={{fontSize:'20px'}}>2023-02-04</li>
        </ul>
        <ul className='ull'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Physical science:Physics</li>
            <li  style={{fontSize:'20px'}}>demo today</li>
        </ul>
        <ul className='ul'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Price</li>
            <li  style={{fontSize:'20px'}}>R  200</li>
        </ul>
        <div className='details'>  <button className='det'>Details</button></div>
      <div className='details'>  <button className='det'>Ignore</button></div>
      
    </div>
  </div>
</div>





      </TabPanel>
      <TabPanel value={value} index={2}>
      <Proposal/>
      </TabPanel>
      <TabPanel value={value} index={3}>
       Item four
      </TabPanel>
      <TabPanel value={value} index={4} >
      <Earning/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <RequestLesson/>
      </TabPanel>
      <TabPanel value={value} index={6}>
       <CurrentSession/>
      </TabPanel>
      <TabPanel value={value} index={7}>
       <Wallet/>
      </TabPanel>
    </Box>
  );
}