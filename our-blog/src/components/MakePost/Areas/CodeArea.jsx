import React, { useState, useEffect } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { funky } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { MdControlPoint,
        MdOutlineDeleteOutline } from "react-icons/md";

import './CodeArea.scss';




const CodeArea = () => {
    const [code, setCode] = useState('');

    const [isMenuAreas, setIsMenuAreas] = useState(false);


    function MenuAreas(){
        setIsMenuAreas(true)
    } 

    return (
    <div className='Out-div'>
        
        <SyntaxHighlighter language="python" style={funky}>{ code }
        </SyntaxHighlighter>
            <textarea name="code-area" id="code-area" width="400px" height="200px" 
                      onChange={e => { setCode(e.target.value) } } value={code}>
                { code }
            </textarea>

        <MdControlPoint className="icon" onClick={e => MenuAreas }/>
        <MdOutlineDeleteOutline className="icon" />        
            
            
            

            
            
            
        
        
    </div>
    )
}

export default CodeArea
