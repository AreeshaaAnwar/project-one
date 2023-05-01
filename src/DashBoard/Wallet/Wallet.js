import React from 'react'
import './Wallet.css'
import StudentDash from '../../StudentDashBoard/StudentDash'
const Wallet = () => {
  return (
    <div>
<StudentDash/>
       <div style={{backgroundColor:'#F5F5F5',marginTop:'-590px',minHeight:'80vh', width: '100%' }}>

<div className='Available'>
  <div className="Available-left">
    <div className='up'>
    Earnings
    </div>
    <div className='earn' style={{color:'#000000BA'}}>
    Available Amount
   </div>
   <div className='earns'>
   R  80.00
   </div>
   <div className='wallet'>
   <div className='wallbut'>  <button className='wal' >ADD AMOUNT</button></div>
   </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Wallet