import React, { useState } from 'react';

const productsData = [
  { id: 1, name: 'Product 1', price: '$10', image: 'https://source.unsplash.com/random/300x200' },
  { id: 2, name: 'Product 2', price: '$20', image: 'https://source.unsplash.com/random/300x200' },
  { id: 3, name: 'Product 3', price: '$15', image: 'https://source.unsplash.com/random/300x200' },
  { id: 4, name: 'Product 4', price: '$25', image: 'https://source.unsplash.com/random/300x200' },
];

const FilterChoice = () => {
  const [filters, setFilters] = useState({
    price: [],
    distance: '',
    productType: [],
    search: '',
  });

  const filteredProducts = productsData.filter(product => {
    return (
      (filters.price.length === 0 || filters.price.includes(product.price)) &&
      (filters.distance === '' || product.distance === filters.distance) &&
      (filters.productType.length === 0 || filters.productType.includes(product.productType)) &&
      (filters.search === '' || product.name.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 p-4">
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Price Filter</h2>
          <label>
            <input
              type="checkbox"
              value="$10"
              checked={filters.price.includes('$10')}
              onChange={(e) => setFilters({ ...filters, price: e.target.checked ? [...filters.price, '$10'] : filters.price.filter(price => price !== '$10') })}
            />
            $10
          </label>
          <label>
            <input
              type="checkbox"
              value="$15"
              checked={filters.price.includes('$15')}
              onChange={(e) => setFilters({ ...filters, price: e.target.checked ? [...filters.price, '$15'] : filters.price.filter(price => price !== '$15') })}
            />
            $15
          </label>
          <label>
            <input
              type="checkbox"
              value="$20"
              checked={filters.price.includes('$20')}
              onChange={(e) => setFilters({ ...filters, price: e.target.checked ? [...filters.price, '$20'] : filters.price.filter(price => price !== '$20') })}
            />
            $20
          </label>
          <label>
            <input
              type="checkbox"
              value="$25"
              checked={filters.price.includes('$25')}
              onChange={(e) => setFilters({ ...filters, price: e.target.checked ? [...filters.price, '$25'] : filters.price.filter(price => price !== '$25') })}
            />
            $25
          </label>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Distance Filter</h2>
          <select
            value={filters.distance}
            onChange={(e) => setFilters({ ...filters, distance: e.target.value })}
          >
            <option value="">Any</option>
            <option value="5km">Within 5km</option>
            <option value="10km">Within 10km</option>
            <option value="15km">Within 15km</option>
          </select>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Product Type Filter</h2>
          <label>
            <input
              type="checkbox"
              value="Type 1"
              checked={filters.productType.includes('Type 1')}
              onChange={(e) => setFilters({ ...filters, productType: e.target.checked ? [...filters.productType, 'Type 1'] : filters.productType.filter(type => type !== 'Type 1') })}
            />
            Type 1
          </label>
          <label>
            <input
              type="checkbox"
              value="Type 2"
              checked={filters.productType.includes('Type 2')}
              onChange={(e) => setFilters({ ...filters, productType: e.target.checked ? [...filters.productType, 'Type 2'] : filters.productType.filter(type => type !== 'Type 2') })}
            />
            Type 2
          </label>
          <label>
            <input
              type="checkbox"
              value="Type 3"
              checked={filters.productType.includes('Type 3')}
              onChange={(e) => setFilters({ ...filters, productType: e.target.checked ? [...filters.productType, 'Type 3'] : filters.productType.filter(type => type !== 'Type 3') })}
            />
            Type 3
          </label>
          <label>
            <input
              type="checkbox"
              value="Type 4"
              checked={filters.productType.includes('Type 4')}
              onChange={(e) => setFilters({ ...filters, productType: e.target.checked ? [...filters.productType, 'Type 4'] : filters.productType.filter(type => type !== 'Type 4') })}
            />
            Type 4
          </label>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Search</h2>
          <input
            type="text"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            placeholder="Search products..."
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>
      </div>
      <div className="w-full md:w-3/4 p-4 flex flex-wrap">
        {filteredProducts.map(product => (
          <div key={product.id} className="w-full md:w-1/2 p-2">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
              <h3 className="text-lg font-bold mb-1">{product.name}</h3>
              <p className="text-gray-600 mb-1">{product.price}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterChoice;