import React from 'react'
import leaf from '../../Images/leaf.png'
import copy from '../../Images/copy.png'
import penn from '../../Images/penn.png'
import { Link } from 'react-router-dom'

import Input from '@mui/material/Input';
import './Login.css'
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';

import InputAdornment from '@mui/material/InputAdornment';

import HttpsIcon from '@mui/icons-material/Https';

const ariaLabel = { 'aria-label': 'description' }

const Login = () => {
  return (
    <section className='register'>
<div className='reg-flex'>
<div className='reg-left'>
<div className='reg-head'>
<p>Looks like you are new here!</p>
<h2>Join the largest Tutors <br/>Community in the world</h2>
</div>

    <img src={leaf} alt='leaf' style={{paddingTop:'194px',marginLeft:'1px'}}/>

<img src={copy} alt='copy' className='leaf'/>
<img src={penn} alt='penn' className='penn'/>
</div>
<div className='reg-right'>
<div style={{display:'flex',justifyContent:'flex-end',color:'grey'}}>

<p className='lo'><Link to='/register' style={{textDecoration:'none',color:'black'}}>Register</Link></p>
</div>
<div className='r'>
    <p>Login to </p>
    <h4>Tutors Community</h4>
</div>
 <FormControl variant="standard" sx={{
        
        marginLeft:'100px',
        marginTop:'50px'
        
 
       }}>
          <div style={{paddingBottom:'20px'}}>
     
        <Input
          id="input-with-icon-adornment"
          className='ins'
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
        </div>
        <div>
        <Input
          id="input-with-icon-adornment"
          className='ins'
          startAdornment={
            <InputAdornment position="start">
              <HttpsIcon />
            </InputAdornment>
          }
        />
        </div>
      </FormControl>

    <div className='lab'>
    <label className="containers" style={{fontSize:'17px'}}>
    Remember me <span className='spans'>
    <Link to='/forget' style={{textDecoration:'none',color:'black'}}> ForgetPassword?</Link>
    </span>
  
  <input type="checkbox" />
  <span className="checkmark"></span>
</label><br/>
<button className='res'>Login</button>
  </div>
</div>
    
</div>


    </section>
  )
}

export default Login