import { IMG_CDN_URL } from '../constants';

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  minDeliveryTime,
  costForTwoString,
}) => {
  return (
    <div className="w-[300] p-5 cursor-pointer hover:border hover:shadow-md pb-20">
      <img
        className="w-[250]"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h2 className="font-bold text-gray-700 pt-2 pb-1">{name} </h2>
      <h4 className="font-normal text-gray-700 pt-2 pb-1">
        {cuisines.join(', ')}
      </h4>
      <h3 className="text-sm font-normal flex justify-between">
        {avgRating >= 4 ? (
          <span className="border p-1 rounded-lg text-white w-21 border-green-500 bg-green-500">
            ⭐ {avgRating}
          </span>
        ) : (
          <span className="border p-1 rounded-lg text-white w-21 border-red-500 bg-red-500">
            ⭐ {avgRating}
          </span>
        )}
        <span>~</span>
        <span>{minDeliveryTime} MINS </span>
        <span>~</span>
        <span>{costForTwoString}</span>
      </h3>
    </div>
  );
};

export default RestaurantCard;
