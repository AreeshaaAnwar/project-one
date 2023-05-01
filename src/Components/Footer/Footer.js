import React from 'react'
import './Footer.css'
import head from '../../Images/head.png'
import facebook from '../../Images/facebook.png'
import instagram from '../../Images/instagram.png'
import twitter from '../../Images/twitter.png'
import youtube from '../../Images/youtube.png'
import Ellipse from '../../Images/Ellipse.png'


const Footer = () => {
  return (
    <div>
    <section className='Footer'>
  <div className='tut'>
  <img src={head} alt="aa" style={{width:'200px'}}></img>
  </div>
  <p style={{paddingLeft:'50px',marginTop:'-30px',color:'white',fontFamily:'Montserrat'}}>Tutor’s Community is a platform where <br/> tutor’s make life easy for any student <br/>enrolled in a module where the tutor <br/>did exceptionally well .</p>
<div style={{paddingLeft:'50px'}}>
    <img src={facebook} alt='facebook'/>
    <img src={instagram} alt='instagram' style={{marginLeft:'10px'}}/>
    <img src={twitter} alt='twitter' style={{marginLeft:'10px'}}/>
    <img src={youtube} alt='youtube' style={{marginLeft:'10px'}}/>
</div>
<div className='Ellipse'>
    <img src={Ellipse} alt='ellipse' className='elli'/>
    <div className="line-2"></div>
</div>
 <div className='footcards'>
 <div  style={{color:'white'}}>
 <h4>Links</h4>
 <p >Home</p>
 <p >About Us</p>
 <p>University</p>
 <p >Contact</p>
 </div>
    </div>
     <div className='footcardds'>
 <div  style={{color:'white'}}>
 <h4 >Contact</h4>
 <p >Home</p>
 <p >About Us</p>
 <p>University</p>
 <p >Contact</p>
 </div>
    </div>
    <div className='Newsletter'>
 <div  style={{color:'white'}}>
 <h4>Subscribe our Newsletter</h4>
 <p>Offer guidance to visitors without<br/>
the need to scroll back to the back.
</p>
<div className='Enter'>
<input placeholder='Enter your Email' className='input'></input>
<button className='butt'>Sign up</button>
</div>


 </div>
    </div>
    <div className='Copyright'>
    © Copyright 2022 by Tutors Community
    </div>
       


    </section>
    
    
  </div>
  )
}

export default Footer