import React, { useContext, useReducer, useState } from "react";
import "./App.css";
import { videodb } from "./data/data.js";
import AddVideos from "./components/AddVideos";
import VideoList from "./components/VideoList";
import ThemeContext from "./components/context/Themecontext";
import VideosContext from "./components/context/VideosContext";
import  VideosDispatchContext from "./components/context/VideosDispatch";

const App = () => {
  console.log("App render");

  // const [videos ,setVideos] = useState(videodb);
  const [editableVideo, setEditableVideo] = useState(null);
  const [videos, dispatch] = useReducer(videoReducer, videodb);

  const [mode, setMode] = useState("dark");

  const themeContext = useContext(ThemeContext);

  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];

      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);

      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        console.log(index);
        const newVideo = [...videos];
        newVideo.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideo;
      default:
        return videos;
    }
  }

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  return (
    <>
      <ThemeContext.Provider value={mode}>
       <VideosContext.Provider value={videos} >
       <VideosDispatchContext.Provider value={dispatch}>
      <div>
      <AddVideos  editableVideo={editableVideo} />
    </div>

    <span className='mode'>
      <input
        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
        type='checkbox'
      />
      Theme Mode
    </span>
    <div
      className={`app ${mode}`}
      onClick={() => {
        console.log("app component");
      }}
    >
      <VideoList
        editVideo={editVideo}
      
      />
      <br />
      <div style={{ width: "100%" }}></div>
    </div>
    </VideosDispatchContext.Provider>
       </VideosContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
