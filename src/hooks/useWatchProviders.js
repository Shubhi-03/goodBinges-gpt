import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {  addWatchProviders } from "../utils/movieSlice";
import { useEffect } from "react";

const useWatchProviders = (movieId) =>{
    const dispatch = useDispatch();
    const getWatchProviders = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/watch/providers'
        , API_OPTIONS);
        const json = await data.json();
        dispatch(addWatchProviders(json?.results));
    }
    useEffect(()=>{
        getWatchProviders();
    }, []);
}
export default useWatchProviders;