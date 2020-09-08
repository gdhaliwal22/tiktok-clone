import React, { useRef, useState } from "react";
import "../css/Video.css";
import VideoFooter from "../components/VideoFooter";
import VideoSidebar from "../components/VideoSidebar";

function Video({ url, channel, description, song, likes, messages, shares }) {
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
        src="https://v16m.tiktokcdn.com/4db8d77ebe69e646b313214853bdf21f/5f580eda/video/tos/useast2a/tos-useast2a-ve-0068/232de9c94cfe4a3c8218e6321c7eb8c6/?a=1233&br=3258&bt=1629&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020090817080201018919521654158F34&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajdzOjw5aHdrcDMzZjczM0ApO2U0NDpoN2UzNzlmZWU8aGdwYWNlLm9yMjFfLS00MTZzczQzXjU2LzE1Yi42NGAvXmM6Yw%3D%3D&vl=&vr="
      ></video>
      <VideoFooter />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
