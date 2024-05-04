import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Error from '../handlers/Error'
import Spinner from '../handlers/Spinner'
import { registerUser } from '../auth/authActions'

const Register = () => {
  const [customError, setCustomError] = useState(null)

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  )
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    // redirect authenticated user to profile screen
    if (userInfo) navigate('/user-profile')
    // redirect user to login page if registration was successful
    if (success) navigate('/login')
  }, [navigate, userInfo, success])

  const submitForm = (data) => {
    // check if passwords match
    if (data.password !== data.confirmPassword) {
      setCustomError('Password mismatch')
      return
    }
    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase()

    dispatch(registerUser(data))
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100">
      <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg md:mr-6 mb-6 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit(submitForm)} className="w-full">
          <input type="text" placeholder="Full Name" className="w-full border border-gray-300 p-2 rounded-lg mb-3" {...register('fullname')} required />
          <input type="email" placeholder="Email" className="w-full border border-gray-300 p-2 rounded-lg mb-3" {...register('email')} required />
          <input type="password" placeholder="Password" className="w-full border border-gray-300 p-2 rounded-lg mb-3" {...register('password')} required />
          <input type="password" placeholder="Confirm Password" className="w-full border border-gray-300 p-2 rounded-lg mb-3" {...register('confirmPassword')} required />
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
        <p className="text-gray-600">Already have an account? <a href="/login" className="text-blue-600">Login here</a></p>
      </div>
    </div>
  )
}

export default Register
