import React from 'react'
import './Testimonals.css'
import circle from '../../Images/circle.png'
import circleone from '../../Images/circe-one.png'
import circletwo from '../../Images/circe-two.png'

import comma from '../../Images/comma.png'

const Testimonals = () => {
  return (
    <div>
    <section className='testimonals'> 
    <div className="testi">
          <h5>
          Testonomials
          </h5>
          <p className='Benefits'>
          What our Customers say
          </p>
        </div>
        <div className='tests'>
            <div className='test-one'>
                <div className='col'></div>
                <div className='circle'><img src={circle} alt='circle' style={{width:'80px',height:'80px'}}/></div>
                <p style={{textAlign:'center',marginTop:'50px',color:'black',fontSize:'20px'}}>Anasta Wil</p>
                <div style={{marginLeft:'40px'}}>
                <img src={comma} alt='commaa'/>
                <img src={comma} alt='commaa' style={{marginLeft:'2px'}}/>
                </div>
                <p style={{fontSize:'15px',textAlign:'center'}}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.Lorem<br/> ipsum dolor sit amet, consectetur<br/> adipiscing elit.</p>
            </div>
            <div className='test-two'>
            <div className='col-two'></div>
                <div className='circle-two'><img src={circleone} alt='circle' style={{width:'80px',height:'80px'}}/></div>
                <p style={{textAlign:'center',marginTop:'50px',color:'black',fontSize:'20px'}}>Hailey Dan</p>
                <div style={{marginLeft:'40px'}}>
                <img src={comma} alt='commaa'/>
                <img src={comma} alt='commaa' style={{marginLeft:'2px'}}/>
                </div>
                <p style={{fontSize:'15px',textAlign:'center'}}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.Lorem<br/> ipsum dolor sit amet, consectetur<br/> adipiscing elit.</p>



            </div>
            <div className='test-one'>  
            <div className='col-three'></div>
                <div className='circle'><img src={circletwo} alt='circle' style={{width:'80px',height:'80px'}}/></div>
                <p style={{textAlign:'center',marginTop:'50px',color:'black',fontSize:'20px'}}>Charlie</p>
                <div style={{marginLeft:'40px'}}>
                <img src={comma} alt='commaa'/>
                <img src={comma} alt='commaa' style={{marginLeft:'2px'}}/>
                </div>
                <p  className='p'   style={{fontSize:'15px',textAlign:'center'}}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.Lorem<br/> ipsum dolor sit amet, consectetur<br/> adipiscing elit.</p>
            </div>
        </div>
    </section>
   </div>
  )
}

export default Testimonals