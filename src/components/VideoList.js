import React, { useContext } from 'react'
import Video from './Video';
import PlayButton from './PlayButton'
import useVideo from '../Customhook/Videohook';

const VideoList = ({editVideo}) => {

  // USe Reducer
  // const videoData= useContext(VideosContext);

  // useCustomHook
  const videoData= useVideo();


  return (
    <>

    {videoData.map(data=> (
        <div className="video" key={data.id}>
        <Video
         title={data.title}
         channel={data.channel}
         varified={data.varified}
         views={data.views}
         time={data.time}
         id={data.id}
         editVideo={editVideo}
       />
       <PlayButton >Play BUtton </PlayButton>
       
       </div>
         ))}
    
    </>
  )
}

export default VideoList