import React from 'react'
import './StudentProposal.css'
import upcomming from '../../Images/upcomming.png'

const StudentProposal = () => {
  return (
   <div className='stu'>
   <div className='StuAvailable'>
   <div className='StuAvailable-left '>
    <div className='pro'>
    Proposals
    </div>
    <div className='pro'>
    Tutor
    </div>
    <div className='cSession' >
    <img src={upcomming} alt='upcomming' style={{width:'100px',height:'100px',marginTop:'20px'}}/>
        <ul className='ulpro'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>MustafaArif</li>
            <li  style={{fontSize:'20px'}}>2023-02-04</li>
        </ul>
        <ul className='ullpro'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Message</li>
            <li  style={{fontSize:'20px'}}>will cover a range of topics,including time management,note-taking,exam prepration</li>
        </ul>
        <ul className='ulpro'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Physical science:Physics</li>
            <li  style={{fontSize:'20px'}}>demo today </li>
        </ul>
        <ul className='ulpro'>
            <li style={{fontSize:'20px',fontWeight:'bold'}}>Price</li>
            <li  style={{fontSize:'20px',marginRight:'-10px'}}>R  200</li>
        </ul>
        
        <div className='probut'>  <button className='det' >Chat</button></div>
      <div className='probut'>  <button className='det' >Approve</button></div>
      <div className='probut'>  <button className='detpro' >Ignore</button></div>
      
    </div>




   </div>

   </div>

   </div>
  )
}

export default StudentProposal