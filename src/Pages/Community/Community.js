import React from 'react'
import './Community.css'
import community from '../../Images/community.png'
import image from '../../Images/image.png'


const Community = () => {
  return (
    <div>
    <section className='Community'>
    <div className="heads">
    Tutors Community
    </div>
 <div className="flex-contai">
        <div className="item-lef"> 
        
        <p className='comm'>

        Tutors Community is a platform where tutor’s  make life easy for any student enrolled in a 
        module where the tutor did exceptionally well .The idea is to elevate students confidence and 
        marks in any module he/she enrolled to.Tutors Community was established in 2021 with an idea
         of make life easy for any student which might be struggling to understand anything related to his/her studies.Tutors Community welcomes you
          in a platform and in the community of teachers.  

       </p>
     </div>
        <div className="item-righ">
        <img src={community} alt='community' className='on'/>
          </div>
     
        
        </div>



        <div className="flex-conta">
        <div className="item-rig">
        <img src={image} alt='ima' className='on'/>
          </div>
        <div className="item-le"> 
        
        <p className='com'>

        Tutors Community is a platform where tutor’s <br/> make life easy for any student enrolled in a <br/>
        module where the tutor did exceptionally well <br/>.The idea is to elevate students confidence and <br/>
        marks in any module he/she enrolled to.Tutors<br/> Community was established in 2021 with an idea<br/>
         of make life easy for any student which might<br/> be struggling to understand anything related to <br/>his/her studies.Tutors Community welcomes you<br/>
          in a platform and in the community of teachers.  

       </p>
     </div>
       
     
        
        </div>


    </section>
</div>
  )
}

export default Community