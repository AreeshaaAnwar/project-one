import React from 'react'
import '../Contact/Contact.css'
import NavBar from '../../Components/NavBar/NavBar'
import CForm from '../ContactForm/CForm'
import Footer from '../../Components/Footer/Footer'



const Contact = () => {
  return (
    <div>
    <section  className='contacts'>

<NavBar/>
     
      


        <div className='container'>
<div className='centered'>
<h1 style={{color:'white' ,fontSize:'50px'}}>Contact</h1>
</div>

</div>
</section>

<CForm/>
<Footer/>
    </div>

  )
}

export default Contact