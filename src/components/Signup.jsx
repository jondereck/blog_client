import React, { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import FormError from './FormError';
import { Navigate } from 'react-router-dom';
import SuccessMessage from './SuccessMessage';
import imgSignup from '../assets/img/singup.png';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function register(e) {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        const data = await response.json();
        setSuccess(data.success);
        setTimeout(() => {
          setRedirect(true);
          console.log('Redirecting to login');
        }, 2000);
      } else {
        const data = await response.json();
        setError(data.errors || {});
        
      }
    } catch (error) {
      setError({ error: 'Registration failed' });
    }
  }
  
  if (redirect) {
    return <Navigate to={'/login'} />;
  }

  return (
    <div className="h-screen w-full">
      <div className="mx-auto max-w-screen-lg p-4 flex flex-col justify-center w-full h-full items-center">
        <img src={imgSignup} alt="Example" className="w-32 h-32 sm:w-48 sm:h-48" />
        <div>
          <p className="text-4xl font-bold text-center my-8">Sign Up</p>
          <p className="text-sm text-center p-4">Let's create a new journey</p>
        </div>
        <div className="flex justify-center items-center">
          <form className="flex flex-col w-full" onSubmit={register} action="">
            <input
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none mb-4"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
            />
            <FormError error={error.username} />
            <input
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <FormError error={error.password} />
            <button className="p-2 bg-gradient-to-r from-cyan-500 to to-blue-500 text-white rounded-md" type="submit">
              Register
            </button>
            <ErrorMessage error={error.username} />
            <SuccessMessage success={success} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;