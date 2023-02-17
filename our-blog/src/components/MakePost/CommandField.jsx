import React, { useState, useEffect } from 'react'


import {
    MdControlPoint,
    MdOutlineDeleteOutline
} from "react-icons/md";

// import './CodeArea.scss';
import PostElements from './PostElements';




const CommandField = () => {
    const [code, setCode] = useState('');
    const [postElements, setPostElements] = useState([{'type': 'code'}, {'type': 'text'}]); // Хранит последовательность элементов для текущего поста



   

    function makeDecision(event) {
        event.preventDefault(); // Чтобы не переходило по ссылке #


        console.log(event.target.innerText);
    }

    return (
        <div className='Out-div'>

            {/* <SyntaxHighlighter language="python" style={funky}>{code}
            </SyntaxHighlighter> */}
            <textarea name="code-area" id="code-area" width="400px" height="200px"
                onChange={e => { setCode(e.target.value) }} value={code}>

                {code}

            </textarea>






            <div className="dropdown">
                <MdControlPoint className="icon" id='addArea' />
                <div className="dropdown-content">
                    <a href="#" onClick={makeDecision}>Код</a>
                    <a href="#" onClick={makeDecision}>Текст</a>
                    <a href="#" onClick={ makeDecision }>Картинка</a>
                </div>
            </div>

            <div className="dropdown">
                <MdOutlineDeleteOutline className="icon" />
                <div className="dropdown-content">
                    <a href="#" onClick={ makeDecision }>Удалить</a>
                </div>
            </div>




            <PostElements postElements = { postElements } />








        </div>
    )
}

export default CommandField
