/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'

import ImageItem from './Areas/image/ImageArea';

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
        event.preventDefault();

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
                    <a onClick={makeDecision}>Код</a>
                    <a onClick={makeDecision}>Текст</a>
                    <a onClick={makeDecision}>Картинка</a>
                </div>
            </div>

            <div className="dropdown">
                <MdOutlineDeleteOutline className="icon" />
                <div className="dropdown-content">
                    <a onClick={makeDecision}>Удалить</a>
                </div>
            </div>




            <PostElements postElements = { postElements } />

            <ImageItem/>

        </div>
    )
}

export default CommandField
