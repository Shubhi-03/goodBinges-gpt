
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({PosterPath, title}) =>{
    if(!PosterPath) return null;
    return <>
    <div className="w-24 md:w-48 pr-4 hover:scale-95">
        <img src = {IMG_CDN_URL+PosterPath}
        alt = {title}/></div>
       
    </>
       
    
};

export default MovieCard;