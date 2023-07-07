import { useContext } from "react";
import VideosDispatchContext from "../components/context/VideosDispatch";



function useVideoDispatch(){

    return useContext(VideosDispatchContext)

}

export default useVideoDispatch