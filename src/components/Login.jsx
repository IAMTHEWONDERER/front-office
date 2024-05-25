import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import backimage from '../imgs/backregistercoach.jpg';
import { useEffect , useState } from 'react';
import {jwtDecode} from 'jwt-decode';

export default function Login() {
  const { loading, userInfo, error } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();
  const [loginError, setLoginError] = useState('');

  useEffect(() => {

    if (userInfo) {
      navigate('/homepage');
    }
  }, [navigate, userInfo])

  const submitForm = async (data) => {
    try {
      const userResponse = await fetch('http://localhost:3111/api/loginuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),       
      });

      if (userResponse.ok) {
        const userResult = await userResponse.json();
        console.log('User login successful:', userResult);
        const token = userResult.token;
        localStorage.setItem('token', token);
        if (userResult.success) {
          const decodedToken = jwtDecode(token);
          console.log(decodedToken.weight);
          if(decodedToken.weight === null){
            navigate('/userforum');
          }else {
            navigate('/findacoach');
          }
          return; 
        } else {
          setLoginError('Wrong email or password');
        }
      } else {
        setLoginError('Wrong email or password');
      }

      const coachResponse = await fetch('http://localhost:3111/api/logincoach', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (coachResponse.ok) {
        const coachResult = await coachResponse.json();
        const token = coachResult.token;
        localStorage.setItem('token', token);
        navigate('/coach/dashboard');
        if (coachResult.success) {
          navigate('/coach/dashboard');
        } else {
          setLoginError('Wrong email or password');
        }
      } else {
        setLoginError('Wrong email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };  

  const backgroundStyle = {
    backgroundImage: `url(${backimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }; 

  return (
    <div className="relative min-h-screen flex items-center justify-center" style={backgroundStyle}>
      <div className="bg-opacity-45 mt-10 font-koulen backdrop-blur-md bg-gray-200 rounded-lg px-8 py-12 sm:px-12 mx-auto z-10">
        <div>
          <h2 className="text-center text-4xl tracking-tight text-white mb-8">SIGN IN</h2>
        </div>
        <form onSubmit={handleSubmit(submitForm)} className="space-y-8 space-x-32" method="POST">
          <div>
            {loginError && <p className="text-red-800 text-center text-lg mb-4">{loginError}</p>}
            <div>
              <label className="block text-lg font-medium text-white" htmlFor="email">
                Email address
              </label>
              <div className="mt-1">
                <input
                  autoComplete="email"
                  className="block w-full font-sans appearance-none mb-8 rounded-md border border-gray-300 px-2 py-1 placeholder:font-sans placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] text-lg"
                  id="email"
                  placeholder='Enter your email'
                  name="email"
                  required
                  type="email"
                  {...register('email', { required: true })}
                />
              </div>
            </div>
            <div>
              <label className="block text-lg font-medium text-white" htmlFor="password">
                Password
              </label>
              <div className="mt-1">
                <input
                  autoComplete="password"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-1 placeholder:font-sans placeholder-gray-400 shadow-sm focus:border-[#ff0000] focus:outline-none focus:ring-[#ff0000] text-lg"
                  id="password"
                  placeholder='Enter your Password'
                  name="password"
                  required
                  type="password"
                  {...register('password', { required: true })}
                />
              </div>
            </div>
          </div>
        <div className="flex flex-col items-center mt-6 text-center text-lg text-black dark:text-gray-400">
          <button
            className="bg-red-600 hover:bg-red-900 mr-36 text-white px-4 py-2 rounded transition duration-300 ease-in-out"
            type="submit"
          >
            Login
          </button>
          <div className='mr-32 mt-5 '>
             <p className='mr-3 inline-block'>Doesn't have an account?</p><a href="registercoach" className="underline">Register</a>
          </div>
        </div>
        </form>       
      </div>
    </div>
  )
  }
  