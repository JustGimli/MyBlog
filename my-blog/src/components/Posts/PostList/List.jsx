import React, {useEffect, useState} from "react";
import axios from "axios";

import Item from "./PostItem";

import ex from "../ex.json";

export default function PostList(props) {
    const [posts, setPosts] =useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    const [totalCount,setTotal] = useState(1)

    useEffect( () => {
        if(fetching) {
            axios.get(`http://127.0.0.1:8000/posts/?_limit=10&_page=${currentPage}`)
                .then(responce => {
                    setPosts([...posts, ...responce.data])
                    setCurrentPage(prevState => prevState++)
                    setTotal(responce.headers('x-total-count'))
                })
            .finally(() => setFetching(false))
        }
    }, [fetching])

    const Items = ex.Posts.map( obj => <Item  key={obj.id} urlImg={obj.urlImg} title={obj.title} views={obj.views} text={obj.text} /> )

    return (
        <div className="PostList"> 
            {Items} 
        </div>

    ) 
}