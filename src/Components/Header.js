import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="flex justify-between items-center px-5 py-2 shadow-xl">
      <img className="w-36 cursor-pointer" alt="logo" src={logo} />
      <ul className="flex">
        <li className="p-2 m-2 font-bold text-gray-500 cursor-pointer hover:text-orange-500">
          Home
        </li>
        <li className="p-2 m-2 font-bold text-gray-500 cursor-pointer hover:text-orange-500">
          About
        </li>
        <li className="p-2 m-2 font-bold text-gray-500 cursor-pointer hover:text-orange-500">
          Contact
        </li>
      </ul>
      <h1 className="p-2 m-2 font-bold text-gray-500 cursor-pointer hover:text-orange-500">
        Cart
      </h1>
    </div>
  );
};

export default Header;
