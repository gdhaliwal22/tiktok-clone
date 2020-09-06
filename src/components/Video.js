import React from "react";
import "../css/Video.css";

function Video() {
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        src="https://v16m.tiktokcdn.com/6ac76a66d80bc101bfe5e2bdd99a7f6b/5f559229/video/tos/useast2a/tos-useast2a-ve-0068c004/09d654183c3647549344148c1a473d0e/?a=1233&br=4802&bt=2401&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020090619512001018907107042113406&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2x1NmVldnN4djMzaTczM0ApZGRpOzUzN2Q3Nzs3Mzc8OmdrNWAvNGlxZ2JfLS02MTZzc2MxLTUyMC4tMDM2YzNhMi06Yw%3D%3D&vl=&vr="
      ></video>
    </div>
  );
}

export default Video;
