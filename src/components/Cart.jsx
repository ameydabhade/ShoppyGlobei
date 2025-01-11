import { useSelector } from 'react-redux';
import CartItem from './CartItem';

export default function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 m-4 bg-white rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Your Cart</h1>

      <div>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}

        <div className="mt-6 text-2xl font-semibold flex justify-between items-center text-gray-900">
          <span className="font-medium">Total:</span>
          <span className="font-bold text-blue-600">₹{total.toFixed(2)}</span>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => alert('Proceeding to checkout...')}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
