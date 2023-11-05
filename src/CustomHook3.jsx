import React from "react";
import useFetchImage from "./customHooks/useFetchImage";

const CustomHook3 = () => {
  const BASE_URL = "https://jsonplaceholder.typicode.com/";
  const { images } = useFetchImage(BASE_URL);

  return (
    <>
      <h1>CustomHook - data 다루기 (응용 버전)</h1>
      <div>
        {images.splice(0, 10).map((item) => (
          <img key={item.id} src={item.url} alt="" />
        ))}
      </div>
    </>
  );
};

export default CustomHook3;
