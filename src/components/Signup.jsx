import React, { useState } from 'react'
import ErrorMessage from './ErrorMessage';
import FormError from './FormError';
import { Navigate } from 'react-router-dom';
import SuccessMessage from './SuccessMessage';


const Signup = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [redirect, setRedirect] = useState(false);


  async function register(e) {
    e.preventDefault();
   fetch(`${process.env.REACT_APP_API_URL}/register`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if(response.ok) {
          response.json().then((data) => {
            setSuccess(data.success);
            setTimeout(() =>{
              setRedirect(true)
              console.log("redirecting to login");
            }, 2000);
          });
        } else {
          response.json().then((data) => {
            setError(data.error);
          });
        }
      })
  
  }

  if (redirect) {
    return <Navigate to={'/login'}/>
  }
  
  return (
    <div className="h-screen w-full">
    <div className="mx-auto max-w-screen-lg p-4 flex flex-col justify-center w-full h-full items-center">
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
          <FormError error={error.username}/>
          <input
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           
            type="password"
            placeholder="Password"
          /> <FormError error={error.password}/>
          <button
            className="p-2 bg-gradient-to-r from-cyan-500 to to-blue-500 text-white rounded-md"
            
            type="submit"
          >
            Register
          </button><ErrorMessage error={error} />
          <SuccessMessage success={success}/>
        </form>
      </div>
      

    </div>
  </div>
  )
}

export default Signup