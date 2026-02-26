import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Protected({children, authentication = true}) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status);

    useEffect(() => {
        // Todo : make it more easy to understand

        // Done : easier version
        // if (authentication !== authStatus) {

        //     if (authentication) {
        //         navigate("/login")   // needed login but user doesn't have it
        //     } else {
        //         navigate("/")        // guest page but user is logged in
        //     }
    
        // }
    

        if (authentication && authStatus !== authentication) {
            navigate("/login");
        } else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }

        setLoader(false);
    }, [authentication, authStatus, navigate])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}