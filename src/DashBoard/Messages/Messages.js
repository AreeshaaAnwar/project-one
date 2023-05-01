import React from 'react'
import './Messages.css'
import girl from '../../Images/girl.png'
import vector from '../../Images/Vector.png'
import vectorIcon from '../../Images/Vectoricon.png'
import icon from '../../Images/icon.png'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import smiling from '../../Images/smiling.png'
import attach from '../../Images/attach.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Messages = () => {
  return (
    <div>
         <section className='chat'>
    <div class="flex-containers">
  <div class="flex-item-left">
<div className='chat-one'>
<div className='status'>
<img src={vector} alt='vector' className='vector'/>
<img src={vectorIcon} alt='icon'  className='vectorIcon'></img>
<MoreVertIcon className='icons' sx={{width:'40px',height:'40px',color:'#00000080'}}/>
{/* <img src={icon} alt='icons' className='icons'></img> */}
  </div>
  <div  className='gir'>
    <img src={girl} alt='girl'  className='girl'/>
  </div>
 </div>
<div className='chat-two'>
<div className='not'>
  <NotificationsIcon sx={{color:' #074276',fontSize:'50px'}}/>
 </div>
 <p className='Get'>Get notified of new messages</p>
</div>
<div className='chat-three'>
<div className='text-div'>
  <input type='text' className='text'></input>
  <div className='sear'>
    <SearchIcon/>
  
  </div>
  <p className='pos'>Search or start new chat</p>
  </div>

</div>
<div className='chat-four'>
<div  className='gir'>
    <img src={girl} alt='girl'  className='girl'/>
    <p className='Gets'>Mustafa Arif</p>
    <p className='Lorem'>Lorem Ipsum is simply dummy text of the printing</p>
  </div>
  
</div>
<div className='chat-four'>
<div  className='gir'>
    <img src={girl} alt='girl'  className='girl'/>
    <p className='Gets'>Mustafa Arif</p>
    <p className='Lorem'>Lorem Ipsum is simply dummy text of the printing</p>
  </div>
</div>
<div className='chat-four'>
<div  className='gir'>
    <img src={girl} alt='girl'  className='girl'/>
    <p className='Gets'>Mustafa Arif</p>
    <p className='Lorem'>Lorem Ipsum is simply dummy text of the printing</p>
  </div>
</div>
<div className='chat-four'>
<div  className='gir'>
    <img src={girl} alt='girl'  className='girl'/>
    <p className='Gets'>Mustafa Arif</p>
    <p className='Lorem'>Lorem Ipsum is simply dummy text of the printing</p>
  </div>
</div>
<div className='chat-four'>
<div  className='gir'>
    <img src={girl} alt='girl'  className='girl'/>
    <p className='Gets'>Mustafa Arif</p>
    <p className='Lorem'>Lorem Ipsum is simply dummy text of the printing</p>
  </div>
</div>
<div className='chat-four'>
<div  className='gir'>
    <img src={girl} alt='girl'  className='girl'/>
    <p className='Gets'>Mustafa Arif</p>
    <p className='Lorem'>Lorem Ipsum is simply dummy text of the printing</p>
  </div>
</div>
<div className='chat-four'>
<div  className='gir'>
    <img src={girl} alt='girl'  className='girl'/>
    <p className='Gets'>Mustafa Arif</p>
    <p className='Lorem'>Lorem Ipsum is simply dummy text of the printing</p>
  </div>
</div>

  </div>
  <div class="flex-item-right">
  <div className='right-div'>
  <div  className='gir'>
    <img src={girl} alt='girl'  className='girl'/>
    <p className='Mustafa'>Mustafa Arif</p>
  </div>
  <div className='search'>
    <SearchIcon  sx={{fontSize:'50px',color:'rgba(0, 0, 0, 0.65)'}}/>
    <img src={icon} alt='icons' className='bar' ></img>
  
  </div>
  </div>
  <div className='center-div'>
 
 <div className='mess'>
   Lorem Ipsum 
  </div>
  <div className='mess-two'>
  Lorem Ipsum is simply 
  </div>

  <div className='mess'>
   Lorem Ipsum 
  </div>
  <div className='messs'>
  Lorem Ipsum is simply 
  </div>
  <div className='mess-two'>
  Lorem Ipsum 
  </div>
  <div className='mess'>
   Lorem Ipsum 
  </div>
  </div>
  <div className='last'>
<div className='right-icon'>
    <img src={smiling} alt='smiling' className='smi'></img>
    <img src={attach} alt='attach'  style={{marginLeft:'50px'}} className='att'></img>
    <input type='text' className='te'></input>
    <p className='Type'>Type a message</p>
</div>

  </div>
  </div>
</div>
    </section>
    </div>
  )
}

export default Messages