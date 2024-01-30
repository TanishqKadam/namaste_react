import ReastaurantCard from './ReastaurantCard';
import {useState,useEffect} from 'react';
import Shimmer from './Shimmer';
const Body =()=>{
 
   //state -> super-powerful variable.
    //when u use useState it will give u state variable so to get that 
    const[ListOfRest,setListOfRest/*function which called when state changes*/]=useState(/*default value*/ []);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    const [searchText,setSearchText] = useState('');

     useEffect(()=>{
       fetchData();
     },[]);
      
    const fetchData = async ()=>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5986763&lng=73.79783479999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json =await data.json();
      // console.log(json);
      // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
       setListOfRest(json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setFilteredRestaurant(json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
      };
     
    return filteredRestaurant.length === 0 ? <Shimmer/> : (
      <div className='body'>
       <div className='filter'>
         <div className='search'>
           <input type='text' className='search-box' value={searchText} onChange={(e)=>{setSearchText(e.target.value);}}></input> 
           {/* when ever we type in search box in that case setSearchText gets called onchange event and react component gets re-renderd every time onchange event -->so when yo type any matching words react component re-renders*/}
           <button className='btnSearch'  onClick={()=>{
             //filter restarurants and update the UI.
             const filteredRestaurant = ListOfRest.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              console.log(searchText);

               setFilteredRestaurant(filteredRestaurant);
           }}>search</button>
         </div>
         <button className='filter-btn' onClick={()=>{
             filteredList=ListOfRest.filter(
                 (res)=>res.info.avgRating > 4
                 );
                 setFilteredRestaurant(filteredList);
                }} 
                 >
                 Top Rated Restaurant
             </button>
       </div>
       <div className='rest-container'>
         {
          filteredRestaurant.map(restaurant=><ReastaurantCard key={restaurant.info.id} resData={restaurant}/>)
         }
       </div>
      </div>
    );
   };

export default Body;