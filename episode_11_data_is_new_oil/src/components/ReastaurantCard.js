import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/userContext";

const ReastaurantCard = (props) => {
  
  const { resData } = props;
  
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData?.info;
  

  return (
    <div className="m-4 p-4 w-48 bg-gray-100 border border-solid border-gray-100 shadow-md overflow-hidden rounded-lg hover:bg-gray-400">
      <img className='rounded-lg'alt="rest-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
        {cuisines.join(",")}
      </h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minuntes</h4>
    </div>
  );
};

//higher order component -> which will take input as restCard and o/p will be restCardPromoted  to shwo promoted restaurant cards.


export default ReastaurantCard;
