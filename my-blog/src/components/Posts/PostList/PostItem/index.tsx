import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import {AiOutlineEye} from "react-icons/ai"

interface IProp {
    id: number
    title: string,
    views: number,
    urlImg: string,
    text: string,
}

export default function Item({ title, views, urlImg, text, id }: IProp) {


    const clickHandler = (e:any) => {
        console.log(e.target.innerHTML)
        axios.get(`http://127.0.0.1:8000/posts/${title}/update-views`)
    }

    return( 
        <div className="Post-Item">
            <Link to={`/posts/${id}`}><span className="Title" onClick={clickHandler}>{title}</span></Link>
            <p className="Description">{text}</p>
            <img src={urlImg} alt={title} className="Post-Img"></img> 
            <div className="Views"> <AiOutlineEye/>{views}</div>
        </div> 
    ) 
}