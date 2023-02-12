import React, {useEffect, useState} from "react";
import axios from "axios";

import Item from "./PostItem";


export default function PostList(props) {

    const [posts, setPosts] =useState([])
    const [href, setHref] = useState("http://127.0.0.1:8000/posts/")
    const [fetching, setFetching] = useState(true)

    useEffect ( () => {
        document.addEventListener('scroll', scrollHandler)
        
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])
    
    useEffect( () => {
        if(fetching) {
            if (href !== null)
            {   
                axios.get(`${href}`)
                    .then(responce => {

                        const nextPage = responce.data.next
                        setHref(nextPage)
                        setPosts([...posts, ...responce.data.results])
                        
                    })
                    .finally(() => setFetching(false))
            }
        }
    }, [fetching])    

    const scrollHandler = (e) => {
        
        if ((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100)) {
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