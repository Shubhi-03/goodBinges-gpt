const VideoTitle = ({title, overview}) =>{
    return <div className="w-screen aspect-video px-10 pt-56 bg-gradient-to-r from-black absolute text-white">
        
     <h1 className="text-4xl font-bold m-4">{title}</h1>
     <p className="w-1/3">{overview}</p>
     <div>
        <button className="bg-white text-black m-3 py-1 px-3 rounded-md">Play</button>
        <button className="bg-gray-400 text-black m-3 py-1 px-3 rounded-md">More Info</button>
     </div>
    </div>
};

export default VideoTitle;