import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../constants';
import useRestaurant from '../Hooks/useRestaurant';
import Shimmer from './Shimmer';
import { useDispatch } from 'react-redux';
import { addItem } from '../Shared/cartSlice';

const Restaurant = () => {
  const { resId } = useParams();

  const { restaurant, menus } = useRestaurant(resId);

  const dispatch = useDispatch();

  if (!restaurant) return null;

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="p-3 m-2 flex  justify-start">
      <div className="w-72 p-5 m-5 flex-1">
        <img
          className="border shadow-gray-400 p-5"
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
        />
        <h1 className="py-5 font-bold text-gray-700 text-2xl">
          Restaurant Name: {restaurant.name}
        </h1>
        <h1 className="font-medium text-gray-600 text-lg">
          Rating: {restaurant.avgRating}
        </h1>
      </div>

      <div className="flex-1">
        <h1 className="py-5 font-bold text-gray-700 text-2xl">Menu List</h1>
        <ul>
          {Object.values(menus).map((item) => (
            <li
              key={item.id}
              className="py-2 font-medium text-gray-600 text-lg"
            >
              {item.name + '  '}-
              <button
                className="border ml-5 shadow-md py-1 px-2 cursor-pointer border-gray-300 rounded-2xl"
                key={item.id}
                onClick={() => {
                  dispatch(addItem(item));
                }}
              >
                Add item
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
