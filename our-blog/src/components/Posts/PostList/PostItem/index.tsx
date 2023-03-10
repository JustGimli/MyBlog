import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import {AiOutlineEye} from "react-icons/ai"

interface ObjProp{
    'type'?: string,
    'text'?: string
}

interface IProp {
    id: number
    title: string,
    views: number,
    urlImg: string,
    text: Array<ObjProp>,
    date: string
}

export default function Item({ title, views, urlImg, text, id, date }: IProp) {
    
    const arrayText = text.filter((obj: ObjProp) => obj["type"] === "text")
    arrayText.shift()
    const description = arrayText.map(obj => obj['text'])
      

    function clickHandler(e: any) {
        axios.patch(`http://127.0.0.1:8000/posts/${id}/update-views/`, { count: views + 1 });
    }

    
    return( 
        <div className="Post-Item"> 
            <Link to={`/posts/${id}`}><span className="Title" onClick={clickHandler}>{title}</span>
                <p className="Description">{description}</p>
                <img src={urlImg} alt={title} className="Post-Img"></img>
            </Link>

            <div className="Date">{date}</div> 
            <div className="Views"> <AiOutlineEye/> { views}</div>
        </div> 
    ) 
}