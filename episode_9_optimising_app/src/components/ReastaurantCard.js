import {CDN_URL} from '../utils/constants';

const ReastaurantCard = (props)=>{
    const {resData}=props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId,sla} = resData?.info;
    return (
      <div className='rest-card' style={{backgroundColor:'#f0f0f0'}}>
       <img className='res-logo' alt='rest-logo' src={CDN_URL+cloudinaryImageId}></img>
       <h3>{name}</h3>
       <h4>{cuisines.join(',')}</h4>
       <h4>{avgRating} stars</h4>
       <h4>{costForTwo}</h4>
       <h4>{sla?.deliveryTime} minuntes</h4>
      </div>
    );
  };

export default ReastaurantCard;