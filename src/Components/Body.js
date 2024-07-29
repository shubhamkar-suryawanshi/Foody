import { useEffect, useState } from 'react';
import RestaurantList from './RestaurantList';
import SearchRestaurant from './SearchRestaurant';

function Body() {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    getRestaurantData();
  }, []);
  const getRestaurantData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const searchFilter = (val) => {
    setFilteredList(
      listOfRestaurant.filter((resto) =>
        resto?.info?.name.toLowerCase().includes(val.toLowerCase())
      )
    );
  };
  return (
    <div className="w-3/4 m-auto flex flex-col gap-8">
      <SearchRestaurant searchFilter={searchFilter} />
      <RestaurantList listOfRestaurant={filteredList} />
    </div>
  );
}

export default Body;
