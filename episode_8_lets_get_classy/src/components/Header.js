import {LOGO_URL} from '../utils/constants';
import { useState } from 'react';
import {Link} from 'react-router-dom';

const Header=()=>{
  
  const [reactBtnChange,setReactBtnChange] = useState('Login')
  
  return (
      <div className='header'>
         <div className='logo-container'>
           <img className='logo' src={LOGO_URL}></img>
         </div>
         <div className='nav-items'> 
            <ul>
              <Link to='/'><li>Home</li></Link>
              <Link to='/about'><li>About us</li></Link>
              <Link to='/contactus'><li>contact us</li></Link>
              <li>Cart</li>
              <button className='login' onClick={()=>{reactBtnChange === 'Login'?setReactBtnChange('Logout'):setReactBtnChange('Login')}}>{reactBtnChange}</button>
            </ul>
         </div>
      </div>
    );
  }; 

  export default Header;