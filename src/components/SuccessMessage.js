import React, { useEffect, useState } from "react";

const SuccessMessage = ({ success }) => {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setDismissed(false); // Reset the dismissed state whenever there is a new success message
    const timeout = setTimeout(() => {
      setDismissed(true);
    }, 2000);

    return () => {
      clearTimeout(timeout); // Clear the timeout when the component is unmounted
    };
  }, [success]);

  const containerClassName =
    "fixed justify-center bottom-4 sm:bottom-4 sm:right-4 sm:right-auto";

  if (!success || dismissed) {
    return null;
  }

  const alertClassName = "bg-green-500";
  const borderClassName = "border-green-400 bg-green-100 text-green-700";

  return (
    <div className={containerClassName}>
      <div className={`${alertClassName} text-white font-bold rounded-t px-4 py-2`}>
        <span>Success</span>
      </div>
      <div className={`${borderClassName} border border-t-0 rounded-b px-4 py-3`}>
        <p>{success}</p>
      </div>
    </div>
  );
};

export default SuccessMessage;
