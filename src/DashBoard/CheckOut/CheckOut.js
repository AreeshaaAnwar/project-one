import React from 'react'
import upcomming from '../../Images/upcomming.png'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import fotor from '../../Images/fotor.png'
import purse from '../../Images/purse.png'
import './CheckOut.css'
import Teachers from '../../TeachersDash/Teachers';
const CheckOut = () => {
  return (
    <>
     <Teachers/>
     <div style={{backgroundColor:'#F5F5F5',marginTop:'-590px',minHeight:'85vh', width: '100%' }}>
<div className='stu'>
   <div className='StuAvailables'>
   <div className='StuAvailable-lefts '>
    <div className='pro'>
    Checkout
    </div>
    <div className='pro'>
    Job Details
    </div>
    <div className='check' >
    <div className='menuIcon'>  <MenuBookIcon sx={{width:'40px',height:'40px'}}/></div>
 
        <ul className='ulpro'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Subjects</li>
            <li   className='phy'>PhysicalScience:Physics</li>
        </ul>
        <ul className='ullcheck'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Topic</li>
            <li  style={{fontSize:'20px',color:'#000000'}}>demo today</li>
        </ul>
        <ul className='ullcheck'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Document</li>
            <li  style={{fontSize:'20px',color:'#000000'}}>document not found </li>
        </ul>
        <ul className='ullcheck'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Post on</li>
            <li  style={{fontSize:'20px',marginRight:'-10px',color:'#000000'}}>2023-02-04</li>
        </ul>
    </div>
      <div className='pro'>
    Job Details
    </div>
    <div className='check' >
    <img src={upcomming} alt='upcomming' style={{width:'100px',height:'100px',marginTop:'20px'}}/>
 
        <ul className='ulpro'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Mustafa Arif</li>
            <li  className='moshi'>moshi.eaglesoft@gmail.com</li>
        </ul>
        <ul className='ullchecks'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Price</li>
            <li  style={{fontSize:'20px',color:'#000000'}}>R200</li>
        </ul>
        <ul className='ullcheckss'>
        <img src={upcomming} alt='upcomming' style={{width:'100px',height:'100px',marginTop:'-20px'}}/>
     <li  className='eaglesoft'>moshi.eaglesoft@gmail.com</li>
        </ul>
        <ul className='ullpro'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Session ID</li>
            <li  style={{fontSize:'20px',marginRight:'-10px',color:'#000000',marginRight:'5px'}}>63ec9a1ccba8b</li>
        </ul>

    </div>
    <div className='pro'>
    Payment Method
    </div>
    <div  className='bo'>
    <div className='box'>
<div className='circles'></div>
<img src={fotor} alt='fotor' style={{width:'30px',height:'30px',marginLeft:'40px',marginTop:'-25px',position:'absolute'}}/>
<div style={{position:'absolute',fontSize:'15px',marginLeft:'80px',marginTop:'-20px',fontFamily:' Montserrat;'}}>PAY FAST</div>
    </div>
    <div className='box-one'>
    <div className='circle-one'></div>
<img src={purse} alt='purse' style={{position:'absolute',width:'30px',height:'30px',marginLeft:'40px',marginTop:'-25px'}}/>
<div style={{position:'absolute',fontSize:'15px',marginLeft:'80px',marginTop:'-20px',fontFamily:' Montserrat;'}}>WALLET</div>
</div>
</div>
<div className='walb'><button className='wal-one'>Cancel</button>
<button className='wal-two' >PAY NOW</button></div>
  




   </div>

   </div>
 </div>
 </div>
 </>
  )

}

export default CheckOut