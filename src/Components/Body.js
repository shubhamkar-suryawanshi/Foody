import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

import { filterData } from '../shared/helper';
import useOnline from '../Hooks/useOnline';

const Body = () => {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.696534&lng=74.2421107&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    // console.log(json);
    setList(json.data.cards[2].data.data.cards);
    setFilteredList(json.data.cards[2].data.data.cards);
  }

  if (!list) return null;

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Oops! You are Offline</h1>;
  }

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <React.Fragment>
      <input
        className="py-1 px-5  ml-3 my-3  border border-gray-400 active:border-gray-400 rounded-l-full"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      />
      <button
        className="p-1 rounded-r-full border border-gray-400 pr-2 bg-gray-400"
        onClick={() => {
          setFilteredList(filterData(inputValue, list));
        }}
      >
        Search
      </button>

      <div className="flex flex-wrap justify-around">
        {filteredList.map((r) => {
          return (
            <Link to={'/restaurant/' + r.data.id} key={r.data.id}>
              <RestaurantCard {...r.data} />
            </Link>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Body;
