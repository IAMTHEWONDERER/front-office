import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FilterChoice = () => {
  const [filters, setFilters] = useState({
    price: [],
    distance: 0,
    search: '',
    disableDistance: false,
    sortBy: 'default',
    displayFilter: 'grid',
    availability: 'all',
  });

  const [coaches, setCoaches] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
      },
      error => {
        if (error.code === 1) {
          setLocationError('User denied Geolocation. Please enable location services in your browser settings.');
        } else {
          setLocationError('Error getting user location: ' + error.message);
        }
      }
    );
  }, []);

  const fetchCoachesFromBackend = async () => {
    try {
      const response = await axios.get('http://localhost:3111/coaches/getallcoaches');
      console.log('Fetched Coaches:', response.data);
      setCoaches(response.data);
    } catch (error) {
      console.error('Error fetching coaches:', error);
    }
  };

  useEffect(() => {
    fetchCoachesFromBackend();
  }, []);

  const handleDisableDistanceFilter = () => {
    setFilters({ ...filters, disableDistance: true, distance: 0 });
  };

  const calculateDistance = (latitude1, longitude1, latitude2, longitude2) => {
    const R = 6371e3;
    const φ1 = (latitude1 * Math.PI) / 180;
    const φ2 = (latitude2 * Math.PI) / 180;
    const Δφ = ((latitude2 - latitude1) * Math.PI) / 180;
    const Δλ = ((longitude2 - longitude1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;
    return distance / 1000;
  };

  const filteredCoaches = coaches.filter(coach => {
    if (filters.search && !coach.fullname.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }

    if (filters.price.length > 0 && !filters.price.includes(coach.price)) {
      return false;
    }

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

    if (filters.availability !== 'all' && filters.availability !== coach.availability) {
      return false;
    }

    return true;
  });

  const handleBookNow = (coachId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      navigate(`/coach/${coachId}`);
    }
  };

  return (
    <div className="flex flex-col md:flex-row font-koulen">
      <div className="w-full md:w-1/4 p-4 mt-20 bg-gray-100 rounded-lg shadow-lg">
        {locationError && (
          <div className="mb-4 text-red-500">
            <p>{locationError}</p>
          </div>
        )}
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
          <h2 className="text-lg font-bold mb-2">Type of Service</h2>
          <select
            value={filters.availability}
            onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
            className="w-full border border-gray-300 p-2 rounded-lg"
          >
            <option value="all">Show All</option>
            <option value="All-in-one">All-in-one</option>
            <option value="online">online</option>
            <option value="In-person">In person</option>
          </select>
        </div>
      </div>
      <div className={`w-full ${filters.displayFilter === 'grid' ? 'md:w-3/4' : 'md:w-full'} p-4 mt-20`}>
        <div className={`grid grid-cols-1 ${filters.displayFilter === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : ''} gap-4`}>
          {filteredCoaches.map(coach => (
            <div key={coach._id} className="bg-white p-4 rounded-lg shadow-lg">
              <img src={coach.image.url} className="w-80 h-64 object-cover" alt="Coach profile" /><br />
              <h3 className="text-lg font-bold mb-2">{coach.fullname}</h3>
              <p className="mb-2">{coach.city}</p>
              <p className="mb-2">Price: {coach.price} Dh</p>
              <p className="mb-2">Availability: {coach.availability}</p>
              <div className="mb-2">
                {coach.sessions && typeof coach.sessions === 'object' ? (
                  Object.entries(coach.sessions).map(([key, value]) => (
                    <p key={key}>{`${key}: ${value}`}</p>
                  ))
                ) : (
                  <p>No sessions available</p>
                )}
              </div>
              <div className="flex justify-center items-center">
                <button className="bg-black text-white px-4 py-2 rounded mr-4 hover:bg-gray-900 transition duration-300 ease-in-out"
                onClick={() => handleBookNow(coach._id)}
                  >Book Now</button>

                <button
                  onClick={() => {
                    console.log('Navigating to coach profile with ID:', coach._id);
                    navigate(`/coach/${coach._id}`);
                  }}
                  className="bg-red-600 hover:bg-red-900 text-white px-4 py-2 rounded transition duration-300 ease-in-out"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterChoice;