import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const ErrorMessage = ({ error, success }) => {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setDismissed(false); // Reset the dismissed state whenever there is a new error or success message
  }, [error, success]);

  const handleDismiss = () => {
    setDismissed(true);
  };

  if ((!error && !success) || dismissed) {
    return null;
  }

  const alertClassName = error ? "bg-red-500" : "bg-green-500";
  const borderClassName = error ? "border-red-400 bg-red-100 text-red-700" : "border-green-400 bg-green-100 text-green-700";
  const containerClassName = "fixed justify-center bottom-4 sm:bottom-4  sm:right-4 sm:right-auto";




  return (
    <div className={containerClassName}>
      <div className={`${alertClassName} text-white font-bold rounded-t px-4 py-2 flex items-center justify-between`}>
        <span>{error ? "Error" : "Success"}</span>
        <button
          className="text-white hover:text-gray-100"
          onClick={handleDismiss}
        >
          <AiOutlineClose className="h-4 w-4" />
        </button>
      </div>
      <div className={`${borderClassName} border border-t-0 rounded-b px-4 py-3`}>
        <p>{error || success}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
