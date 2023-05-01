import React from 'react'
import './Chat.css'
import chat from '../../Images/chat.png'
import girl from '../../Images/girl.png'
import vector from '../../Images/Vector.png'
import vectorIcon from '../../Images/Vectoricon.png'
// import icon from '../../Images/icon.png'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Chat = () => {
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
  <NotificationsIcon sx={{color:' #074276',fontSize:'50px'}} className='x'/>
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
<div className='chat-four'>
<div  className='gir'>
    <img src={girl} alt='girl'  className='girl'/>
    <p className='Gets'>Mustafa Arif</p>
    <p className='Lorem'>Lorem Ipsum is simply dummy text of the printing</p>
  </div>
 
</div>





  </div>
  <div class="flex-item-right">
    <div className='cha'>
      <img src={chat} alt='chat' style={{width:'200px',height:'200px'}}/>
    </div>
  </div>
</div>
    </section>

    </div>
  )
}

export default Chat