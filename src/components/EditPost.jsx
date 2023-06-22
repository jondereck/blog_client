import React, { useEffect, useState } from "react";

import "react-quill/dist/quill.snow.css";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../Editor";
import ErrorMessage from "./ErrorMessage";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/post/` + id)
      .then((response) => response.json())
      .then((postInfo) => {
        setTitle(postInfo.title);
        setContent(postInfo.content);
        setSummary(postInfo.summary);
      })
      .catch((error) => {
        console.log('Error fetching post:', error);
      });
  }, []);
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

    const response = await fetch(`${process.env.REACT_APP_API_URL}/post`, {
      method: 'PUT',
      body: data,
      credentials: 'include'
    });
    if (response.ok) {
      setRedirect(true);
    }else {
      const errorData  = await response.json()
      if (errorData.error === 'You are not the author') {
        setError('You are not the author');
      } else if (errorData.error === 'Title must have more than 4 characters long') {
        setError('Title must have more than 4 characters long');
      } else if (errorData.error === 'Summary must have more than 20 characters long') {
        setError('Summary must have more than 20 characters long');
      } else if (errorData.error === 'Content must have more than 20 characters long') {
        setError('Content must have more than 20 characters long');
      } else {
        setError('An error occurred');
      }
      

    }
  }
  if (redirect) {
    return <Navigate to={"/post/" + id} />;
  }

  return (
    <div className="h-screen w-full">
      <div
        className="mx-auto max-w-screen-lg p-4 flex flex-col justify-center 
    w-full h-full items-center"
      >
        <div className="flex justify-center items-center">
          <form
            enctype="multipart/form-data"
            onSubmit={updatePost}
            className="flex flex-col w-full"
          >
            <input
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none mb-4"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="title"
              placeholder="Title"
            />
            <input
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none mb-4"
              ve
              they
              can
              monetize
              the
              climate
              crisis
              type="summary"
              onChange={(e) => setSummary(e.target.value)}
              value={summary}
              placeholder="Summary"
            />
            <input
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none mb-4"
              type="file"
              onChange={(e) => setFiles(e.target.files)}
            />
            <Editor onChange={setContent} value={content} />

            <button className="p-2 mt-4 bg-gradient-to-r from-cyan-500 to-blue-500">
              Update post
            </button>
          </form>
          <ErrorMessage error={error}/>
          
        </div>
      </div>
    </div>
  );
};

export default EditPost;
