import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import axios from "axios";
import axios from "../../../api/axios"; 

import Article from "./post";


export default function SetArticle(props) {


    const params = useParams()
    const [postItem, setPost] = useState(null)
    const [imagesURLs, setImagesURLs] = useState([])


    useEffect(() => {
        axios.get(`posts/${params.id}/`)
            .then(responce => {
                responce.data.generalData.text = JSON.parse(responce.data.generalData.text)
                setPost(responce.data.generalData)
                setImagesURLs(responce.data.articleImages)
                if (!imagesURLs){
                    setImagesURLs([])
                }
            })
    }, [params.id])

    if (!postItem) return (
        <div className="max-width">
            <div className="notFound">
                <h2>NOT FOUND</h2>
            </div>
        </div>
    )

    return (
        <Article title={postItem.title} text={postItem.text} photo={postItem.photo} date={postItem.date} imagesURLs = { imagesURLs } />
    )
}