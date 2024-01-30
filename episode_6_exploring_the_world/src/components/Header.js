import {LOGO_URL} from '../utils/constants';
import { useState } from 'react';

const Header=()=>{
  
  const [reactBtnChange,setReactBtnChange] = useState('Login')
  
  return (
      <div className='header'>
         <div className='logo-container'>
           <img className='logo' src={LOGO_URL}></img>
         </div>
         <div className='nav-items'> 
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>contact us</li>
              <li>Cart</li>
              <button className='login' onClick={()=>{reactBtnChange === 'Login'?setReactBtnChange('Logout'):setReactBtnChange('Login')}}>{reactBtnChange}</button>
            </ul>
         </div>
      </div>
    );
  }; 

  export default Header;