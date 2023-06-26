import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

const Post = () => {
  const [postInfo, setPostInfo] = useState(null);
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);
  const { id } = useParams();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [redirect,  setRedirect] = useState(false)

  useEffect(() => {
    // get the id using useparams
    console.log(id);
    fetch(`${process.env.REACT_APP_API_URL}/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, [id]);

  function deletePost() {
    fetch(`${process.env.REACT_APP_API_URL}/post/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setSuccess(data.success);
            setTimeout(() => {
                  setRedirect(true)
            }, 3000);
          });
      
        } else {
          response.json().then((data) => {
            setTimeout(() => {
              setError(data.error);
            window.location.reload();
            }, 3000);
          });
        }
      })
      .catch((error) => {
        console.error("Failed to delete post:", error);
        setError("An error occurred while deleting the post");
      });
  }


  if (redirect) {
    return <Navigate to={"/"} />;
  }


  const showDeleteWarningDialog = () => {
    setShowDeleteWarning(true);
  };

  const hideDeleteWarningDialog = () => {
    setShowDeleteWarning(false);
  };

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

  if (!postInfo) return "";

  return (
    <div className="min-h-screen">
      <div className="items-center mx-auto max-w-screen-lg p-4 flex flex-col h-full w-full pt-20  ">
        <div className="">
          <h1 className="text-4xl font-bold mb-4">{postInfo.title}</h1>
          <div className="my-2 text-gray-400">
            <span className="font-bold">{postInfo.author.username}</span> |{" "}
            <span>{formatDate(postInfo.createdAt)}</span>
          </div>
          <div className="flex justify-end m-2">
            <Link to={`/edit/${postInfo._id}`}>
              <button className="hover:ring-2 px-2 hover:ring-blue-400 hover:ring-opacity-50   rounded-md mt-4">
                <span className="hidden sm:inline-block">
                  {" "}
                  <FiEdit className="inline-block mr-2" />
                  Edit this post
                </span>
                <span className="sm:hidden">
                  <FiEdit className="inline-block" />
                </span>
              </button>
            </Link>
            <button
              onClick={showDeleteWarningDialog}
              className="rounded-md mt-4 hover:ring-2 hover:ring-blue-400 hover:ring-opacity-50"
            >
              <span className="hidden sm:inline-block">
                <MdOutlineDeleteOutline className="inline-block mr-2" />
                Delete This Post
              </span>
              <span className="sm:hidden">
                <MdOutlineDeleteOutline className="inline-block" />
              </span>
            </button>
          </div>
        </div>
        <div className="  max-h-96 flex overflow-hidden">
          <img
            className="object-cover object-center mb-8"
            src={`${process.env.REACT_APP_API_URL}/${postInfo.cover}`}
            alt=""
          />
        </div>

        <div
          className=""
          dangerouslySetInnerHTML={{ __html: postInfo.content }}
        />

        {showDeleteWarning && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-md p-6">
              <p>Are you sure you want to delete this post?</p>
              <div className="flex justify-end mt-4">
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
                  onClick={deletePost}
                >
                  Delete
                </button>
                <button
                  className="px-4 py-2 bg-gray-400 text-white rounded-md"
                  onClick={hideDeleteWarningDialog}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}  <ErrorMessage  error={error}/>
      <SuccessMessage  success={success}/>
      </div>
    
    </div>
  );
};

export default Post;
