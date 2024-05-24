import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from 'react-router-dom';
import Modal from '../components/bookingcomponent';
import StripeCheckout from "react-stripe-checkout";

const StarIcon = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="red"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <defs>
      <clipPath id="starClip">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </clipPath>
    </defs>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#ccc" />
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill={fill} clipPath="url(#starClip)" />
  </svg>
);

const CoachProfile = () => {
  const { id } = useParams();
  const [coach, setCoach] = useState(null);
  const [loading, setLoading] = useState(true);
  const [similarCoaches, setSimilarCoaches] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [numberSessions, setNumberSessions] = useState('');
  const [price, setPrice] = useState(0);
  const rating = 5;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCoachDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3111/coaches/getcoach/${id}`);
        setCoach(response.data);
      } catch (error) {
        console.error('Error fetching coach details:', error);
      }
    };

    const fetchSimilarCoaches = async () => {
      try {
        const response = await axios.get('http://localhost:3111/coaches/getallcoaches');
        const allCoaches = response.data;
        const filteredCoaches = allCoaches.filter(coach => coach.id !== id);
        const randomCoaches = filteredCoaches.sort(() => 0.5 - Math.random()).slice(0, 4);
        setSimilarCoaches(randomCoaches);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching similar coaches:', error);
      }
    };

    fetchCoachDetails();
    fetchSimilarCoaches();
  }, [id]);

  useEffect(() => {
    calculatePrice();
  }, [numberSessions, coach]);

  const calculatePrice = () => {
    if (!coach) return;

    let basePrice = 0;
    const sessions = parseInt(numberSessions, 10);

    if (coach.availability === 'online') {
      if (sessions === 3) {
        basePrice = 417;
      } else if (sessions === 6) {
        basePrice = 774;
      } else if (sessions === 12) {
        basePrice = 1428;
      } else if (sessions === 24) {
        basePrice = 2616;
      }
    } else if (coach.availability === 'In-person') {
      if (sessions === 3) {
        basePrice = 477;
      } else if (sessions === 6) {
        basePrice = 894;
      } else if (sessions === 12) {
        basePrice = 1668;
      } else if (sessions === 24) {
        basePrice = 3096;
      }
    } else if (coach.availability === 'All-in-one') {
      if (sessions === 3) {
        basePrice = 507;
      } else if (sessions === 6) {
        basePrice = 954;
      } else if (sessions === 12) {
        basePrice = 1788;
      } else if (sessions === 24) {
        basePrice = 3348;
      }
    }

    setPrice(basePrice);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!coach) {
    return <div>No coach found</div>;
  }

  const makePayment = async token1 => {
    const token = localStorage.getItem('token');
    const body = {
      token1,
      product: coach.fullname,
      price: price,
      image: coach.image,
    };
  
    const headers = {
      "content-type": "application/json",
      'Authorization': `Bearer ${token}`
    };
  
    try {
      const response = await fetch(`http://localhost:3111/api/postbooking/${id}`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      });
  
      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }
  
      const responseData = await response.json();
      if (responseData.sessionUrl) {
        
        window.location.href = responseData.sessionUrl;
      } else {
        console.error('Error: Session URL not found in response');
      }
    } catch (error) {
      console.error("ERROR", error);
      
    }
  };
  

  return (
    <main className={`flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 md:py-24 lg:py-32 ${isModalOpen ? '' : ''}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex items-center justify-center">
            <img
              alt="Coach profile"
              className="rounded-full w-64 h-64 object-cover"
              src={coach.image.url}
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">{rating}</span>
              <StarIcon fill="#ff0000" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{coach.fullname}</h1>
              <p className="text-lg">{coach.availability}</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">About {coach.fullname}</h2>
              <p className="text-base text-gray-700">{coach.bio}</p>
            </div>
            <div>
              <button 
                className="mt-4 px-4 py-2 font-bold bg-black text-white rounded-md shadow-md hover:bg-white hover:text-black focus:outline-none" 
                onClick={() => setIsModalOpen(true)}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16 lg:mt-20">
          <h2 className="text-2xl font-medium mb-6">Similar Coaches</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {similarCoaches.map((similarCoach) => (
              <div key={similarCoach._id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                <img
                  alt={`Coach ${similarCoach.fullname}`}
                  className="w-full h-48 object-cover"
                  height={300}
                  src={similarCoach.image.url}
                  style={{
                    aspectRatio: "300/400",
                    objectFit: "cover",
                  }}
                  width={300}
                />
                <div className="flex flex-col p-4 flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2">{similarCoach.fullname}</h3>
                    <p className="text-gray-500 mb-2">{similarCoach.availability}</p>
                    <div className="flex items-center gap-1 mb-4">
                      <span className="text-sm font-medium">{similarCoach.rating}</span>
                      <StarIcon fill="#ff0000" />
                    </div>
                    <p className="text-base text-gray-500 line-clamp-3">{similarCoach.bio}</p>
                  </div>
                  <div className="mt-4">
                    <Link to={`/coach/${similarCoach._id}`} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 block text-center">
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-medium mb-4">Book Coach</h2>
        <form onSubmit={(e) => { e.preventDefault(); }}>
          <div className="mb-4">
            <label className="block text-lg font-medium text-black" htmlFor="number_sessions">
              Number of Sessions
            </label>
            <div className="mt-5">
              <select
                className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-1 placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] text-lg"
                id="number_sessions"
                name="number_sessions"
                value={numberSessions}
                onChange={(e) => setNumberSessions(e.target.value)}
                required
              >
                <option value="">Number of Sessions</option>
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="24">24</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-lg text-center font-medium text-black">
              Price: {price} MAD
            </label>
            <input type="hidden" id='price' name='price' value={price} />
          </div>
          <div className="flex items-center justify-between">
            <StripeCheckout
              stripeKey="pk_test_51NDw4VFcu0DV17nt1fQ3FmVxogyvGO6PZ2e6iOzvTySgNVgbAb09x7cSIF99TPujLRqAvVITGhTNfgtvJr8AeVcX00iPdgiyfN"
              token={makePayment}
              amount={price * 100}
              name="Book Coach"
              currency="USD"
            >
              <button
                type="button"
                className="bg-black hover:bg-white hover:text-black border-lg border text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
              >
                Confirm Booking
              </button>
            </StripeCheckout>
            <button
              type="button"
              className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default CoachProfile;