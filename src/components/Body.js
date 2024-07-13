import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import MoreInfo from "./moreInfo";


const Body = () =>{
    const dispatch = useDispatch();
    
    const appRouter = createBrowserRouter([
        
        {
            path: "/",
            element: <Browse />,
        },
        {
            path: "/:movieId/:title",
            element: <MoreInfo/>,
        }
    ])
    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
              
    //           const {uid, email, displayName} = user;
    //           dispatch(addUser({uid: uid, email: email, displayName: displayName}))
    //           navigate("/browse")
    //         } else {
    //           dispatch(removeUser);
              
    //         }
    //       });
    // }
    // )
    return <div className="">
        <RouterProvider router={appRouter}/>
        
    </div>
}

export default Body;