import React, {useState, memo} from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';

import DeleteElement from '../../Buttons/DeleteElement';



const CodeArea = ({ idx, changeElementContent, savedCode, savedLanguage, deleteElement } ) => {
    const [language, setLanguage] = useState(savedLanguage);
    const [code, setCode] = useState(savedCode);    

    const [languageList, setLanguageList] =useState(['asm6502', 'c', 'cpp', 'csharp', 'css', 'django', 'docker', 'go', 'http', 'java', 'javascript', 'nasm','nginx', 'pascal', 'php', 'python', 'ruby', 'scss', 'sql', 'typescript'])

function handleClickDeopBox(e) {
    e.preventDefault();
    setLanguage(e.target.id.toLowerCase())
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
                        {
                            languageList.map((lang, idx) => {
                                return <a href="#" id={lang} key={idx}>{lang}</a>
                            })
                        }
                       
                    
                    </div>
                </div>
                
                <textarea className='code-Text-Area' name="code" id="code" cols={30} rows={10} onChange={e => handleChangeTextArea(e) } value={ code }></textarea>

            </div>
            <div className='side-Code-Area'>
                <SyntaxHighlighter language={ language } style={ okaidia }>{ code }</SyntaxHighlighter>
            </div>
            
        </div>
       
        </div>
        
    )
}

export default memo(CodeArea)
