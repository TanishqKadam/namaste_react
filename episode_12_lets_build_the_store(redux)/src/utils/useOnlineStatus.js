import {useEffect,useState} from 'react';
//what should be input ? ->no input
const useOnlineStatus = ()=>{

    const[onlineStatus,setOnlineStatus]=useState(true);

    //check if online 
    useEffect(()=>{
        //we get a event as online in JS to check the status 
        window.addEventListener('offline',()=>{
            //set the state varible 
            setOnlineStatus(false);
        })
        window.addEventListener('online',()=>{
            setOnlineStatus(true);
        })
        
    },[]);

    //boolean value
    return onlineStatus;
};

export default useOnlineStatus;