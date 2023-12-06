import React, { useState } from 'react';

const email = ({ email, setEmailValid }) => {
  const validateEmail = (email) => {
    // Utilize uma expressão regular para validar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    setEmailValid(isValid);

    return isValid;
  };

  return null;
};

export default email;
