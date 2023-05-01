import React from 'react'
import './Institute.css'
import CardOne from '../../Images/cardOne.png'
import CardTwo from '../../Images/cardTwo.png'
import CardThree from '../../Images/cardThree.png'
const Institute = () => {
  return (
    <div>
    <section className='institute'>
    <div className="head">
    Explore Our Institutes
    </div>
    <div className='cards'>
        <div className='card'>
            <img src={CardOne} alt='cardone' className='cardone' ></img>
            <p className='national'>National Senior Certificate </p>
        </div>
        <div className='card'>
            <img src={CardTwo} alt="cardtwo" className='cardtwo' ></img>
            <p className='national'>National Senior Certificate </p>
        </div>
        <div className='card'>
            <img src={CardThree} alt='cardthree' className='cardthree'></img>
            <p className='national'>National Senior Certificate </p>
        </div>
    </div>




    </section>
    
    
   </div>
  )
}

export default Institute