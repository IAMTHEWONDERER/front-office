import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilterChoice = () => {
  const [filters, setFilters] = useState({
    price: [],
    distance: 0,
    search: '',
    disableDistance: false,
    sortBy: 'default',
    displayFilter: 'grid',
  });

  const [coaches, setCoaches] = useState([]);
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
  const fetchCoachesFromBackend = async () => {
    try {
      const response = await axios.get('http://localhost:3040/coaches/getallcoaches');
      setCoaches(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching coaches:', error);
    }
  };

  useEffect(() => {
    fetchCoachesFromBackend();
  }, []); // Fetch coaches on component mount

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

  const filteredCoaches = coaches.filter(coach => {
    // Filter by search text
    if (filters.search && !coach.fullname.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    } 

    // Filter by price
    if (filters.price.length > 0 && !filters.price.includes(coach.price)) {
      return false;
    }

    // Filter by distance
    if (filters.distance > 0 && userLocation) {
      const distance = calculateDistance(
        userLocation.latitude,
        userLocation.longitude,
        coach.latitude,
        coach.longitude
      );
      if (distance > filters.distance) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="flex flex-col md:flex-row font-koulen">
      <div className="w-full md:w-1/4 p-4 mt-20 bg-gray-100 rounded-lg shadow-lg">
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Search</h2>
          <input
            type="text"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            placeholder="Search coaches..."
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Price Filter</h2>
          {[149, 199, 249, 299].map(price => (
            <label key={price} className="flex items-center mb-2">
              <input
                type="checkbox"
                value={price}
                checked={filters.price.includes(price)}
                onChange={(e) => setFilters({ ...filters, price: e.target.checked ? [...filters.price, price] : filters.price.filter(p => p !== price) })}
                className="mr-2"
              />
              {price} Dh
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
        {filteredCoaches.map(coach => (
          <div key={coach.email} className="w-full md:w-1/2 p-2">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <img src={coach.image} alt={coach.fullname} className="w-full h-40 object-cover mb-2" />
              
              <h3 className="text-lg font-bold mb-1">{coach.fullname}</h3>
              <p className="text-gray-600 mb-1">Price: {coach.price} Dh </p>
              <p className="text-gray-600 mb-1">Distance: {userLocation ? calculateDistance(userLocation.latitude, userLocation.longitude, coach.latitude, coach.longitude).toFixed(2) : 'Unknown'} km</p>
              <div className='flex justify-center items-center'>
              <button className="bg-black text-white px-4 py-2 rounded mr-4 hover:bg-gray-900 transition duration-300 ease-in-out">Book Now</button>
              <button className="bg-red-600 hover:bg-red-900 text-white px-4 py-2 rounded transition duration-300 ease-in-out">View Profile</button>
              </div>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterChoice;

