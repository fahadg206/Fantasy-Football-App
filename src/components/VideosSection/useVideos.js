import React, { useState, useEffect } from "react";
import youtube from "./youtube";

const useVideos = (defaultTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultTerm);
  }, [defaultTerm]);

  const search = async (userInput) => {
    const response = await youtube.get("/search", {
      params: {
        q: userInput,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
