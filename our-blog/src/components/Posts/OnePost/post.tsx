import React, { useEffect} from "react";

interface IProp {
    title: string,
    text: string,
    photo: string,
    date?: string
}

export default function Article({title, text, photo, date}:IProp) {
    useEffect(()=> {
        const textLog = document.getElementById("text")
        textLog!.innerHTML = text
        console.log(textLog)
    }, [text])
    
    return (
        <div className="max-width">
            <div className="Article-Item">
                <h2 className="Article-Title">{title}</h2>
                <img src={`http://127.0.0.1:8000/${photo}`} alt={title} className="Article-Img" />
                <div className="Article-Text" id="text"></div>
                <div className="Article-Date">{date}</div>
            </div>
        </div> 
    )
}