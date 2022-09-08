import React, { useEffect, useState } from "react";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "./useVideos";
import { Carousel } from "react-responsive-carousel";

const VideoDisplay = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos] = useVideos("The Fantasy Footballers");
  const [videostwo] = useVideos("Fantasy Flock Network");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="grid grid-cols-1 gap-x-10 items-center lg:flex justify-around bg-[#F9F9FB] p-[10px] rounded-[10px] shadow-lg shadow-black">
      <div className="mb-6 mr-2 w-full">
        <VideoDetail video={selectedVideo} />
      </div>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        showArrows={true}
        infiniteLoop={true}
        swipeable={true}
        showIndicators={true}
      >
        <div>
          <VideoList
            onVideoSelect={(video) => setSelectedVideo(video)}
            videos={videostwo}
          />
        </div>
        <div>
          <VideoList
            onVideoSelect={(video) => setSelectedVideo(video)}
            videos={videos}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default VideoDisplay;
