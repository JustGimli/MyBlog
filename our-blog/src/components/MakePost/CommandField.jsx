import React, { useState, useEffect, useCallback } from 'react'




// import './CodeArea.scss';
import PostElements from './PostElements';
import AddElement from './Buttons/AddElement';
import DeleteElement from './Buttons/DeleteElement';




const CommandField = () => {
    const [code, setCode] = useState('');
    const [postElements, setPostElements] = useState([]); // Хранит последовательность элементов для текущего поста


    const makeDecision = useCallback((e,newElement) => {
        e.preventDefault();
        console.log(newElement);
        setPostElements([...postElements, newElement]);
      }, [postElements]);
   

    // function makeDecision(event) {
    //     event.preventDefault(); // Чтобы не переходило по ссылке #


    //     console.log(event.target.innerText);
    // }

    return (
        <div className='Out-div'>

            {/* <SyntaxHighlighter language="python" style={funky}>{code}
            </SyntaxHighlighter> */}
            <textarea name="code-area" id="code-area" width="400px" height="200px"
                onChange={e => { setCode(e.target.value) }} value={code}>

                {code}

            </textarea>






            {/* <AddElement   makeDecision={ makeDecision } /> */}
            

            {/* <div className="dropdown">
                <MdOutlineDeleteOutline className="icon" />
                <div className="dropdown-content">
                    <a href="#" onClick={ makeDecision }>Удалить</a>
                </div>
            </div> */}




            <PostElements postElements = { postElements } makeDecision={ makeDecision }  />








        </div>
    )
}

export default CommandField
