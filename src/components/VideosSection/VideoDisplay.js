import React, { useEffect, useState } from "react";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "./useVideos";

const VideoDisplay = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos] = useVideos("fantasy football");
  const [videostwo] = useVideos("nfl highlights");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="grid grid-cols-1 gap-x-10 items-center lg:flex justify-around">
      <div>
        <VideoList
          onVideoSelect={(video) => setSelectedVideo(video)}
          videos={videos}
        />
      </div>
      <div className="mb-6 mr-2">
        <VideoDetail video={selectedVideo} />
      </div>
      <div>
        <VideoList
          onVideoSelect={(video) => setSelectedVideo(video)}
          videos={videostwo}
        />
      </div>
    </div>
  );
};

export default VideoDisplay;
