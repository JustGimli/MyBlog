import React, { useState, useEffect, useCallback } from 'react'

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'

import ImageItem from './Areas/image/ImageArea';


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


            
            <button onClick={e =>  SaveInLocalStorage() }>Сохранить в LocalStorage</button>

            {/* <div className="dropdown">
                <MdOutlineDeleteOutline className="icon" />
                <div className="dropdown-content">
                    <a onClick={makeDecision}>Удалить</a>
                </div>
            </div> */}
            <PostElements postElements = { postElements } makeDecision={ makeDecision } changeElementContent={ changeElementContent } deleteElement={deleteElement}/>



        </div>
    )
}

export default CommandField
