// import { useState } from 'react';
import {useState} from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({ data,showItem ,setShowIndex}) => {
  
  const handleClick = ()=>{
    setShowIndex();
  };

  return (
    <div>
      {/* header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 " onClick={handleClick}>
        <div className="flex justify-between cursor-pointer">
          <span className="font-bold text-sm">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔻</span>
        </div>
        {/* body lets create another component for it*/}
         { showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
