import React, { useState } from "react";

const useAddItem = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const handleAddItem = () => {
    setList([value, ...list]);
  };
  return [value, list, onChange, handleAddItem];
};

export default useAddItem;
