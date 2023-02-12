import React, {useEffect, useState} from "react";
import axios from "axios";

import Item from "./PostItem";


export default function PostList(props) {
    const localPath = "http://127.0.0.1:8000/posts/"

    const [posts, setPosts] =useState([])
    const [href, setHref] = useState(localPath)
    const [fetching, setFetching] = useState(true)
    const [currentPost, setCurrentPost] = useState(1)
    const [totalCount, setTotalCount] = useState(2)

    useEffect ( () => {
        document.addEventListener('scroll', scrollHandler)
        
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])
    
    useEffect( () => {
        if(fetching) {
            axios.get(`${href}`)
                .then(responce => {
                    console.log(responce)
                    if(localPath === href) {
                        
                        setTotalCount(responce.data.results[0].id)
                        console.log(totalCount)
                    }
                    let nextPage = responce.data.next
                    setCurrentPost(prev => prev + 1)
                    setHref(nextPage)
                    setPosts([...posts, ...responce.data.results])
                    
                })
                .finally(() => setFetching(false))
        }
    }, [fetching])    

    const scrollHandler = (e) => {
        if ((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100)  && currentPost < totalCount) {
            setFetching(true)   
        }
    }

    return (
        <div className="PostList"> 
            {posts.map(obj => <Item  key={obj.id} urlImg={obj.photo} title={obj.title} views={obj.views} text={obj.text} />)} 
            {/* {posts} */}
        </div> 

    ) 
}