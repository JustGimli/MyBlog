import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import {AiOutlineEye} from "react-icons/ai"

interface IProp {
    id: number
    title: string,
    views: number,
    urlImg: string,
    text: Array<object>,
    date: string
}

export default function Item({ title, views, urlImg, text, id, date }: IProp) {
    

    const description = text.filter(obj => obj["type"] === "text").map(obj => obj['text'])

    function clickHandler(e: any) {
        axios.patch(`http://127.0.0.1:8000/posts/${id}/update-views/`, { count: views + 1 });
    }

    
    return( 
        <div className="Post-Item"> 
            <Link to={`/posts/${id}`}><span className="Title" onClick={clickHandler}>{title}</span></Link>
            <p className="Description">{description}</p>
            <img src={urlImg} alt={title} className="Post-Img"></img>
            <div className="Date">{date}</div> 
            <div className="Views"> <AiOutlineEye/></div>
        </div> 
    ) 
}