import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Error from '../handlers/Error';
import Spinner from '../handlers/Spinner';
import { registerUser } from '../auth/authActions';
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";



const Register = () => {
  const { loading, userInfo, error, success, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/user-dashboard'); // Redirect if already authenticated
    }
  }, [navigate, isAuthenticated]);

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'Password mismatch'
      });
      return;
    }
    dispatch(registerUser(data));
  };

  return (
    <div className="flex md:flex-row items-center justify-center h-screen bg-gray-100 pt-20">
      <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg md:mr-6 mb-6 md:mb-0"> {/* Removed transform and transition properties */}
        <div className="mx-auto max-w-md space-y-6"> 
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Register</h1>
            <p className="text-gray-500 dark:text-gray-400">Create your account to get started.</p>
          </div>
          <div className="space-y-4">
            {error && <Error message={error} />} 
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <div className="space-y-2">
                <label htmlFor="fullname" className="font-medium">Full Name</label>
                <input type="text" placeholder="Full Name" className="w-full border border-gray-300 p-2 rounded-lg" {...register('fullname', { required: 'Full Name is required' })} />
                {errors.fullname && <Error message={errors.fullname.message} />}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="font-medium">Email</label>
                <input type="email" placeholder="Email" className="w-full border border-gray-300 p-2 rounded-lg" {...register('email', { required: 'Email is required' })} />
                {errors.email && <Error message={errors.email.message} />}
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="font-medium">Password</label>
                <input type="password" placeholder="Password" className="w-full border border-gray-300 p-2 rounded-lg" {...register('password', { required: 'Password is required' })} />
                {errors.password && <Error message={errors.password.message} />}
              </div>
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="font-medium">Confirm Password</label>
                <input type="password" placeholder="Confirm Password" className="w-full border border-gray-300 p-2 rounded-lg" {...register('confirmPassword', { required: 'Confirm Password is required' })} />
                {errors.confirmPassword && <Error message={errors.confirmPassword.message} />}
              </div>
              <button type="submit" className="w-full bg-black text-white py-2 rounded-lg" disabled={loading}>
                {loading ? <Spinner /> : 'Register'}
              </button>
            </form>
          </div>
          <div>
            <div className="text-center text-sm">
              By registering, you are agreeing to the
              <Link className="underline" to="/terms&services">
                terms & services
              </Link>
              provided by Atlas Fitness.
            </div>
            <hr className="my-8" />
            <div className="text-center text-sm">
              Already have an account?
              <Link className="underline" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">Register with</h2>
        <div className="grid grid-cols-3 gap-4">
          <button className="flex items-center justify-center border border-gray-300 rounded-lg py-2 px-4">
          <FaGoogle /> 
          </button>
          <button className="flex items-center justify-center border border-gray-300 rounded-lg py-2 px-4">
            <FaApple /> 
          </button>
          <button className="flex items-center justify-center border border-gray-300 rounded-lg py-2 px-4">
            <FaFacebook/>
          </button>
        </div>
      </div>
    </div>
  );
};


export default Register;
