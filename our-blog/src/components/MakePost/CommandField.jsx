<<<<<<< HEAD
import axios from 'axios';
import React, { useState } from 'react'
=======
import React, { useState, useEffect } from 'react'


import {
    MdControlPoint,
    MdOutlineDeleteOutline
} from "react-icons/md";

// import './CodeArea.scss';
import PostElements from './PostElements';
>>>>>>> 1b908ed7726cf371da9b65dace321dd42e89929d




const CommandField = () => {
<<<<<<< HEAD

    const [userInput, setInput] = useState()
    const [isSlesh, setSlesh] = useState(false)

    const helperWindow = <div className='helperWindow'>
                helper
            </div> 
        
    function handleUserInput(event) {
        const symbol = event.target.value

        if (symbol.slice(-1) === "/") {
            setSlesh(true)
        }

        setInput(symbol)
    }

    return (
        <>
            <img src="/home/jg/Pictures/Wallpapers/2.jpeg" alt="" />
            {isSlesh ? helperWindow : null}
            <textarea name="Userlog" cols="30" rows="10" onChange={handleUserInput} value={userInput}></textarea>
            <textarea name="View" id="" cols="30" rows="10"></textarea>
            
        </>
=======
    const [code, setCode] = useState('');
    const [postElements, setPostElements] = useState([{'type': 'code'}, {'type': 'text'}]); // Хранит последовательность элементов для текущего поста



   

    function makeDecision(event) {
        event.preventDefault(); // Чтобы не переходило по ссылке #


        console.log(event.target.innerText);
    }

    return (
        <div className='Out-div'>
>>>>>>> 1b908ed7726cf371da9b65dace321dd42e89929d

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
