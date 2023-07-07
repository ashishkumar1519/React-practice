import './Video.css'
import useVideoDispatch from '../Customhook/VideoDispatch';
const Video = ({title,time,channel,views,varified, id ,editVideo}) => {
  console.log('Videos render');
  
  //Reducer
  // const dispatch= useContext(VideosDispatchContext)

  // custom hook

  const dispatch= useVideoDispatch();

  

  return (
    <> 
          <button  className='close' onClick={()=>dispatch({ type: "DELETE", payload: id })}> X </button>
          <button  className='edit' onClick={()=> (editVideo(id))}> EDIT </button>

          <img src={`https://picsum.photos/id/${id}/120/90`} alt="img" />
          <h3 >{title}</h3>
           <div className="channerl">
          {channel} {varified && '✅'}
        </div>
          <div className="views">{views}  views <strong>{time} </strong> </div>
    </>
  )
}

export default Video