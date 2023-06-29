import React from 'react';

const FormError = ({ error }) => {
  if (!error) {
    return null;
  }
  return (
    <div className="form-error">
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default FormError;
