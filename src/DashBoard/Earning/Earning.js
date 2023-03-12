import React from 'react'
import './Earning.css'
import upcomming from '../../Images/upcomming.png'
const Earning = () => {
  return (
    <div>
 <div className='Available'>
  <div className="Available-left">
    <div className='up'>
    Earnings
    </div>
    <div className='earn'>
    Available Amount
   </div>
   <div className='earns'>
   R  80.00
   </div>
    <div className='s'>
        Session
    </div>
    <div className='Session' >
    <img src={upcomming} alt='upcomming' style={{width:'100px',height:'100px'}}/>
        <ul className='ul'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Mustafa Arif</li>
            <li  style={{fontSize:'20px',marginRight:'-10px',color:'#000000BA'}}>2023-02-04</li>
        </ul>
        <ul className='ulls'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Mathematics</li>
            <li  style={{fontSize:'20px',color:'#000000BA'}}>demo</li>
        </ul>
        <ul className='ul'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Status</li>
            <li  style={{fontSize:'20px',marginRight:'-10px',color:'#000000BA'}}>Process</li>
        </ul>
        <ul className='ul'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Cash</li>
            <li  style={{fontSize:'20px',color:'#000000BA'}}>R  00</li>
        </ul>
        <div className='detailss'>  <button className='det' >CASHOUT</button></div>
      
    </div>
  </div>
</div>




    </div>
  )
}

export default Earning