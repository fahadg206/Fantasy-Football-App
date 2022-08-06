import React, { useEffect, useState } from "react";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "./useVideos";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Carousel } from "react-responsive-carousel";

const VideoDisplay = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos] = useVideos("fantasy football");
  const [videostwo] = useVideos("nfl highlights");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="grid grid-cols-1 gap-x-10 items-center lg:flex justify-around bg-white p-[10px] rounded-[10px] shadow-md shadow-black">
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
