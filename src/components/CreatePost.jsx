import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";
import Editor from "../Editor";
import ErrorMessage from "./ErrorMessage";
import FormError from "./FormError";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState("");

  async function createNewPost(e) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("file", files[0]);
    data.set("content", content);

    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URL}/post`, {
      method: "POST",
      body: data,
      credentials: "include",
    });

    // console.log(await response.json())
    if (response.ok) {
      setSuccess("Successfully created post");
      setTimeout(() => {
        setRedirect(true);
      }, 2000);
      
      setErrors("");
    } else {
      setErrors('An error occurred during post creation.');
      const data = await response.json();
      setErrors(data.errors || {});
      
    }
  }
  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="h-screen w-full">
      <div
        className="mx-auto max-w-screen-lg p-4 flex flex-col justify-center 
        w-full h-full items-center"
      >
        <div className="flex justify-center items-center mt-20 " >
          <form
            encType="multipart/form-data"
            onSubmit={createNewPost}
            className="flex flex-col w-full"
          >
            <input
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="title"
              placeholder="Title"
            />
            <FormError  error={errors.title} />

            <input
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none mt-2"
              type="summary"
              onChange={(e) => setSummary(e.target.value)}
              value={summary}
              placeholder="Summary"
            />
            <FormError error={errors.summary} />

            <input
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none mt-2"
              type="file"
              onChange={(e) => setFiles(e.target.files)}
            />
            <FormError error={errors.cover}/>
            <Editor onChange={setContent} value={content} />
            <FormError error={errors.content}/>
            <button className="p-2 mt-4 bg-gradient-to-r from-cyan-500 to-blue-500">
              Create post
            </button>
          </form>
        </div>
        <ErrorMessage success={success}/>
      </div>
    </div>
  );
};

export default CreatePost;
