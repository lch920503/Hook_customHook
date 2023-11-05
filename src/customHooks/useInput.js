import { useState } from "react";

export const useInput = (initValue) => {
  const [value, setValue] = useState(initValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(value);
    setValue("");
  };

  return [value, handleChange, handleSubmit];
};
