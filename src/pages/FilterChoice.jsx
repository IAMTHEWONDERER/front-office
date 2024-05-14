import React, { useState, useEffect } from 'react';

const FilterChoice = () => {
  const [filters, setFilters] = useState({
    price: [],
    distance: 0,
    productType: [],
    search: '',
    disableDistance: false,
    sortBy: 'default',
    displayFilter: 'grid',
  });

  const [products, setProducts] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Fetch user's geolocation information
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
      },
      error => {
        console.error('Error getting user location:', error);
      }
    );
  }, []);

  const fetchProductsFromBackend = async () => {
    // Simulating API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Dummy products for demonstration
    const dummyProducts = [
      { id: 1, name: 'Product 1', price: 10, latitude: 33.589886, longitude: -7.603869, image: 'https://source.unsplash.com/random/300x200' }, // Casablanca
      { id: 2, name: 'Product 2', price: 20, latitude: 34.264570, longitude: -6.570844, image: 'https://source.unsplash.com/random/300x200' }, // Kenitra
      { id: 3, name: 'Product 3', price: 50, latitude: 35.759465, longitude: -5.833954, image: 'https://source.unsplash.com/random/300x200' }, // Tangier
      { id: 4, name: 'Product 4', price: 35, latitude: 34.020882, longitude: -6.841650, image: 'https://source.unsplash.com/random/300x200' }, // Rabat
    ];
    setProducts(dummyProducts);
  };

  useEffect(() => {
    fetchProductsFromBackend();
  }, []); // Fetch products on component mount

  const handleDisableDistanceFilter = () => {
    setFilters({ ...filters, disableDistance: true, distance: 0 });
  };

  const calculateDistance = (latitude1, longitude1, latitude2, longitude2) => {
    const R = 6371e3; // metres
    const φ1 = (latitude1 * Math.PI) / 180; // φ, λ in radians
    const φ2 = (latitude2 * Math.PI) / 180;
    const Δφ = ((latitude2 - latitude1) * Math.PI) / 180;
    const Δλ = ((longitude2 - longitude1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // in metres
    return distance / 1000; // in kilometres
  };

  const filteredProducts = products.filter(product => {
    // Filter by search text
    if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }

    // Filter by price
    if (filters.price.length > 0 && !filters.price.includes(product.price)) {
      return false;
    }

    // Filter by product type
    if (filters.productType.length > 0 && !filters.productType.some(type => product.name.toLowerCase().includes(type.toLowerCase()))) {
      return false;
    }

    // Filter by distance
    if (filters.distance > 0 && userLocation) {
      const distance = calculateDistance(
        userLocation.latitude,
        userLocation.longitude,
        product.latitude,
        product.longitude
      );
      if (distance > filters.distance) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="w-full md:w-1/4 p-4 mt-20 bg-gray-100 rounded-lg shadow-lg">
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
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Price Filter</h2>
          {[10, 15, 20, 25].map(price => (
            <label key={price} className="flex items-center mb-2">
              <input
                type="checkbox"
                value={price}
                checked={filters.price.includes(price)}
                onChange={(e) => setFilters({ ...filters, price: e.target.checked ? [...filters.price, price] : filters.price.filter(p => p !== price) })}
                className="mr-2"
              />
              ${price}
            </label>
          ))}
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Product Type Filter</h2>
          {['Type 1', 'Type 2', 'Type 3', 'Type 4'].map(type => (
            <label key={type} className="flex items-center mb-2">
              <input
                type="checkbox"
                value={type}
                checked={filters.productType.includes(type)}
                onChange={(e) => setFilters({ ...filters, productType: e.target.checked ? [...filters.productType, type] : filters.productType.filter(t => t !== type) })}
                className="mr-2"
              />
              {type}
            </label>
          ))}
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Distance Filter</h2>
          {!filters.disableDistance && (
            <>
              <input
                type="range"
                min="0"
                max="200"
                value={filters.distance}
                onChange={(e) => setFilters({ ...filters, distance: parseInt(e.target.value) })}
                className="w-full text-red"
              />
              <p>Distance: {filters.distance} km</p>
            </>
          )}
          {filters.disableDistance && (
            <button onClick={handleDisableDistanceFilter} className="bg-red-500 text-white py-2 px-4 rounded-lg">Enable Distance Filter</button>
          )}
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Sort By</h2>
          <select
            value={filters.sortBy}
            onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
            className="w-full border border-gray-300 p-2 rounded-lg"
          >
            <option value="default">Default</option>
            <option value="price">Price</option>
            <option value="distance">Distance</option>
          </select>
        </div>
      </div>

      <div className="w-full md:w-3/4 p-4 flex flex-wrap mt-20">
        {filteredProducts.map(product => (
          <div key={product.id} className="w-full md:w-1/2 p-2">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
              <h3 className="text-lg font-bold mb-1">{product.name}</h3>
              <p className="text-gray-600 mb-1">{product.price} Dh </p>
              <p className="text-gray-600 mb-1">Distance: {userLocation ? calculateDistance(userLocation.latitude, userLocation.longitude, product.latitude, product.longitude).toFixed(2) : 'Unknown'} km</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterChoice;
