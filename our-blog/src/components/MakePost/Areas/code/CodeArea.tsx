/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { funky } from 'react-syntax-highlighter/dist/esm/styles/prism';



const CodeArea = () => {
    const [language, setLanguage] = useState('');
    const [code, setCode] = useState('');
    

function handleClickDeopBox(e: any) {
    setLanguage(e.target.id)
}

    return (
        <div className='code-Area'>
            <div className='side-Code-Area'>

                <div className="dropdown">
                    <button className="dropbtn" >Язык</button>
                    <div className="dropdown-content" onClick={handleClickDeopBox}>
                        <a id="python">Python</a>
                        <a id="java">Java</a>
                        <a id="delphi">Delphi</a>
                    </div>
                </div>

                <textarea className='code-Text-Area' name="code" id="code" cols={30} rows={10} onChange={e => setCode(e.target.value) } value={ code }></textarea>

            </div>
            <div className='side-Code-Area'>
                <div className="dropdown">
                    <button className="dropbtn" >Стиль</button>
                    <div className="dropdown-content">
                        <a>Хуёня</a>
                        <a>Хуйня</a>
                        <a>Поцелуй в попу</a>
                    </div>
                </div>

                <SyntaxHighlighter language={ language } style={ funky }>{ code }</SyntaxHighlighter>
                
            </div>
        </div>
    )
}

export default CodeArea
