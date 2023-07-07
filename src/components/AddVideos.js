    import React, { useState,useEffect } from 'react'
    import './AddVideos.css';
import useVideoDispatch from '../Customhook/VideoDispatch';

    const initialState ={
        time: "6 month ago",
               channel: "Coder abc",
               varified: false,
               title:'',
               views:''
     }

    const AddVideos = ({editableVideo}) => {
         const[video,setvideo]=useState(initialState);
        //  const dispatch = useContext(VideosDispatchContext);
        
        // Custom hook
        const dispatch = useVideoDispatch();

        function handleChange(e){

            setvideo({...video,[e.target.name]:e.target.value});

        }

        function handleSubmit (e){
            e.preventDefault();
          if(editableVideo){
            dispatch({ type: "UPDATE", payload: video });
          }
          else  dispatch({ type: "ADD", payload: video })
          
            setvideo(initialState)

        }
        useEffect(() => {
         if(editableVideo){
            setvideo( editableVideo )
         }

        
         
        }, [editableVideo])
        
        

    return (
        <form>
        
        <input value={video.title} name='title' type="text" placeholder='title' onChange={handleChange} />
        <input value={video.views} name='views' type="text" onChange={handleChange} placeholder='Views' />

        <button  onClick={handleSubmit}
      
        > {editableVideo ? "Edit" :"Add" } Course </button>
        
        </form>
        )
    }

    export default AddVideos