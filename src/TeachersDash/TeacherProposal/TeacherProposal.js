import React from 'react'
import upcomming from '../../Images/upcomming.png'
import {useNavigate} from 'react-router-dom'
import Teachers from '../Teachers'

const TeacherProposal = () => {
    const navigate=useNavigate();
  return (
  
    <div>
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
            <li style={{fontSize:'20px',fontWeight:'bold'}}>MustafaArif</li>
            <li  style={{fontSize:'20px'}}>2023-02-04</li>
        </ul>
        <ul className='ull'>
            <li style={{fontWeight:'bold'}} className='ll'>Physical science:Physics</li>
            <li className='ll' >demo today</li>
        </ul>
        <ul className='ul'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Price</li>
            <li  style={{fontSize:'20px',marginRight:'-10px'}}>R  200</li>
        </ul>
        <ul className='ul'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Status</li>
            <li  style={{fontSize:'20px'}}>Delivered</li>
        </ul>
        <div className='detailss'>  <button className='det' onClick={()=>navigate('/ProposalDetails')}>Details</button></div>
      <div className='detailss'>  <button className='det' >Ignore</button></div>
      
    </div>
    <div className='Session' >
    <img src={upcomming} alt='upcomming' style={{width:'100px',height:'100px'}}/>
        <ul className='ul'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>WaleedAli</li>
            <li  style={{fontSize:'20px',marginRight:'-10px'}}>2023-02-04</li>
        </ul>
        <ul className='ull'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Physical science:Physics</li>
            <li  style={{fontSize:'20px'}}>demo today</li>
        </ul>
        <ul className='ul'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Price</li>
            <li  style={{fontSize:'20px',marginRight:'-10px'}}>R  200</li>
        </ul>
        <ul className='ul'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Status</li>
            <li  style={{fontSize:'20px'}}>Delivered</li>
        </ul>
        <div className='detailss'>  <button className='det' >Details</button></div>
      <div className='detailss'>  <button className='det'>Ignore</button></div>
      
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default TeacherProposal