import React, { useState, useEffect, useCallback } from 'react'




// import './CodeArea.scss';
import PostElements from './PostElements';
import AddElement from './Buttons/AddElement';
import DeleteElement from './Buttons/DeleteElement';





const CommandField = () => {
    const [postElements, setPostElements] = useState([]); // Хранит последовательность элементов для текущего поста


    const makeDecision = useCallback((e, newElement) => {
        e.preventDefault();
        console.log(newElement);
        setPostElements([...postElements, newElement]);
      }, [postElements]);

    const deleteElement = useCallback((idx) => {
        setPostElements(
            postElements.filter((element, index) =>
              index !== idx
            )
          );
      }, [postElements]);

      const changeElementContent = useCallback((idx, updatedData) => {
        const updatedArray = postElements.map((element, index) => {
            if (index !== idx) {
              
              return element;
            } else {
              // Обновляем содержимое элемента
              return updatedData;
            }
        });
        
        setPostElements(updatedArray);
      }, [postElements]);


      function SaveInLocalStorage(){
        let bufer =  JSON.stringify(postElements);
        localStorage.setItem('elements', bufer); 
      }


      useEffect(() => {
        let data = localStorage.getItem('elements'); // Возвращает массив
        if (data){
            let elements = JSON.parse(data);
            if (elements){
                setPostElements(elements)
            } 
        }
        

        
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
