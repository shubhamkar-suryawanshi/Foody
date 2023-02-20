import { useState, useEffect } from 'react';
import { IMG_URL } from '../assets/constants';

const RestaurantCard = () => {
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    getRestaurantList();
  }, []);

  const getRestaurantList = async () => {
    const list = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.696534&lng=74.2421107&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await list.json();
    setRestaurant(json.data.cards[2].data.data.cards[0].data);
    console.log(json);
  };

  return (
    <div className="w-[300] p-5 cursor-pointer hover:border hover:shadow-md ">
      <img
        className="w-[250]"
        src={IMG_URL + restaurant.cloudinaryImageId}
        alt="Menu Img"
      />
      <h1 className="font-bold text-gray-700 pt-2 pb-1">{restaurant.name}</h1>

      <h3 className="text-sm font-normal flex justify-between">
        <span className="border border-green-500 bg-green-500">
          ⭐ {restaurant.avgRating}{' '}
        </span>
        <span>~</span>
        <span>{restaurant.minDeliveryTime} MINS </span>
        <span>~</span>
        <span>{restaurant.costForTwoString}</span>
      </h3>
    </div>
  );
};

const Body = () => {
  return <RestaurantCard />;
};

export default Body;
