import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Error from '../handlers/Error';
import Spinner from '../handlers/Spinner';
import { registerUser } from '../auth/authActions';

const Register = () => {
  const { loading, userInfo, error, success, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setError } = useForm();

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
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100">
      <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg md:mr-6 mb-6 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {error && <Error message={error} />}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <input type="text" placeholder="Full Name" className="w-full border border-gray-300 p-2 rounded-lg mb-3" {...register('fullname', { required: 'Full Name is required' })} />
          {errors.fullname && <Error message={errors.fullname.message} />}
          <input type="email" placeholder="Email" className="w-full border border-gray-300 p-2 rounded-lg mb-3" {...register('email', { required: 'Email is required' })} />
          {errors.email && <Error message={errors.email.message} />}
          <input type="password" placeholder="Password" className="w-full border border-gray-300 p-2 rounded-lg mb-3" {...register('password', { required: 'Password is required' })} />
          {errors.password && <Error message={errors.password.message} />}
          <input type="password" placeholder="Confirm Password" className="w-full border border-gray-300 p-2 rounded-lg mb-3" {...register('confirmPassword', { required: 'Confirm Password is required' })} />
          {errors.confirmPassword && <Error message={errors.confirmPassword.message} />}
          <button type="submit" className="w-full bg-black text-white py-2 rounded-lg" disabled={loading}>
            {loading ? <Spinner /> : 'Register'}
          </button>
        </form>
      </div>
      <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg md:ml-6">
        <h2 className="text-2xl font-bold mb-4">Register with</h2>
        <div className="flex space-x-4 mb-4">
          <button className="bg-red-600 text-white py-2 px-4 rounded-lg">Google</button>
          <button className="bg-black text-white py-2 px-4 rounded-lg">Apple</button>
          <button className="bg-blue-800 text-white py-2 px-4 rounded-lg">Facebook</button>
        </div>
        <p className="text-gray-600">Already have an account? <Link to="/login" className="text-blue-600">Login here</Link></p>
      </div>
    </div>
  );
};

export default Register;
