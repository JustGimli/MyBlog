import React, { useState, memo } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { funky } from 'react-syntax-highlighter/dist/esm/styles/prism';

import DeleteElement from '../../Buttons/DeleteElement';



const CodeArea = ({ idx, changeElementContent, savedCode, savedLanguage, deleteElement } ) => {
    const [language, setLanguage] = useState(savedLanguage);
    const [code, setCode] = useState(savedCode);    

function handleClickDeopBox(e) {
    e.preventDefault();
    setLanguage(e.target.id)
}

function handleChangeTextArea(e){
    setCode(e.target.value);
    
    let updatedData = {
        'type': 'code',
        'code': code,
        'language': language
    }
    changeElementContent(idx, updatedData);
}




    return (
        <div className='main-Code'>
            <DeleteElement className="delete-element" deleteElement = { deleteElement } idx = { idx } />
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

                <textarea className='code-Text-Area' name="code" id="code" cols={30} rows={10} onChange={e => handleChangeTextArea(e) } value={ code }></textarea>

            </div>
            <div className='side-Code-Area'>
                <SyntaxHighlighter language={ language } style={ funky }>{ code }</SyntaxHighlighter>
            </div>
            
        </div>
       
        </div>
        
    )
}

export default memo(CodeArea)
