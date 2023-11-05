import React, { useState } from "react";

const useAddItem = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const handleAddItem = () => {
    setList([...list, value]);
    setValue("");
  };
  return [value, list, onChange, handleAddItem];
};

export default useAddItem;
