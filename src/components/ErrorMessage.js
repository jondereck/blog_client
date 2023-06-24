import React, { useEffect, useState } from "react";

const ErrorMessage = ({ error }) => {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setDismissed(false); // Reset the dismissed state whenever there is a new error message
    const timeout = setTimeout(() => {
      setDismissed(true);
    }, 2000);

    return () => {
      clearTimeout(timeout); // Clear the timeout when the component is unmounted
    };
  }, [error]);

  const containerClassName =
    "fixed justify-center bottom-4 sm:bottom-4 sm:right-4 sm:right-auto";

  if (!error || dismissed) {
    return null;
  }

  const alertClassName = "bg-red-500";
  const borderClassName = "border-red-400 bg-red-100 text-red-700";

  return (
    <div className={containerClassName}>
      <div className={`${alertClassName} text-white font-bold rounded-t px-4 py-2`}>
        <span>Error</span>
      </div>
      <div className={`${borderClassName} border border-t-0 rounded-b px-4 py-3`}>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
