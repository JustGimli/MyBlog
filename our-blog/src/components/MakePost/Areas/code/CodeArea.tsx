import React, { useState, useEffect } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { funky } from 'react-syntax-highlighter/dist/esm/styles/prism';



const CodeArea = () => {
    const [language, setLanguage] = useState('Язык');
    const [code, setCode] = useState('');
    

function handleClickDeopBox(e: any) {
    e.preventDefault();
    setLanguage(e.target.id)
}

    return (
        <div className='code-Area'>
            <div className='side-Code-Area'>

                <div className="dropdown">
                    <button className="dropbtn" >{ language }</button>
                    <div className="dropdown-content" onClick={handleClickDeopBox}>
                        <a href="#" id="python">Python</a>
                        <a href="#" id="java">Java</a>
                        <a href="#" id="delphi">Delphi</a>
                    </div>
                </div>

                <textarea className='code-Text-Area' name="code" id="code" cols={30} rows={10} onChange={e => setCode(e.target.value) } value={ code }></textarea>

            </div>
            <div className='side-Code-Area'>
                <div className="dropdown">
                    <button className="dropbtn" >Стиль</button>
                    <div className="dropdown-content">
                        <a href="#" >Хуёня</a>
                        <a href="#" >Хуйня</a>
                        <a href="#" >Поцелуй в попу</a>
                    </div>
                </div>

                <SyntaxHighlighter language={ language } style={ funky }>{ code }</SyntaxHighlighter>
                
            </div>
        </div>
    )
}

export default CodeArea
