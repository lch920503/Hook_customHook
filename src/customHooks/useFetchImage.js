import React, { useEffect, useState } from "react";

const useFetchImage = (BASE_URL) => {
  const [images, setImages] = useState([]);

  const handleImageData = (resource) => {
    fetch(`${BASE_URL}/${resource}`)
      .then((res) => res.json())
      .then((res) => setImages(res));
  };

  useEffect(() => {
    handleImageData("photos");
  }, []);

  return { images, handleImageData };
};

export default useFetchImage;
