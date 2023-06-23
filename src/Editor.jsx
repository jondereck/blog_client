import React from "react";
import ReactQuill from "react-quill";

const Editor = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = {
    formats: [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
    ],
  };
  return (
    <div className="flex bg-transparent">
    <div className="w-full max-h-96">
      <div className="overflow-auto max-h-full">
        <ReactQuill
          className="p-2 bg-transparent border-2 rounded-md focus:outline-none resize-none"
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
        />
      </div>
    </div>
  </div>
  
  

  );
};

export default Editor;
