import React from 'react'
import leaf from '../../Images/leaf.png'
import copy from '../../Images/copy.png'
import penn from '../../Images/penn.png'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import './NewPass.css'


const ariaLabel = { 'aria-label': 'description' }

const NewPass = () => {
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
<p >Back to </p>
<p style={{marginLeft:'10px'}}><Link to='/register' style={{textDecoration:'none',color:'black'}}>Login</Link></p>
</div>
<div className='r'>
    <p>Forget your password?</p>
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
      
      <Input  inputProps={ariaLabel}  className='ins' defaultValue='NewPassword' />
      </div>
      <div>
      <Input  inputProps={ariaLabel} className='ins'  defaultValue='ConfirmPassword'/>
      </div>
    
     
    </Box>
    <div className='lab'>
    
<button className='ress'>Confim</button>
  </div>
</div>
    
</div>


    </section>
  )
}

export default NewPass