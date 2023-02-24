import React, {  useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useEffectOnce } from "./useEffectOnce";

interface ObjProp {
    'type'?: string,
    'text'?: string,
    'code': string | '',
    'image'?: string,
    'language'?: string
    'title'?: string,
    'header'?: string
}

interface IProp {
    title: string,
    text: Array<ObjProp>,
    photo: string,
    date?: string,
    imagesURLs: Array<string>
}

export default function Article({ title, text, photo, date, imagesURLs }: IProp) {
    const [data, setData] = useState([<></>]);

    useEffectOnce(() => {

        let isTitleImage = true;
        let photoIDX = 0;
        
        for (const item in text) {

            switch (text[item]['type']) {
                case 'text':
                    
                    const areaText = <div className="Text-Wrapper"><div className="textBlock">{text[item]['text']}</div></div> 
                    setData((prevData) => [...prevData, areaText])   
                    
                    break;
                case 'code':
                    
                    const areaCode = <div className="Code-Wrapper"><div className="codeBlock"><SyntaxHighlighter  language={ text[item]['language'] } style={ okaidia } className="code" >{ text[item]['code'] }</SyntaxHighlighter></div></div> 
                    
                    setData((prevData) => [...prevData, areaCode])
                    
                    break;

                case 'image':
                    if (isTitleImage) {
                        isTitleImage = false
                    } else {
                        const imageArea = <img src={`http://127.0.0.1:8000/media/${imagesURLs[photoIDX]}`} alt={title}   className="Article-Img"/> 
                        setData((prevData) => [...prevData, imageArea])
                        photoIDX += 1 
                        
                    }
                    
                    break;

                case 'header':
                    
                    const imageArea = <h1 className="header">{ text[item]['header'] }</h1>
                    setData((prevData) => [...prevData, imageArea])
                        
                    
                    break;
                default:
                    console.error("Not found parse")
            }

        }

    })


    return (
        <div className="max-width">
            <div className="Article-Item">
                <h2 className="Article-Title">{title}</h2>
                <img src={`http://127.0.0.1:8000/media/${photo}`} alt={title} className="Article-Img" />
                <div className="Article-Elements">
                {
                    data.map((element, idx)=> {
                        return <div key={idx} >{element}</div>
                    })
                }
                </div>
                <div className="Article-Date">{date}</div>
            </div>
        </div>
    )
}

