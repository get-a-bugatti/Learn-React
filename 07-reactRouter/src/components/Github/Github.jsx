import { useState, useEffect } from "react";

// using useState and useEffect for doing API calls, can be very lengthy. 
// Instead if we r using react-router-dom, we can use a more optimized approach.
// i.e., using loader with useLoaderData.

import { useLoaderData } from "react-router-dom";



export default function Github() {

    const data = useLoaderData();
    
    // const [data, setData] = useState({});

    // useEffect(() => {
    //     fetch('https://api.github.com/users/get-a-bugatti')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data);
    //         return data;
    //     })
    //     .catch(err => console.log(err));
    // }, []);

    return(
        <div className="bg-gray-500">
            <img src={data.avatar_url} alt="github_pfp" className="github_pfp"/>       
            <div className="text-center m-4 p-4 text-white text-xl">
                Github Following: {data.following}
            </div>
            <div className="text-center m-4 p-4 text-white text-xl">
                Github Followers: {data.followers}
            </div>
        </div>

    );
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/get-a-bugatti');
    return response.json();
}