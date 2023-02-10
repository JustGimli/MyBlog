import React from "react";

interface IProp {
    title: string,
    views: number,
    urlImg: string,
    text: string
}

export default function Item({ title, views, urlImg, text }: IProp) {
    return(
        <div className="Post-Item">
            <span className="Title">{title}</span>
            <p className="Description">{text}</p>
            <img src={urlImg} alt={title}></img> 
            <div className="Views">views</div>
        </div>
    )
}