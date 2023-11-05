import React from "react";
import { useFetch } from "./customHooks/useFetch";

const CustomHook2 = () => {
  const BASE_URL = "https://jsonplaceholder.typicode.com/";

  const [data, handleData] = useFetch(BASE_URL, "posts");

  return (
    <>
      <h1>CustomHook - Data 다루기</h1>
      <button onClick={() => handleData("posts")}>posts 보기</button>
      <button onClick={() => handleData("todos")}>todos 보기</button>
      <button onClick={() => handleData("albums")}>albums 보기</button>
      <div>{JSON.stringify(data)}</div>
    </>
  );
};

export default CustomHook2;
