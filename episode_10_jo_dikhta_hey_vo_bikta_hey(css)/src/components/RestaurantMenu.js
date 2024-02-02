import {useEffect,useState} from 'react';
import Shimmer from './Shimmer';
import {useParams} from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = ()=>{
    

    const {resId} = useParams(); //get the data from url
    
    const resInfo = useRestaurantMenu(resId); //creating a custome hook to fetch data to follow single responsibility principle

        if(resInfo === null) return (<Shimmer/>);

        const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info; //destructring 

        const itemmCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        console.log(itemmCards);
        
     return(
        <div className='Menu'>
           <h1>{name}</h1>
           <h3>{cuisines.join(', ')} - {costForTwoMessage}</h3>
           <h2>Menu</h2>
           <ul>
               {itemmCards.map((item)=><li key={item.card.info.id}>{item.card.info.name} - ₹{item.card.info.defaultPrice/100 || item.card.info.price/100}</li>)}
           </ul>
        </div>
    );
};

export default RestaurantMenu;