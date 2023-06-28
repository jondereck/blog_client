import React, { useContext, useState } from "react";
import {Navigate} from "react-router-dom"
import { UserContext } from "../UserContext";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import imgLogin from "../assets/img/login.png";


const Login = () => {

  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);


  async function login(e) {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      
    });

    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        setSuccess("Login success");
        setTimeout(() => {
         setRedirect(true); 
        }, 1000);
         
      })
     
    } else { 
        const data = await response.json();
        if(data.error === 'User not found') {
          setError("User not found")
        } else {
          setError("Invalid username or password")
        }
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }


  return (
    <div className="h-screen w-full">
    <div className="mx-auto max-w-screen-lg p-4 flex flex-col justify-center w-full h-full items-center">
    <img src={imgLogin} alt="Example" className="w-32 h-32 sm:w-48 sm:h-48" />
      <div>
      

        <p className="text-4xl font-bold text-center my-8">Login</p>
        <p className="text-sm text-center p-4">Good to see you again</p>
      </div>
      <div className="flex justify-center items-center">
        <form className="flex flex-col w-full"  onSubmit={login}action="">
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
            Login
          </button>
        </form>
      </div>
    <ErrorMessage error={error} />
    <SuccessMessage success={success}/>
    </div>
  </div>
  
  );
};

export default Login;
 