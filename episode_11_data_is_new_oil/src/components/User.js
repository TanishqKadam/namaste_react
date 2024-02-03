import {useState} from 'react';


const User = ({name,location})=>{
    const [count,setCount] = useState(0);

    return(
        <div className='userCard'>
            <h1>{name}</h1>
            <h2>{location}</h2>
            <h2>@TanishqKadam</h2>
            <h2>count = {count}</h2>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            <button onClick={()=>{setCount(0)}}>reset count</button>
        </div>
    );
};

export default User;