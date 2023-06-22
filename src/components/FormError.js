import React from 'react';

const FormError = ({ error }) => {
  return (
    <div className="form-error">
      {error && <span className="text-red-500 ">{error}</span>}
    </div>
  );
};

export default FormError;
