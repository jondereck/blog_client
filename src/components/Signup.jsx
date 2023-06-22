import React, { useState } from 'react'
import ErrorMessage from './ErrorMessage';


const Signup = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  async function register(e) {
    e.preventDefault();
    const response = await fetch("API_PORT/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      // Registration successful
      setSuccess("Registration successful");
      setError("");
    } else {
      const data = await response.json();
      if (data.error) {
        // Validation errors occurred
        setError(data.error.join(", "));
      } else if (data.error === "Username already taken") {
        // Username is already taken
        setError("Username is already taken");
        
      } else if (data.error === "Username should be at least 4 characters long") {
        // Username is already taken
        setError("Username should be at least 4 characters long");
        
      }else if (data.error === "Password should contain at least one lowercase, uppercase letter, and  digit") {
        // Username is already taken
        setError("Password should contain at least one lowercase, uppercase letter, and  digit");
        
      }else {
        // Other registration error
        setError("Registration failed");
      }
    }
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
      
          <input
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           
            type="password"
            placeholder="Password"
          />
          <button
            className="p-2 bg-gradient-to-r from-cyan-500 to to-blue-500 text-white rounded-md"
            
            type="submit"
          >
            Register
          </button><ErrorMessage error={error} success={success}/>
        </form>
      </div>
      

    </div>
  </div>
  )
}

export default Signup