import React from 'react'
import './CForm.css'

const CForm = () => {
  return (
    <div>
<section className='CForm'>
<div className='flex'>
<div className='left'>
<div className='heading'>
    <h1 >We always <br/>ready to hear <br/>from you </h1>
</div>


</div>
<div className='right'>
<form className='form'>
    <input type='text' className='inpp' placeholder='your name'></input>
    <input type='text' className='inputt' placeholder='your email'></input><br/>
    <textarea id="subject" name="subject" placeholder="Write message"  className='Area'></textarea><br/>
    <button type='submit' className='b'>submit</button>
</form>

</div>

</div>
    </section>
    </div>
  )
}

export default CForm