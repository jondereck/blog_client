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
    "fixed left-0 right-0 flex justify-center bottom-4 sm:bottom-4";

  if (!success || dismissed) {
    return null;
  }

  const borderClassName = "border-green-400 bg-green-100 text-green-700";

  return (
    <div className={containerClassName}>
      <div className={`${borderClassName} border  rounded-b px-4 py-3`}>
        <p>{success}</p>
      </div>
    </div>
  );
};

export default SuccessMessage;
