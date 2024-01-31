import {useEffect,useState} from 'react';
import {MENU_API_URL} from '../utils/constants';


const useReastaurantMenu = (resId) =>{

    const[resInfo,setResInfo] = useState(null);
   //fetch the data from url using useEffect()
   useEffect(()=>{
       fetchData();
   },[]);


   const fetchData = async () =>{
       const data = await fetch(MENU_API_URL+resId);
       const json = await data.json();

       //when we get the data we have to set the state of that component 
       setResInfo(json.data);
   };
   return resInfo;
   
};

export default useReastaurantMenu;