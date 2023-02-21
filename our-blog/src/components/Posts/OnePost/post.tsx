import React, { useEffect, useState} from "react";

interface IProp {
    title: string,
    text: Array<object>,
    photo: string,
    date?: string
}

export default function Article({title, text, photo, date}:IProp) {
    const [data, setData] = useState<React.ReactElement>()

    useEffect(()=> {
        
        for (const item in text) {

            switch (text[item]['type']) {
                case 'text':
                    const areaText = <div>{text[item]['text']}</div>
                    setData(<>{data}{areaText}</>)
                    break;
                
                case 'code':
                    const areaCode = <div>code</div>
                    setData(<>{data}{areaCode}</>)
                    break;
                
                case 'image':
                    // const imageArea = <img src={`http://127.0.0.1:8000/${photo}`} alt={title}   className="Article-Img"/>  // must get url from backend
                    // setData(<>{data}{imageArea}</>)
                    // console.log(imageArea)
                    break;
                default:
                    console.error("Not found parse")
            }

        }

    }, [text]) 


    return (
        <div className="max-width">
            <div className="Article-Item">
                <h2 className="Article-Title">{title}</h2>
                <img src={`http://127.0.0.1:8000/${photo}`} alt={title} className="Article-Img" />
                <div className="Article-Text" id="text">{data}</div>
                <div className="Article-Date">{date}</div>
            </div>
        </div> 
    )
}