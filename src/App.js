import './App.css';
import Home from './Components/Home/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './Pages/About';
import Contact from './Pages/Contact/Contact';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import ForgetPass from './Pages/Password/ForgetPass';
import NewPass from './Pages/Password/NewPass';
import Chat from './DashBoard/Chat/Chat'
import Messages from './DashBoard/Messages/Messages';
import DashBoard from './DashBoard/DashBoard/DashBoard';
import ProposalDetails from './DashBoard/Proposal/ProposalDetails';
import BankAccount from './DashBoard/BankAccount/BankAccount';
import ProfileSetting from './DashBoard/ProfileSetting/ProfileSetting';
import StudentProposal from './DashBoard/StudentProposal/StudentProposal'
import CheckOut from './DashBoard/CheckOut/CheckOut';



function App() {
  return (
    <div>
  
    <BrowserRouter>
   
      <Routes>
      <Route path="/" element={<Home/>} />
<Route path='/About' element={<About/>}></Route>
<Route path='/Contact' element={<Contact/>}></Route>
<Route path='/register' element={<Register/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/forget' element={<ForgetPass/>}></Route>
<Route path='/NewPass' element={<NewPass/>}></Route>
<Route path='/chat' element={<Chat/>}></Route>
<Route path='/messages' element={<Messages/>}></Route>
<Route path='/DashBoard' element={<DashBoard/>}></Route>
<Route path='/ProposalDetails' element={<ProposalDetails/>}></Route>
<Route path='/BankAccount' element={<BankAccount/>}></Route>
<Route path='/ProfileSetting' element={<ProfileSetting/>}></Route>
<Route path='/StudentProposal' element={<StudentProposal/>}></Route>
<Route path='/CheckOut' element={<CheckOut/>}></Route>

      </Routes>
    </BrowserRouter>
  
      
    </div>
  );
}

export default App;
