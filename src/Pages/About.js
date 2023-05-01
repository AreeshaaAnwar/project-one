import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import './About.css'
import Community from './Community/Community'
import Footer from '../Components/Footer/Footer'
const About = () => {
  return (
    <div>
    <section  className='Abouts'>


        <NavBar/>
        


        <div className='container'>
<div className='centered'>
<h1 style={{color:'white' ,fontSize:'50px'}}>About</h1>
</div>

</div>
</section>
<Community/>
<Footer/>

    </div>

  )
}

export default About