import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../assets/logo.png';

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center px-5 py-2 shadow-xl">
      <img className="w-36 cursor-pointer" alt="logo" src={logo} />
      <ul className="flex">
        <Link to={'/'}>
          <li className="p-2 m-2 font-bold text-gray-500 cursor-pointer hover:text-orange-500">
            Home
          </li>
        </Link>
        <Link to={'/about'}>
          <li className="p-2 m-2 font-bold text-gray-500 cursor-pointer hover:text-orange-500">
            About
          </li>
        </Link>
        <Link to={'/contact'}>
          <li className="p-2 m-2 font-bold text-gray-500 cursor-pointer hover:text-orange-500">
            Contact
          </li>
        </Link>
      </ul>
      <Link to={'/cart'}>
        <h1 className="p-2 m-2 font-bold text-gray-500 cursor-pointer hover:text-orange-500">
          {cartItems.length} Cart
        </h1>
      </Link>
    </div>
  );
};

export default Header;
