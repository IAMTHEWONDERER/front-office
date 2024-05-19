import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const StarIcon = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
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

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const isHalfStar = rating % 1 !== 0;
  const remainingStars = 5 - filledStars - (isHalfStar ? 1 : 0);

};


const CoachProfile = () => {
  const { id } = useParams();
  const [coach, setCoach] = useState(null);
  const [loading, setLoading] = useState(true);
  const [similarCoaches, setSimilarCoaches] = useState([]);
  const rating = 5 // Example rating number

  useEffect(() => {
    const fetchCoachDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3040/coaches/getcoach/${id}`);
        setCoach(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching coach details:', error);
      }
    };

    const fetchSimilarCoaches = async () => {
      try {
        const response = await axios.get('http://localhost:3040/coaches/getallcoaches');
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!coach) {
    return <div>No coach found</div>;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex items-center justify-center">
            <img
              alt="Coach Profile"
              className="rounded-full w-64 h-64 object-cover"
              src="../imgs/allinone.jpg" // Replace with dynamic image if available
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <StarRating rating={rating} />
              <span className="text-lg font-medium">{rating}</span>
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
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16 lg:mt-20">
          <h2 className="text-2xl font-medium mb-6">Similar Coaches</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {similarCoaches.map((similarCoach) => (
              <div key={similarCoach._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt={`Coach ${similarCoach.fullname}`}
                  className="w-full h-48 object-cover"
                  height={300}
                  src="/placeholder.svg" // Replace with dynamic image if available
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{similarCoach.fullname}</h3>
                  <p className="text-gray-500 mb-2">{similarCoach.availability}</p>
                  <div className="flex items-center gap-1 mb-4">
                    <StarRating rating={similarCoach.rating} />
                    <span className="text-sm font-medium">{similarCoach.rating}</span>
                  </div>
                  <p className="text-base text-gray-500 line-clamp-3">{similarCoach.bio}</p>
                  <Link to={`/coach/${similarCoach._id}`} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 block text-center">
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoachProfile;
