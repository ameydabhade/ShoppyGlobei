import { useState } from 'react';
import { useProductList } from '../hooks/useProductList';
import ProductItem from './ProductItem';

export default function ProductList() {
  const { products } = useProductList();
  const [searchTerm, setSearchTerm] = useState('');
//filtered products to implement search
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-4 py-6 bg-gray-50 rounded-xl">
      <div className="max-w-7xl mx-auto">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
