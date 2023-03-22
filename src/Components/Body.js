import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

import { filterData } from '../shared/helper';
import useOnline from '../Hooks/useOnline';
import Pegination from './Pegination';

const Body = () => {
  const [query, setQuery] = useState('');
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(5);

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

  // const lastCardIndex = currentPage * cardsPerPage;
  // const firstCardIndex = lastCardIndex - cardsPerPage;
  // const currentCards = list.slice(firstCardIndex, lastCardIndex);

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="box-border">
      <input
        className="py-1 px-5  m-5  w-1/3  border border-gray-400 active:border-gray-400 rounded-full "
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
        placeholder="Search Your Favorite Restaurant Here 😍"
      />

      <div className="flex flex-wrap justify-around box-border">
        {/**{currentCards */}
        {list
          .filter((restos) =>
            restos.data.name.toLowerCase().includes(query.toLowerCase())
          )
          .map((r) => {
            return (
              <Link to={'/restaurant/' + r.data.id} key={r.data.id}>
                <RestaurantCard {...r.data} />
              </Link>
            );
          })}
      </div>
      {/**   <Pegination
        totalCards={list.length}
        cardsPerPage={cardsPerPage}
        setCurrentPage={setCurrentPage}
      />*/}
    </div>
  );
};

export default Body;
