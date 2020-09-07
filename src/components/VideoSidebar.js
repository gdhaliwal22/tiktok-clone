import React from "react";
import "../css/VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function VideoSidebar() {
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        <FavoriteIcon fontSize="large" />
        <p>250</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>100</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>9</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
