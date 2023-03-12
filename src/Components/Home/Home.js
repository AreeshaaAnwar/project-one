import React from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import pencil from '../../Images/pencil.png'
import pen from '../../Images/pen.png'
import book from '../../Images/book.png'
import cup from '../../Images/cup.png'
import AboutUs from '../AboutUs/AboutUs'
import Institute from '../Institutes/Institute'
import Tutors from '../Tutors/Tutors'
import Testimonals from '../Testimonals/Testimonals'
import Footer from '../Footer/Footer'
import monitor from "../../Images/monitor.png";
const Home = () => {
  return (
    <div>
     <section className='home'>
     <div className="cen">
        <img src={monitor} alt="monitor" style={{ height: "200px" }}></img>
      </div>
        <NavBar/>
       

<div className='container'>
<div className='centered'>
<div   className='hea'  style={{ color: "white",textAlign:'center',fontFamily:'Montserrat',fontWeight:'900px',fontSize:'20px'}}>Need Tutoring Assitance Remotely?</div>
<div className='para' >Get Tutoring assistance<br/> remotely at your convenient<br/> time</div>
<button className='but'>Learn more</button>
</div>


</div>
<div className='pencil'>
    <img src={pencil} alt='pencil' style={{height:'500px'}}/>
</div>

<div className='pen'>
    <img src={pen} alt='pen'  style={{ height: "300px" ,width:'300px'}}></img>
</div>
<div className='book'>
<img src={book} alt='book' className='boo' />
</div>
<div className='cup'>
<img src={cup} alt='cup' style={{height:'300px'}}/>
</div>
     </section>
<AboutUs/>
<Institute/>
<Tutors/>
<Testimonals/>
<Footer/>





    </div>
  )
}

export default Home