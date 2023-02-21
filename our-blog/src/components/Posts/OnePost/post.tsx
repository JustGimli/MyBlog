import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { funky } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ObjProp {
    'type'?: string,
    'text'?: string,
    [code: string]: string | undefined;
    'image'?: string,
    'language'?: string
}

interface IProp {
    title: string,
    text: Array<ObjProp>,
    photo: string,
    date?: string
}

export default function Article({ title, text, photo, date }: IProp) {
    const [data, setData] = useState<React.ReactElement>()

    useEffect(() => {

        for (const item in text) {

            switch (text[item]['type']) {
                case 'text':
                    const areaText = <div>{text[item]['text']}</div>
                    setData(<>{data}{areaText}</>)
                    break;

                case 'code':
                    <SyntaxHighlighter language={ text[item]['language'] } style={ funky }>{ text[item]['code'] }</SyntaxHighlighter>
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