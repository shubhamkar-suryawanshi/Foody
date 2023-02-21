const FoodItem = ({ name, description, price }) => {
  return (
    <div className="p-3 m-2 text-left border border-gray-300 hover:shadow-xl w-7/8 flex justify-between items-center">
      <div>
        <h2 className="py-2 font-bold text-gray-700 text-2xl">{name} </h2>
        <h4 className=" text-gray-600 ">Description: {description}</h4>
        <h4 className=" text-gray-600 ">Rupees: {price / 100}</h4>
      </div>
      <button className="border mr-5 shadow-md py-1 px-3 cursor-pointer border-gray-300 rounded-2xl">
        Remove
      </button>
    </div>
  );
};

export default FoodItem;
