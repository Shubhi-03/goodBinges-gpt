import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) =>{
        const TrailerVideo = useSelector((store)=>store.movies?.TrailerVideo);
        useMovieTrailer(movieId);
    return (
        <div className="w-screen">
       <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          TrailerVideo?.key +
          "?&autoplay=1&mute=1&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
      ></iframe>
        </div>

    );

};

export default VideoBackground;