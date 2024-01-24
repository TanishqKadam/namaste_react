import ReastaurantCard from './ReastaurantCard';
import restaurantList from '../utils/mockData';
import {useState} from 'react';

const Body =()=>{
 
   //state -> super-powerful variable.
    //when u use useState it will give u state variable so to get that 
    const[ListOfRest,setListOfRest/*function which called when state changes*/]=useState(/*default value*/ restaurantList);

    return (
      <div className='body'>
       <div className='filter'>
         <button className='filter-btn' onClick={()=>{
             filteredList=ListOfRest.filter(
                 (res)=>res.data.avgRating > 4
                 );
                 setListOfRest(filteredList);
                }} 
                 >
                 Top Rated Restaurant
             </button>
       </div>
       <div className='rest-container'>
         {
          ListOfRest.map(restaurant=><ReastaurantCard key={restaurant.data.id} resData={restaurant}/>)
         }
       </div>
      </div>
    );
   };

export default Body;