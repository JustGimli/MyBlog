import React, { useState, useEffect, useCallback } from 'react'




// import './CodeArea.scss';
import PostElements from './MakePosts';




const CommandField = () => {
    
    const [postElements, setPostElements] = useState([]); // Хранит последовательность элементов для текущего поста

    const changeElementContent = useCallback((idx, updatedData) => {
        const newArray = postElements.map((element, index) => {
            if (idx !== index) {
              return element;
            } else {
              
              return updatedData;
            }

        
    })
    setPostElements(newArray);}, [postElements])    

    const deleteElement = useCallback((idx) => {
        const newArray = postElements.filter((element, index) =>
            index !== idx
          )
        setPostElements(newArray);
    }, [postElements])  

    const makeDecision = useCallback((e, updatedData) => {
        e.preventDefault()
        let newArray = [...postElements, updatedData];
        setPostElements(newArray);
    }, [postElements])  

    function SaveInLocalStorage(){
        let elements = JSON.stringify(postElements);
        localStorage.setItem('elements', elements);
    }

    useEffect(() => {
        let elements = localStorage.getItem('elements');
        if (elements){
            elements = JSON.parse(elements);
            setPostElements(elements); 
        }
        
         // Возможно ещё нужно проверку написать
    }, [])

   
    

    

    return (
        <div className='Out-div'>
            <button onClick={e =>  SaveInLocalStorage() }>Сохранить в LocalStorage</button>

            {/* <div className="dropdown">
                <MdOutlineDeleteOutline className="icon" />
                <div className="dropdown-content">
                    <a href="#" onClick={ makeDecision }>Удалить</a>
                </div>
            </div> */}
            <PostElements postElements = { postElements } makeDecision={ makeDecision } changeElementContent={ changeElementContent } deleteElement={deleteElement}/>
        </div>
    )
}

export default CommandField
