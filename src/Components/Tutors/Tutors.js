import React from 'react'
import './Tutors.css'
import cubes from '../../Images/cubes.png'
import review from '../../Images/review.png'
import magnifying from '../../Images/magnifying.png'
const Tutors = () => {
  return (
    <div>
    <section className='tutors'>
    <div className="tutor">
          <h5>
          Why choose us? 
          </h5>
          <p className='Benefits'>
          Benefits of being a Tutors Community Member
          </p>
          <p className='Communit'>Tutors Community is a platform where tutor’s make life easy for any student enrolled in a<br/> module where the tutor did exceptionally well.</p>
        </div>
<div className='cardds'>
<div className='cardd'>
    <img src={cubes} alt='cubes'/>
    <p style={{fontWeight:'bold'}}>100+ Modules</p>
    <p style={{marginTop:'-10px'}}>Lorem ipsum dolor sit <br/>amet, consectetur<br/> adipiscing elit.</p>
</div>
 
<div className='cardd'>
    <img src={review} alt='review'/>
    <p style={{fontWeight:'bold' ,marginLeft:'20px'}}>Review</p>
    <p style={{marginTop:'-10px'}}>Lorem ipsum dolor sit <br/>amet, consectetur<br/> adipiscing elit.</p>


</div>
<div className='cardd'>
<img src={magnifying} alt='magnifying'/>
<p style={{fontWeight:'bold',marginLeft:'20px'}}>Get Calarity</p>
<p style={{marginTop:'-10px'}}>Lorem ipsum dolor sit <br/>amet, consectetur<br/> adipiscing elit.</p>
</div>
</div>


    </section>



    </div>
  )
}

export default Tutors