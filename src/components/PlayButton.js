import React, { useState } from 'react'
import './Button.css'

function PlayButton({children}) {
  console.log('play button')
  const [playing,setPlaying] =useState(false)



  function handleFucntion(e){
    e.stopPropagation();
    setPlaying(!playing)
  
  }
  return (
    <button onClick={handleFucntion}>{children} {playing? "▶️" : "⏸️" }  </button>
  )
}

export default PlayButton