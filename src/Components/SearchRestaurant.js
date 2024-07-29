const SearchRestaurant = ({ searchFilter }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Restaurant Name..."
        className="border border-gray-300 hover:border-black focus:border-black p-3 rounded-full pl-10 shadow-2xl"
        onChange={(e) => {
          searchFilter(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchRestaurant;
