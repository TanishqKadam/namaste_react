import React from 'react';

class UserClass extends React.Component{
 
   constructor(props){
     super(props);

     this.state = {
         userInfo:{
             name:'dummy',
             location:'default'
         }
     };
   }
   
   async componentDidMount(){
       const data =await fetch('https://api.github.com/users/TanishqKadam')
       const json = await data.json();

       console.log(json);

       this.setState({
           userInfo:json,  //when we call setState updating phase will begin.
       });
    }

    render(){
        //returns some piece of JSX 
        const {name,location,login}=this?.state?.userInfo;
        return(
            <div className='userCard'>
                <h1>Name - {name}</h1>
                <h2>location - {location}</h2>
                <h2>UserName - {login}</h2>
            </div>
        );
    }
}

export default UserClass;