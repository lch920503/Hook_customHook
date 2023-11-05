import React, { useEffect, useState } from "react";

export const useFetch = (BASE_URL, initType) => {
  const [data, setData] = useState();

  const api = (type) => {
    fetch(`${BASE_URL}/${type}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    api(initType);
  }, []);

  return { data, api };
};
