import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center bg-white p-8 rounded-xl">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-6">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          Page Not Found Maybe You Are Lost
        </p>
        <Link to="/" className="inline-block text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out">
          Get Back
        </Link>
      </div>
    </div>
  );
}
