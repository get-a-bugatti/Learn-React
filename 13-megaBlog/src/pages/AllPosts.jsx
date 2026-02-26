import {useState, useEffect} from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

export default function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts()
            .then(result => {
                if (result) setPosts(result.rows);
            })
            .catch(err => console.log(err));

    }, []);


    return(
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {
                        posts.map((post) => {
                            <div key={post.$id} className="p-2 w-1/4">
                                <PostCard {...post}/>
                            </div>
                        })
                    }
                </div>
            </Container>
        </div>
    )
}