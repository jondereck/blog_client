export const validateEmpty = (value, fieldName) => {
    if (value.trim() === '') {
      return `${fieldName} is required`;
    }
    return '';
  };
  
  export const validatePassword = (value) => {
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(value)) {
      return 'Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, and a number';
    }
    return '';
  };
  
  export const validateUsername = (value) => {
    if (value.length < 5) {
      return 'Username must be at least 5 characters long';
    }
    return '';
  };
  