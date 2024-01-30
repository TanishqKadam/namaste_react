import {useEffect,useState} from 'react';
import Shimmer from './Shimmer';
import {useParams} from 'react-router-dom';
import {MENU_API_URL} from '../utils/constants';

const RestaurantMenu = ()=>{
    
    const [resInfo,setResInfo]=useState(null);

    const {resId} = useParams();
    // console.log(resId);
    // to change the component dynamically 1st we have to fetch the data from api 
    // so for fetching dtata useEffect is been used
    useEffect(()=>{
        fetchMenu();
    },[]);

     const fetchMenu = async ()=>{
         const data = await fetch(MENU_API_URL+resId);
       // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5986763&lng=73.79783479999999&restaurantId=352179&catalog_qa=undefined&submitAction=ENTER
         const json =await data.json();
        console.log(json);
        setResInfo(json.data);
        }

        if(resInfo === null) return (<Shimmer/>);

        const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info; //destructring 

        const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
         console.log(itemCards);
        
     return(
        <div className='Menu'>
           <h1>{name}</h1>
           <h3>{cuisines.join(', ')} - {costForTwoMessage}</h3>
           <h2>Menu</h2>
           <ul>
               {itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name} - ₹{item.card.info.defaultPrice/100 || item.card.info.price/100}</li>)}
           </ul>
        </div>
    );
};

export default RestaurantMenu;