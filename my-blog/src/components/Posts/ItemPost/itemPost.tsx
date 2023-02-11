import React from "react";
import { useParams } from "react-router-dom";

import ex from "../ex.json";

// interface IProp {
//     params: any,
// }

export default function Article(props:any ) {
    // fetch from a endpoint from django
    
    const params = useParams()
    const postItem = ex.Posts.find((obj) => obj.id===params.id)
    return (

        <div className="max-width">
            <div className="Article-Item">
                <h2 className="Article-Title">{postItem?.title}</h2>
                <img src={postItem?.urlImg} alt={postItem?.title} className="Article-Img" />
                
            </div>
        </div>
    )
}