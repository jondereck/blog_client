import React, { useContext, useEffect } from "react";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const Navbar = ({ darkMode, setDarkMode }) => {
  const {userInfo, setUserInfo} = useContext(UserContext);
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/profile`, {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  function logout() {
    fetch(`${process.env.REACT_APP_API_URL}/logout`, {
    credentials: 'include',
    method: 'POST'
    });
    setUserInfo(null)
  }
  const username = userInfo?.username
  return (
   <div className="w-full h-20 px-4 text-black dark:text-white bg-white dark:bg-black duration-500 dark:duration-500 fixed">
  <div className="mx-auto py-4 flex justify-between items-center">
    <Link to="">
      <h2 className="text-4xl font-bold">Blog</h2>
    </Link>

    <div className="flex items-center space-x-4">
      {username ? (
        <>
          <Link to="/create" className="hover:scale-105 duration-200">Create new post</Link>
          <p onClick={logout} className="hover:scale-105 duration-200">Logout</p>
        </>
      ) : (
        <>
          <Link to="/login" className="hover:scale-105 duration-200">
            Login
          </Link>
          <Link to="/signup" className="hover:scale-105 duration-200">
            Sign up
          </Link>
        </>
      )}
      <div onClick={() => setDarkMode(!darkMode)} className="cursor-pointer">
        {darkMode ? (
          <MdWbSunny size={30} className="text-2xl" />
        ) : (
          <MdNightsStay size={30} className="text-2xl" />
        )}
      </div>
    </div>
  </div>
</div>

  );
};

export default Navbar;