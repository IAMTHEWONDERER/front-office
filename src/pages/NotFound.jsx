import logo from '../imgs/Atlas-black.png';
import notFound from '../imgs/notFound.jpg';
import {Link} from 'react-router-dom';

const NotFound = () =>{
  return(
        <>
          <div className="container not-found-page">
            <div className="d-flex justify-content-center align-items-center not-found-text">
              <div className="align-middle">
                <h4 className="font-weight-normal lead" id="desc">The page you requested was not found.</h4>              
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <img
                style={{ width: "100%", height: "300px", objectFit: "contain" }}
                src={notFound}
                alt="Not-found"
              />              
              <Link to="/" className="col-md-3 col-sm-6 col-12 btn">
                  Home
              </Link>              
            </div>
          </div>
        </>
      )
}

export default NotFound;