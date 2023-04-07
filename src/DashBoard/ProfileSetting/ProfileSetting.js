import React from 'react'
import mus from '../../Images/mus.png'
import TextField from '@mui/material/TextField';
import './ProfileSetting.css'
import Teachers from '../../TeachersDash/Teachers';
const ProfileSetting = () => {
  return (
    <>
    <Teachers/>
    <div style={{backgroundColor:'#F5F5F5', width: '100%',marginTop:'-700px',minHeight:'80vh', }}>
    <div className='w'>


    <div class="flex-container" style={{marginTop:'-80px'}}>
      <div className="item-one">
      <div className='u'>
      Profile Setting
        </div>
<div className='input-one'>
<TextField
          id="standard-multiline-flexible"
          label="Name"
          multiline
          maxRows={4}
          variant="standard"
         sx={{marginLeft:'50px'}}
        className='multiline'
        />
        <TextField
          id="standard-multiline-flexible"
          label="Email"
          multiline
          maxRows={4}
          variant="standard"
         className='Emai'
         sx={{marginLeft:'50px'}}
        />
</div>
<div className='input-one'>
<TextField
          id="standard-multiline-flexible"
          label="About me"
          multiline
          maxRows={4}
          variant="standard"
         sx={{marginLeft:'50px'}}
        className='multiline'
        />
        <TextField
          id="standard-multiline-flexible"
          label="Subjects"
          multiline
          maxRows={4}
          variant="standard"
         className='Emai'
         sx={{marginLeft:'50px'}}
        />
</div>
<div className='input-one'>
<TextField
          id="standard-multiline-flexible"
          label="Phone no"
          multiline
          maxRows={4}
          variant="standard"
         sx={{marginLeft:'50px'}}
        className='multiline'
        />
        <TextField
          id="standard-multiline-flexible"
          label="Password"
          multiline
          maxRows={4}
          variant="standard"
         className='Emai'
         sx={{marginLeft:'50px'}}
        />
</div>




        
     <div className='canc'>  <button className='can' >cancel</button>
 <button className='cane'>UPDATE PROFILE</button></div>
    
      </div>
      <div className="item-two">
      <img src={mus} alt='mus' className='mus'/>
    <p style={{fontWeight:'20px',display:'flex',justifyContent:'center',marginTop:'30%',fontFamily:'Montserrat;'}}>Mustafa Arif</p>
      </div>
    </div>
    
        
        
        
        </div>
        
        </div>
        </>
  )
}

export default ProfileSetting