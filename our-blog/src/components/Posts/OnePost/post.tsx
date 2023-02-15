import React from "react";

interface IProp {
    title: string,
    text: string,
    photo: string,
    date?: string
}

export default function Article({title, text, photo, date}:IProp) {

    return (
        <div className="max-width">
            <div className="Article-Item">
                <h2 className="Article-Title">{title}</h2>
                <img src={`http://127.0.0.1:8000/${photo}`} alt={title} className="Article-Img" />
                <div className="Article-Text"> {text}</div>
                <div className="Article-Date">{date}</div>
            </div>
        </div> 
    )
}