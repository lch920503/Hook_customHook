import React from "react";
import useAddItem from "./customHooks/useAddItem";

const CustomHook3 = () => {
  const [value, list, onChange, handleAddItem] = useAddItem();

  return (
    <>
      <h1>CustomHook - 아이템 추가하기</h1>
      <input type="text" value={value} onChange={onChange} />
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleAddItem}>아이템 추가</button>
    </>
  );
};

export default CustomHook3;
