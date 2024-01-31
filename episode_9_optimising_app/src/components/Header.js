import {LOGO_URL} from '../utils/constants';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header=()=>{
  
  const [reactBtnChange,setReactBtnChange] = useState('Login')
  const onlineStatus = useOnlineStatus();
  return (
      <div className='header'>
         <div className='logo-container'>
           <img className='logo' src={LOGO_URL}></img>
         </div>
         <div className='nav-items'> 
            <ul>
              <li>Online Status:{onlineStatus?"✔":"❌"}</li>
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