import User from '../components/User';
import UserClass from '../components/UserClass';
import { useContext } from 'react';
import UserContext from '../utils/userContext';
const About = ()=>{
    const{loggedUser} =useContext(UserContext);
    return(
      <div>
          <h1>About</h1>
          <h2>This is namaste React web Series</h2>
          <h2>user - {loggedUser}</h2>
          <UserClass name={'Tanishq Kadam (class)'} location ={'solapur class'}/>
      </div>
    )
};

export default About;

