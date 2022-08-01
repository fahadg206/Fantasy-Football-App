import React from "react";

const VideoDetail = ({ video }) => {
  //if video does not exist (on the inital page load),
  //then show that its loading
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video-player" src={videoSrc}></iframe>
      </div>
      <div className="border-2 border-[#01ECF2] rounded-[20px] p-4 text-center">
        <h4 className="mb-2 text-[17px] text-">{video.snippet.title}</h4>
        <p className="italic text-[14px] text-[#b6b9b9]">
          {video.snippet.description}
        </p>
      </div>
    </div>
  );
};

export default VideoDetail;
