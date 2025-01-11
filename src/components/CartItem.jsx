import { useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity } from '../store/cartSlice';
import { decrementQuantity } from '../store/cartSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  function handleRemove(){
    dispatch(removeFromCart(item.id));
  };

  function handleAdd(){
    dispatch(incrementQuantity(item.id)); 
  };
  
  function handleSub(){
    dispatch(decrementQuantity(item.id)); 
  };

  return (
    <div className="flex justify-between items-center border-b py-4 px-6 bg-white shadow-lg rounded-lg hover:bg-gray-50 transition-all">
      <div className="flex items-center space-x-4">
        <img 
          src={item.images} 
          alt={item.title} 
          className="w-16 h-16 object-cover rounded-md border border-gray-200"
        />
        <div>
          <h3 className="font-semibold text-xl text-gray-800">{item.title}</h3>
          <p className="text-sm text-gray-500">₹{item.price}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">

          <button
            onClick={handleSub}
            className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all"
          >
            -
          </button>


          <span className="text-lg font-semibold text-gray-700">{item.quantity}</span>  {/* Display quantity */}

 
          <button 
            onClick={handleAdd}
            className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
          >
            +
          </button>
        </div>

        {/* Remove button to delete item */}
        <button 
          onClick={handleRemove} 
          className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 transition-all"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
