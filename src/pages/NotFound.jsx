// import logo from '../imgs/Atlas-black.png';
// import notFound from '../imgs/notFound.jpg';
// import {Link} from 'react-router-dom';

// const NotFound = () =>{
//   return(
//         <>
//           <div className="container not-found-page">
//             <div className="d-flex justify-content-center align-items-center not-found-text">
//               <div className="align-middle">
//                 <h4 className="font-weight-normal lead" id="desc">The page you requested was not found.</h4>              
//               </div>
//             </div>
//             <div className="row justify-content-center align-items-center">
//               <img
//                 style={{ width: "100%", height: "300px", objectFit: "contain" }}
//                 src={notFound}
//                 alt="Not-found"
//               />              
//               <Link to="/" className="col-md-3 col-sm-6 col-12 btn">
//                   Home
//               </Link>              
//             </div>
//           </div>
//         </>
//       )
// }

// export default NotFound;
import React from 'react';
import notFound from '../imgs/notFound.jpg';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg text-center">
        <img style={{ width: "100%", height: "300px", objectFit: "contain" }}
            src={notFound} className="w-full mb-4" />
        <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
        <p className="text-gray-600 mb-4">Sorry, the page you are looking for doesn't exist.</p>
        <a href="/" className="text-blue-500 hover:underline">Go back to Home</a>
      </div>
    </div>
  );
};

export default NotFound;