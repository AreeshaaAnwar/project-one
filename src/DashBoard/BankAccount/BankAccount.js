import React from 'react'
import upcomming from '../../Images/upcomming.png'
import './BankAccount.css'
import Teachers from '../../TeachersDash/Teachers'
const BankAccount = () => {
  return (
  <div>
    <Teachers/>
    <div style={{backgroundColor:'#F5F5F5',marginTop:'-590px',minHeight:'85vh', width: '100%' }}>
  
     {/* <div className='bank'> */}
 <div className='Available'>
  <div className="Available-left">
    <div className='up'>
    Bank Accounts
    </div>
    <div className='addbut'>
  <button className='add'>ADD ACCOUNT</button>
   </div>
   
  
    <div className='acc' >
   <p>S.NO</p>
   <p className='sa'>Bank Name </p>
   <p className='sa'>Account Number </p>
   <p className='sa'>Account Type </p>
   <p className='sa'>Name of Account </p>
   <p className='sa'>BPhone Number </p>
   <p className='sa'>Date </p>
      
      
    </div>
    <div className='accc' >
   <p style={{marginLeft:'20px'}}>1</p>
   <p className='saa'>HBL </p>
   <p className='num'>000039569</p>
   <p className='curr'>Current </p>
   <p className='nam'>Mustufa Arif</p>
   <p className='bphone'>031245789</p>
   <p className='sas'>2023_01</p>
      
      
    </div>
  </div>
</div>
</div>



    </div>
    
    // </div>

  )
}

export default BankAccount