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
        src="https://v77.tiktokcdn.com/6490b3ea84789a1a7ba7079c63aadc57/5f56c3ba/video/tos/useast2a/tos-useast2a-ve-0068c004/2362532506c24a66be8a02a69273732d/?a=1233&br=2652&bt=1326&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20200907173510010190192131040E02D0&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2tmOHM1Ojc6dTMzMzczM0ApZDpnZmVmM2QzNzM3OmVmaWdeYm1nLjE0bWlfLS1iMTZzczIuNTZeYDNgNTM2XmFhMDU6Yw%3D%3D&vl=&vr="
      ></video>
      <VideoFooter />
      <VideoSidebar />
    </div>
  );
}

export default Video;
