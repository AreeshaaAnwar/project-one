import React from 'react'
import './RequestLesson.css'
import StudentDash from '../../StudentDashBoard/StudentDash'

const RequestLesson = () => {
  return (
    <div>
       <StudentDash/>
       <div style={{backgroundColor:'#F5F5F5',marginTop:'-590px',minHeight:'80vh', width: '100%' }}>
<div className='Available'>
  <div className="Available-left">
<div className='Request'>Request A Lesson</div>
<div className='Title'>Title</div>
<div className='Title'>Select Subjects</div>
<div className='Title'>Price (R)</div>
<div className='Title'>Document File Only(pdf,docx,jpg,png)</div>
<div className='Title'>Description</div>
<div className='titlebut'>  <button className='det' >POST</button></div>



  </div>
  </div>

</div>

    </div>
  )
}

export default RequestLesson