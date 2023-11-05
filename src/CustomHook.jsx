import React from "react";
import { useInput } from "./customHooks/useInput";

const CustomHook = () => {
  const [value, handleChange, handleSubmit] = useInput("");
  return (
    <>
      <h1>CustomHook - input 다루기</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button>alert로 보여주기!</button>
      </form>
    </>
  );
};

export default CustomHook;
