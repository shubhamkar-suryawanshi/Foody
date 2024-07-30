import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { REST_LOGO_LINK } from '../utils/constants';

function MenuList() {
  const [menuList, setMenuList] = useState([]);
  const { resID } = useParams();
  useEffect(() => {
    getMenuData();
  }, []);
  const getMenuData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${resID}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setMenuList(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    console.log(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  };
  return (
    <section className="restaurant-list flex gap-6 flex-wrap align-middle">
      {menuList.map((menu) => {
        return (
          <div
            className="w-1/2 m-auto shadow-xl flex gap-3 rounded-3xl"
            key={menu?.card?.info?.id}
          >
            <div className="flex justify-center w-1/4">
              <img
                src={REST_LOGO_LINK + menu?.card?.info?.imageId}
                alt="restaurant-logo"
                className="shadow-md size-full h-34 w-full rounded-3xl"
              />
            </div>
            <div className="flex flex-col gap-0.75 p-3 w-3/4">
              <h3 className="h-6 overflow-hidden font-semibold ">
                {menu?.card?.info?.name}
              </h3>

              <p className="h-6 overflow-hidden ">
                Rs.{' '}
                {menu?.card?.info?.defaultPrice
                  ? menu?.card?.info?.defaultPrice / 100
                  : menu?.card?.info?.finalPrice
                  ? menu?.card?.info?.finalPrice / 100
                  : menu?.card?.info?.price / 100}
              </p>
              <p className="h-6 overflow-hidden italic">
                {menu?.card?.info?.description}
              </p>
              <button className="w-20 mt-2 p-2 shadow-lg rounded-full border border-transparent hover:border-green-500">
                Add ➕
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default MenuList;
