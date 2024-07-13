import background from '../utils/bg.jpg';

const Shimmer = ()=>{
    return <div className="Shimmer-container">
        <div className=" pt-20 pb-14 px-6  bg-black text-white bg-opacity-75">
       <h1 className="w-1/2 bg-gray-700"></h1>
      <div className="w-3/4 bg-gray-700"></div>
     
      <div className="flex  mr-6">
      <div className="w-1/3 flex justify-center items-center">
  <img className="w-75% h-auto"  />
</div>
        <div className="w-1/2 ml-12">
         <div className="flex-col  space-y-12">
         <div className=" text-lg ">
          <p className="text-justify"></p></div>
          <div className=" text-lg "><p className="text-lg font-bold"> </p>
           </div>
          <div>
        <button className="bg-white text-black m-3 py-1 px-3 rounded-md">Add to Favourites</button>
        <button className="bg-gray-400 text-black m-3 py-1 px-3 rounded-md">Add to WatchList</button>
     </div>
        </div> 
        </div>
        
        
      </div>
       </div>
    
    </div>
    

}

export default Shimmer;