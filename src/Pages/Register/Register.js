import React from 'react'
import './Register.css'
import leaf from '../../Images/leaf.png'
import copy from '../../Images/copy.png'
import penn from '../../Images/penn.png'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' }

const Register = () => {
  return (
    <section className='register'>
<div className='reg-flex'>
<div className='reg-left'>
<div className='reg-head'>
<p>Looks like you are new here!</p>
<h2>Join the largest Tutors <br/>Community in the world</h2>
</div>

    <img src={leaf} alt='leaf'  className='le'/>

<img src={copy} alt='copy' className='leaf'/>
<img src={penn} alt='penn' className='penn'/>
</div>
<div className='reg-right'>
<div style={{display:'flex',justifyContent:'flex-end',color:'grey', fontFamily: 'Montserrat;'}}>
<p >Have an account? </p>
<p style={{marginLeft:'10px'}}><Link to='/login' style={{textDecoration:'none',color:'black'}}>Login</Link></p>
</div>
<div className='r'>
    <p>Register to </p>
    <h4>Tutors Community</h4>
</div>
 <Box
      component="form"
    
      sx={{
        '& > :not(style)': { m: 1 },
       marginLeft:'100px',
       marginTop:'50px'
       

      }}
      noValidate
      autoComplete="off"
    >
   <div style={{paddingBottom:'20px'}}>
      <Input defaultValue="FirstName" inputProps={ariaLabel}  className='in'/>
      <Input defaultValue="LastName" inputProps={ariaLabel} className='es'/><br/>
      </div>
      <div style={{paddingBottom:'20px'}}>
      <Input defaultValue="PhoneNumber" inputProps={ariaLabel}  className='in'/>
      <Input defaultValue="Email" inputProps={ariaLabel} className='es' /><br/>
      </div>
      <div>
      <Input defaultValue="Password" inputProps={ariaLabel} className='in'/>
      <Input defaultValue="ConfirmPassword" inputProps={ariaLabel} className='es'/>
</div>
     
    </Box>
    <div className='lab'>
    <label className="containers" style={{fontSize:'17px'}}>Lorem Ipsum is simply dummy text of the printing
  <input type="checkbox" checked="checked"/>
  <span className="checkmark"></span>
</label>
<button className='res'>Register</button>
  </div>
</div>
    
</div>


    </section>
  )
}

export default Register