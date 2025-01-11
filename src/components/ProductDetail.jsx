import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  function handleAddToCart () {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (!product) {
    return <div className='text-4xl'>Loading...</div>; 
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg space-y-6 flex">
      <div className="relative w-full overflow-hidden rounded-xl m-6">
        <img
          className="bg-black"
          src={product.images[0]} 
          alt={product.title}
        />
      </div>

      <div>
        <h1 className="text-4xl font-semibold text-gray-800">{product.title}</h1>

        <p className="text-3xl font-bold text-pink-800">₹ {product.price.toFixed(2)}/- Only</p>

        <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>

        <div className="flex items-center space-x-4 mt-4">
          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200 ease-in-out transform hover:scale-105"
          >
            Add to Cart
          </button>

          <button
            onClick={() => window.history.back()}
            className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-400 transition duration-200 ease-in-out transform hover:scale-105"
          >
            Go Back
          </button>
        </div>

        <div className="mt-6 text-gray-500 text-lg">
          <span className="font-semibold">Category:</span> {product.category}
        </div>
      </div>
    </div>
  );
}
