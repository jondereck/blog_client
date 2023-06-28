import React, { useContext, useEffect, useState } from "react";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import SuccessMessage from "./SuccessMessage";
import { SlLogin, SlLogout } from "react-icons/sl";
import { BsPersonAdd } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";


const Navbar = ({ darkMode, setDarkMode }) => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  // const [errors, setErrors] = useState('');
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/profile`, {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  async function logout() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/logout`, {
      credentials: "include",
      method: "POST",
    });

    if (response.ok) {
      setSuccess("Succesfully logout");
      setTimeout(() => {
        setUserInfo(null);
        window.location.href = `${
          window.location.origin
        }/?refresh=${Date.now()}`;
      }, 1000);
    }
  }
  const username = userInfo?.username;
  return (
    <div className="w-full h-20 px-4 text-black dark:text-white bg-white dark:bg-black duration-500 dark:duration-500 fixed">
      <div className="mx-auto py-4 flex justify-between items-center">
        <Link to="">
          <h2 className="text-4xl font-light font-nunito">Blog</h2>
        </Link>

        <div className="flex items-center space-x-4">
          {username ? (
            <>
              <div className="flex justify-end ">
                <Link to="/create" className="hover:scale-105 duration-200 ">
                  <button>
                    <span className="px-4">
                      <FiEdit size={20} className="inline-block" />
                      Create new post
                    </span>
                  </button>
                </Link>
                <button onClick={logout} className="hover:scale-105 duration-200">
                <span className="hidden sm:inline-block">
                  <SlLogout size={20} className="inline-block m-2" />
                  Logout
                </span>
                <span className="sm:hidden">
                  <SlLogout size={20} className="inline-block" />
                </span>
              </button>
              </div>
              
            </>
          ) : (
            <>
              <div className="flex justify-end ">
                <Link to="/login" className="hover:scale-105 duration-200">
                  <button>
                    <span>
                      <SlLogin size={20} className="inline-block m-2" />
                      Login
                    </span>
                  </button>
                </Link>
                <Link to="/signup" className="hover:scale-105 duration-200">
                <button>
                  <span>
                    <BsPersonAdd size={20} className="inline-block m-2" />
                    Sign up
                  </span>
                </button>
              </Link>
              </div>
              
            </>
          )}
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer"
          >
            {darkMode ? (
              <MdWbSunny size={25} className="text-2xl" />
            ) : (
              <MdNightsStay size={25} className="text-2xl" />
            )}
          </div>
        </div>

        <SuccessMessage success={success} />
      </div>
    </div>
  );
};

export default Navbar;
