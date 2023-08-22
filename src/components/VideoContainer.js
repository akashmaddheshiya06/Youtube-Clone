
import  { useEffect , useState} from 'react'
import VideoCard, {AdVideoCard} from './VideoCard';
import {Link} from 'react-router-dom'
import { YOUTUBE_VIDEOS_API } from '../utils/Constant';
import './btnlist.css';
const VideoContainer = () => {

const [videos, setVideos] = useState([]);


  useEffect(()=>{
    getVideos();
  },[]);

  const getVideos = async()=>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };


  return (
    <div className='flex flex-wrap vdocard'>
    {videos[0] && <AdVideoCard info={videos[0]} />}


      {videos.map((video) => (
     <Link key={video.id} to={"/watch?v="+ video.id}>
     <VideoCard  info={video}/>  </Link>
        
  ))}

    </div>
  )
}

export default VideoContainer;


