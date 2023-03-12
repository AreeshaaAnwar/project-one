import React from 'react'
import './CurrentSession.css'
import upcomming from '../../Images/upcomming.png'

const CurrentSession = () => {
  return (
    <div>
    <div className='Available'>
  <div className="Available-left">
<div className='curre'>
<p>Current session</p>
<p style={{marginTop:'-10px',color:'#074276'}}>Tutor</p>
</div>
<div className='cSession' >
    <img src={upcomming} alt='upcomming' style={{width:'100px',height:'100px'}}/>
        <ul className='ulses'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Mustafa Arif</li>
            <li  style={{fontSize:'20px'}}>2023-02-04</li>
        </ul>
        <ul className='ullses'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Session ID</li>
            <li  style={{fontSize:'20px'}}>63ec9a1ccba8b</li>
        </ul>
        <ul className='ulses'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Mathematics</li>
            <li  style={{fontSize:'20px'}}>demo </li>
        </ul>
        <ul className='ulses'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Price</li>
            <li  style={{fontSize:'20px',marginRight:'-10px'}}>R  200</li>
        </ul>
        
        <div className='detailss'>  <button className='det' >Details</button></div>
      <div className='detailss'>  <button className='det' >Ignore</button></div>
      
    </div>

  </div>
  </div>
    
    
    
    </div>
  )
}

export default CurrentSession