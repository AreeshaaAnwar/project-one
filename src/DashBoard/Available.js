import React from 'react'
import upcomming from '../Images/upcomming.png'
import Teachers from '../TeachersDash/Teachers'
const Available = () => {
  return (
    <>
<Teachers/>
    <div style={{backgroundColor:'#F5F5F5',marginTop:'-590px',minHeight:'85vh', width: '100%' }}>
    
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
    </div>
    </>
  )
}

export default Available