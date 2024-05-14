import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../auth/authActions';
import Error from '../handlers/Error';
import Spinner from '../handlers/Spinner';

const Login = () => {
  const { loading, userInfo, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate('/user-dashboard');
    }
  }, [navigate, userInfo]);

  const submitForm = async (data) => {
    try {
      const userResponse = await fetch('http://localhost:3111/api/loginuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),       
      });
  
      const userResult = await userResponse.json();
      
      if (userResponse.ok) {
        if (userResult.success) {
          console.log('User login successful:', userResult);
          navigate('/user-dashboard');
          return; 
        } else {
          console.error('Login error:', 'Invalid login data');
        }
      } else {
        console.error('Login error:', 'Invalid login data');
      }
      
      const coachResponse = await fetch('http://localhost:3111/api/logincoach', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const coachResult = await coachResponse.json();
  
      if (coachResponse.ok) {
        if (coachResult.success) {
          console.log('Coach login successful:', coachResult);
          navigate('/coach-dashboard');
        } else {
          console.error('Login error:', 'Invalid login data');
        }
      } else {
        console.error('Login error:', 'Invalid login data');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };  

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100">
      <div className="md:w-1/2 p-6">
        <h2 className="text-2xl font-bold mb-4">Login Into Atlas</h2>
        <form onSubmit={handleSubmit(submitForm)} className="w-full">
          {error && <Error>{error}</Error>}
          <input
            type="email"
            className="w-full border border-gray-300 p-2 rounded-lg mb-2"
            placeholder="Email"
            {...register('email')}
            required
          />
          <input
            type="password"
            className="w-full border border-gray-300 p-2 rounded-lg mb-2"
            placeholder="Password"
            {...register('password')}
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg">
            {loading ? <Spinner /> : 'Login'}
          </button>
        </form>
      </div>
      <div className="md:w-1/2 p-6">
        <h2 className="text-2xl font-bold mb-4">Login with Social Accounts</h2>
        <button className="w-full bg-red-800 text-white p-2 rounded-lg mb-2">Login with Google</button>
        <button className="w-full bg-black text-white p-2 rounded-lg mb-2">Login with Apple</button>
        <button className="w-full bg-blue-900 text-white p-2 rounded-lg mb-2">Login with Facebook</button>
        <p className="text-center text-gray-600">Don't have an account? <a href="/register" className="text-blue-500">Register here</a></p>
      </div>
    </div>
  );
};

export default Login;
