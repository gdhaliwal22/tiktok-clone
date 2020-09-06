import React, { useRef, useState } from "react";
import "../css/Video.css";
import VideoFooter from "../components/VideoFooter";
import VideoSidebar from "../components/VideoSidebar";

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
    // if video is playing
    // stop it
    // otherwise if its not playing
    // play it
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src="https://v16m.tiktokcdn.com/a488961a7976347aa4d31f34c3e55029/5f559b26/video/tos/useast2a/tos-useast2a-ve-0068c002/ccbce55191974c2785cc5a5802a4aa3e/?a=1233&br=2028&bt=1014&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009062029480101901861421F1262F5&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anY1dnU6bjhmczMzMzczM0ApZDk4Njc5Zjw6NzloNztmM2drYG40X2VfcmtfLS0wMTZzczRfNC9eXjYyNDYvMy80LS86Yw%3D%3D&vl=&vr="
      ></video>
      <VideoFooter />
    </div>
  );
}

export default Video;
