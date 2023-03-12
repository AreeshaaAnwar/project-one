import React from 'react'
import './AboutUs.css'
import one from '../../Images/one.png'
import three from '../../Images/three.png'
import four from '../../Images/four.png'
import two from '../../Images/two.png'
import learn from '../../Images/learn.png'

const AboutUs = () => {
  return (
    <div>
    <section className='About-us'>
    <div className="flex-contain">
        <div className="item-left"> 
        <h3 >About Us</h3>
        <p className='abo'>
        Tutors Community is a platform where tutor’s make life<br/> easy for any student enrolled in a module where the <br/>tutor did exceptionally well .The idea is to elevate <br/>students confidence and marks in any module he/she <br/>enrolled to.Tutors Community was established in 2021<br/> with an idea of make life easy for any student which<br/> might be struggling to understand anything related to<br/> his/her studies.Tutors Community welcomes you in a <br/>platform and in the community of teachers.  
        </p>
       <img src={learn} alt='learn' className='learn'></img><span style={{position:'absolute' ,left:'80px' ,marginTop:'10px',fontSize:'20px',color:'white',fontFamily:'Montserrat'}}>learn more</span>
        
        
        </div>
        <div className="item-right">
        <img src={one} alt='one' className='one'/>
        <img src={three} alt='three' className='three'/>
        <img src={four} alt='four' className='fo'/>
        <img src={two} alt='two' className='two'/>
       
        </div>
     
        
        </div>
    </section>




    </div>
  )
}

export default AboutUs