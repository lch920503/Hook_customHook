import { useFetch } from "./customHooks/useFetch";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const CustomHook2 = () => {
  const { data, api } = useFetch(BASE_URL, "albums");

  return (
    <>
      <h1>CustomHook - api fetch 다루기</h1>
      <button onClick={() => api("posts")}>posts 보여주기</button>
      <button onClick={() => api("comments")}>comments 보여주기</button>
      <button onClick={() => api("albums")}>albums 보여주기</button>
      <div>{JSON.stringify(data)}</div>
    </>
  );
};

export default CustomHook2;
