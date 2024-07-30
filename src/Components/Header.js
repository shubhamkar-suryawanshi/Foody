import { Link } from 'react-router-dom';
import logo from '../utils/logo.png';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <header className="flex items-center justify-between p-4 shadow-2xl font-bold">
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" className="w-28 shadow-xl rounded-full" />
        </Link>
      </div>
      <nav>
        <ul className="flex justify-between gap-8 items-center ">
          <Link to="/">
            <li className="hover:text-orange-600">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-orange-600">About</li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-orange-600">Contact</li>
          </Link>
        </ul>
      </nav>
      <div className="flex items-center">Cart - {cartItems.length}</div>
    </header>
  );
};

export default Header;
