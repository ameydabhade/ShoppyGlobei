import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../store/cartSlice';

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart(product));
  };

  return (
    <div className="border p-4 rounded-lg shadow hover:scale-105 transition-transform duration-300">
      <Link to={`/product/${product.id}`} className="text-blue-500 block mb-2">
        <img
          src={product.images}
          className="w-full rounded mb-2"
          alt={product.title}
        />
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-2">₹{product.price.toFixed(2)}</p>
        <p className="text-blue-500 hover:underline block mb-2">View Details</p>
      </Link>

      <button
        onClick={handleAddToCart}
        className="bg-black text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
}
