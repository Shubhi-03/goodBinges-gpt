import logoimage from '../utils/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { toggleGptSearchView } from '../utils/gptSlice';
const Header = () =>{
    const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);
    const dispatch = useDispatch();
    const handlegptSearch = () => {
      dispatch(toggleGptSearchView());
    }
    
    
    return <div class="absolute w-screen px-4 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
    <div class="absolute top-7 left-3">
    <img className="w-48 h-8" src={logoimage}
    alt="logo"/>
    </div>
    <div className="absolute top-5 right-5">
     
      <div className='flex justify-between'>
         <div>
         <button  onClick={handlegptSearch} className="bg-amber-300  px-3 py-1 mx-4 font-bold rounded-md text-black">{showGptSearch ? "Browse":"Get Recommendations"}</button>  
          </div>
           
         
      </div>
     
    </div>
    
    
    
  </div>
  
      
  

        {/* <div><img className="w-48 h-8" src={logoimage}
    alt="logo"/>
          </div>
    
    {user && <div className="">
        <button onClick={handleSignOut} className="bg-amber-300 text-white p-1 font-bold ">Sign out</button>  
         </div>} */}
    
    

}

export default Header;