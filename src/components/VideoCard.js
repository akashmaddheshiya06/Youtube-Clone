 import React from "react";

const VideoCard = ({ info }) => {
  // Check if 'info' is defined and has the 'snippet' property
  if (!info || !info.snippet) {
    return null; // Return null or any suitable fallback if 'info' is undefined or has no 'snippet'
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg ">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.high.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics && statistics.viewCount} views</li> {/* Check if 'statistics' is defined before accessing 'viewCount' */}
      </ul>
    </div>
  );
};

 export const AdVideoCard = ({info})=>{
  return(
  <div className="p-1 m-1 border border-red-900">
    <VideoCard info={info}/>
  </div>
  )
};

export default VideoCard;

