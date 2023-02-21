import React from 'react';
import { useSelector } from 'react-redux';
import FoodItem from './FoodItem';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="">
      <h1 className="py-2 m-2 font-bold text-gray-700 text-2xl ">
        Your Menu - {cartItems.length}
      </h1>
      {cartItems.map((item) => (
        <FoodItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cart;
