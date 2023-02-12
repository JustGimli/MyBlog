import React, {useEffect, useState} from "react";
import axios from "axios";

import Item from "./PostItem";

import ex from "../ex.json";

export default function PostList(props) {
    const [posts, setPosts] =useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)


    useEffect( () => {
        if(fetching) {
            axios.get(`http://127.0.0.1:8000/posts/`)
                .then(responce => {
                    setPosts(responce.data.results)
                })
            .finally(() => setFetching(false))
        }
    }, [fetching])
    return (
        <div className="PostList"> 
            {posts.map(obj => <Item  key={obj.id} urlImg={obj.photo} title={obj.title} views={obj.views} text={obj.text} />)} 
            {/* {posts} */}
        </div> 

    ) 
}