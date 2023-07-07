import { useContext } from "react";
import VideosContext from "../components/context/VideosContext";



function useVideo(){

    return useContext(VideosContext)

}

export default useVideo