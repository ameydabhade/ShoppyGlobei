import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const cartItemsCount = useSelector(state => state.cart.items.length);

  return (
    <div className="bg-gray-800 text-white shadow-md h-20 justify-center flex">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold font-serif text-gray-100">
          SHOPPYGLOBE
        </Link>
        <div className="flex items-center space-x-6 gap-4">
          <Link 
            to="/" 
            className="text-lg font-medium text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out transform hover:scale-105"
          >
            Home
          </Link>
          <Link 
            to="/browse" 
            className="text-lg font-medium text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out transform hover:scale-105"
          >
            Browse
          </Link>
          <Link 
            to="/cart" 
            className="relative text-lg font-medium text-gray-300 hover:text-gray-200 transition transform hover:scale-105 flex items-center"
          >
            Cart 
 
          </Link>
        </div>
      </nav>
    </div>
  );
}
