import { REST_LOGO_LINK } from '../utils/constants';

const RestaurantList = ({ listOfRestaurant }) => {
  return (
    <section className="restaurant-list flex gap-6 flex-wrap align-middle">
      {listOfRestaurant.map((restaurant) => {
        return (
          <div
            className="w-52 hover:shadow-xl flex flex-col gap-1"
            key={restaurant?.info?.id}
          >
            <div className="flex justify-center">
              <img
                src={REST_LOGO_LINK + restaurant?.info?.cloudinaryImageId}
                alt="restaurant-logo"
                className="shadow-md size-full h-52 rounded-3xl"
              />
            </div>
            <div className="flex flex-col gap-1 p-3">
              <h3 className="h-6 overflow-hidden font-semibold ">
                {restaurant?.info?.name}
              </h3>
              <p className="italic">
                {' '}
                ⭐{restaurant?.info?.avgRating}stars 🚚
                {restaurant?.info?.sla?.slaString}
              </p>
              <p className="h-6 overflow-hidden ">
                {restaurant?.info?.cuisines.join(', ')}
              </p>
              <p className="h-6 overflow-hidden italic">
                {restaurant?.info?.areaName}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default RestaurantList;
