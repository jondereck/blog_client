
import React, { useEffect, useState } from "react";
import {Link } from "react-router-dom"
// import {format} from "date-fns"

const Home = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/post`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Error fetching posts:", error);
      });
  }, []);
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    };
    const formattedDate = date.toLocaleString("en-US", options);
    return formattedDate;
  };
  

  
  
  return (
    <div>
     <div name='home' className="mx-auto max-w-screen-2xl p-4 flex flex-col justify-center w-full h-full pt-20">
  {posts.map(({ _id, title, summary, createdAt, cover, author }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" key={_id}>
      <div className="flex flex-col justify-center">
        <Link to={`/post/${_id}`}>
          <h2 className="text-4xl pt-4 font-bold text-gray-800 hover:text-blue-500 transition duration-300">{title}</h2>
        </Link>
        <div className="flex items-center justify-between">
          <p className="font-bold text-sm pr-4 text-gray-700">{author.username}</p>
          <time className="text-sm text-gray-500">{formatDate(createdAt)}</time>
        </div>
        <p className="md:text-xl my-2 text-sm text-gray-700">{summary}...</p>
      </div>
      <Link to={`/post/${_id}`}>
        <div className="flex items-center justify-center">
          <img className="h-100 w-100 p-10 object-cover rounded-md" src={`${process.env.REACT_APP_API_URL}/${cover}`} alt="" />
        </div>
      </Link>
    </div>
  ))}
</div>

    </div>
  );
};

export default Home;
