import React, { useEffect, useState } from "react";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "./useVideos";

const VideoDisplay = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, search] = useVideos("fantasy football");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="grid grid-cols-1 lg:flex justify-around gap-x-5">
      <div>
        <VideoDetail video={selectedVideo} />
      </div>
      <div>
        <VideoList
          onVideoSelect={(video) => setSelectedVideo(video)}
          videos={videos}
        />
      </div>
    </div>
  );
};

export default VideoDisplay;
