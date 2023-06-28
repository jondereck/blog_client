import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../Editor";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [existingCover, setExistingCover] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/post/` + id)
      .then((response) => response.json())
      .then((postInfo) => {
        setTitle(postInfo.title);
        setContent(postInfo.content);
        setSummary(postInfo.summary);
        setExistingCover(postInfo.cover); // Set the existing cover image
      })
      .catch((error) => {
        console.log("Error fetching post:", error);
      });
  }, [id]);

  async function updatePost(e) {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id);
    if (files?.[0]) {
      data.set("file", files?.[0]);
    }

    fetch(`${process.env.REACT_APP_API_URL}/post`, {
      method: "PUT",
      body: data,
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setSuccess(data.success);
            setTimeout(() => {
              setRedirect(true);
            }, 2000);
          });
        } else {
          response.json().then((data) => {
            setError(data.error);
          });
        }
      })
      .catch((error) => {
        setError("An error occurred");
      });
  }

  if (redirect) {
    return <Navigate to={"/post/" + id} />;
  }

  return (
    <div className="h-screen w-full max-h-max px-4">
      <div className="mx-auto max-w-screen-lg p-4 flex flex-col justify-center w-full h-full items-center">
        <div className="flex justify-center items-center">
          <form
            enctype="multipart/form-data"
            onSubmit={updatePost}
            className="flex flex-col w-full"
          >
            {existingCover && (
              <div className="max-h-96 w-full flex items-center justify-center mb-4 mt-32">
                <img
                  className="h-auto max-h-96 max-w-full p-10 object-cover rounded-md"
                  src={`${process.env.REACT_APP_API_URL}/${existingCover}`}
                  alt=""
                />
              </div>
            )}

            <input
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none mb-4"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="title"
              placeholder="Title"
            />
            <input
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none mb-4"
              type="summary"
              onChange={(e) => setSummary(e.target.value)}
              value={summary}
              placeholder="Summary"
            />
            <input
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none mb-4"
              type="file"
              placeholder="Summary"
              onChange={(e) => setFiles(e.target.files)}
            />

            <Editor onChange={setContent} value={content} />

            <button className="p-2 mt-4 bg-gradient-to-r from-cyan-500 to-blue-500">
              Update post
            </button>
          </form>
          <ErrorMessage error={error} />
          <SuccessMessage success={success} />
        </div>
      </div>
    </div>
  );
};

export default EditPost;
