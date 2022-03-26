import React, { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState({});

  const reset = () => {
    setValues({});
  };

  const handleChange = ({target}) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleChange, reset];
};
