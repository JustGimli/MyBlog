import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Article from "./post";


export default function SetArticle(props) {

    
    const params = useParams()
    const [postItem, setPost] = useState(null)

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/posts/${params.id}/`)
        .then(responce => {
            setPost(responce.data)
    })
    }, [params.id])
    
    if(!postItem) return ( 
        <div className="max-width">
            <div className="notFound">
                <img src="https://i.pinimg.com/564x/13/5c/4e/135c4e70743ec6eebaf2ea6c10135e4c.jpg" alt="notFound" />
            </div>
        </div>
    )

    return (
        <Article title={postItem.title} text={postItem.text} photo={postItem.photo}/>
    )
}