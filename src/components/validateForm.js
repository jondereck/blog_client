import React, { useState } from "react";

const useFormValidation = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const { username, password, summary, title, content } = formData;

    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    const passwordRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errors = {};

    if (!username || username.trim() === "") {
      errors.username = "Please enter a username.";
    } else if (!username.match(nameRegex)) {
      errors.username = "Name must be at least 3 characters long.";
    }

    if (!password || password.trim() === "") {
      errors.password = "Please enter a password.";
    } else if (!password.match(passwordRegex)) {
      errors.password = "Please enter a valid password.";
    }

    if (!summary || summary.trim() === "") {
      errors.summary = "Please enter a summary.";
    } else if (summary.length < 20) {
      errors.summary = "Summary must be at least 20 characters long.";
    }

    if (!title || title.trim() === "") {
      errors.title = "Please enter a title.";
    } else if (title.length < 4) {
      errors.title = "Title must be at least 4 characters long.";
    }

    if (!content || content.trim() === "") {
      errors.content = "Please enter content.";
    } else if (content.length < 20) {
      errors.content = "Content must be at least 20 characters long.";
    }

    return errors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Submit the form or perform other actions
      // ...
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return {
    formData,
    errors,
    handleSubmit,
    handleChange,
  };
};
export default useFormValidation;