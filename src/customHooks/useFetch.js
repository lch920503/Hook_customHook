import { useEffect, useState } from "react";

export const useFetch = (BASE_URL, initResource) => {
  const [data, setData] = useState([]);

  const handleData = (resource) => {
    fetch(`${BASE_URL}/${resource}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    handleData(initResource);
  }, []);

  return [data, handleData];
};
