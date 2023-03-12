import React from 'react'
import './ProposalDetails.css'
import mus from '../../Images/mus.png'

const ProposalDetails = () => {
  return (
    <div className='w'>


<div class="flex-container">
  <div className="item-one">
  <div className='ups'>
  Physics Science:Physics
    </div>
    <div className='today'>
        <p >demo today</p>
    </div>
    <p className='todays'>Your message</p>
  
 <p className='tod'>will cover a range of topics,including time management, note-taking, exam preparation.</p>
 <div className='cancel'>  <button className='can' >cancel</button></div>

  </div>
  <div className="item-two">
    <img src={mus} alt='mus' className='mus'/>
    <p style={{fontWeight:'20px',display:'flex',justifyContent:'center',marginTop:'30%',fontFamily:' Montserrat ;'}}>Mustafa Arif</p>
  </div>
</div>

    
    
    
    
    
    </div>
  )
}

export default ProposalDetails