import React from 'react';

const CoachProfile = () => {
  const rating = 2.5 ; // Example rating number

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex items-center justify-center">
            <img
              alt="Coach Profile"
              className="rounded-full w-64 h-64 object-cover"
              src="../imgs/allinone.jpg"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <StarRating rating={rating} />
              <span className="text-lg font-medium">{rating}</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold">Sarah Johnson</h1>
              <p className="text-lg">Life Coach</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">About Sarah</h2>
              <p className="text-base text-gray-700">
                Sarah is a certified life coach with over 10 years of experience helping individuals achieve their
                personal and professional goals. She specializes in mindfulness, goal-setting, and work-life balance.
              </p>
              <p className="text-base text-gray-700">
                With a background in psychology and a passion for personal development, Sarah has helped countless
                clients overcome obstacles, find clarity, and create the life they truly desire. Her holistic approach
                combines practical strategies with a deep understanding of the human experience, empowering her clients
                to make lasting, positive changes.
              </p>
              <p className="text-base text-gray-700">
                Sarah is known for her empathetic listening, insightful guidance, and unwavering support. She believes
                that everyone has the potential for growth and transformation, and she is dedicated to helping her
                clients unlock their full potential.
              </p>
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
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                alt="Coach 1"
                className="w-full h-48 object-cover"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">John Doe</h3>
                <p className="text-gray-500  mb-2">Career Coach</p>
                <div className="flex items-center gap-1 mb-4">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <span className="text-sm font-medium">4.3</span>
                </div>
                <p className="text-base text-gray-500 line-clamp-3">
                  John is a highly experienced career coach who has helped countless individuals find their dream jobs
                  and achieve their professional goals. With a deep understanding of the job market and a passion for
                  personal development, John guides his clients through every step of the career journey.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                alt="Coach 2"
                className="w-full h-48 object-cover"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
                <p className="text-gray-500  mb-2">Wellness Coach</p>
                <div className="flex items-center gap-1 mb-4">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <span className="text-sm font-medium">4.7</span>
                </div>
                <p className="text-base text-gray-500  line-clamp-3">
                  Jane is a holistic wellness coach who helps her clients achieve optimal physical, mental, and
                  emotional well-being. With expertise in nutrition, mindfulness, and stress management, Jane empowers
                  her clients to make sustainable lifestyle changes and live their best lives.
                </p>
              </div>
            </div>
            <div className="bg-white  rounded-lg shadow-md overflow-hidden">
              <img
                alt="Coach 3"
                className="w-full h-48 object-cover"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Alex Johnson</h3>
                <p className="text-gray-500 ">Relationship Coach</p>
                <div className="flex items-center gap-1 mb-4">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <span className="text-sm font-medium">5.0</span>
                </div>
                <p className="text-base text-gray-500 line-clamp-3">
                  Alex is a highly sought-after relationship coach who specializes in helping individuals and couples
                  navigate the complexities of interpersonal relationships. With a deep understanding of human dynamics
                  and a compassionate approach, Alex guides his clients towards healthier, more fulfilling
                  relationships.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                alt="Coach 4"
                className="w-full h-48 object-cover"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Emily Davis</h3>
                <p className="text-gray-500  mb-2">Executive Coach</p>
                <div className="flex items-center gap-1 mb-4">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <span className="text-sm font-medium">4.5</span>
                </div>
                <p className="text-base text-gray-500 line-clamp-3">
                  Emily is an experienced executive coach who helps leaders and high-performing professionals reach new
                  heights in their careers. With a focus on strategic thinking, leadership development, and work-life
                  balance, Emily empowers her clients to achieve their professional goals and unlock their full
                  potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

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
    
    return (
      <div className="flex items-center">
        {[...Array(filledStars)].map((_, index) => (
          <StarIcon key={index} fill="#FFD700" />
        ))}
        {isHalfStar && <StarIcon key="half" fill="#FFD700" />}
        {[...Array(remainingStars)].map((_, index) => (
          <StarIcon key={`empty-${index}`} fill="#ccc" />
        ))}
      </div>
    );
  };
  export default CoachProfile;
  