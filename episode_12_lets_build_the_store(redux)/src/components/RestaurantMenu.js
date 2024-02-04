import {useState} from 'react';
import Shimmer from './Shimmer';
import RestaurantCategory from './RestaurantCategory';
import {useParams} from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = ()=>{
    

    const {resId} = useParams(); //get the data from url
    
    const resInfo = useRestaurantMenu(resId); //creating a custome hook to fetch data to follow single responsibility principle

    const[showIndex,setShowIndex] = useState(null);

        if(resInfo === null) return (<Shimmer/>);

        const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info; //destructring 

        const itemmCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        
        const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

        // console.log(categories);

     return(
        <div className='text-center'>
           <h1 className='font-bold my-4 text-xl'>{name}</h1>
           <h3 className='font-bold font-serif'>{cuisines.join(', ')} - {costForTwoMessage}</h3>
          {/* categories accordian */}
          {/* map over each category will build accordian and in that item */}
           {categories.map((category,index)=><RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} showItem={index === showIndex ?true:false}
           setShowIndex={()=>setShowIndex(index)}/>)}
        </div>
    );
};

export default RestaurantMenu;