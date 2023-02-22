import React, { useState, useEffect, useCallback } from 'react'

import axios from 'axios';
import { Token } from '../admin/form/context/token';

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
    }, [])

    function handlePost(e) {
        const file = postElements.filter(obj => obj.type === 'image')[0]["file"]
        
        const sendData = {
            "photo": file,
            "title": postElements.find(obj => obj.type === "text")['text'],
            "text": JSON.stringify(postElements)
        }
        axios.post("http://127.0.0.1:8000/posts/update/", sendData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Token ${Token}`
        }})

        setPostElements([])
        
    }

    return (
            <div className='Out-div'>
                <button onClick={e =>  SaveInLocalStorage() }>Сохранить в LocalStorage</button> 
                <button onClick={handlePost} className="AcceptButton"> Submit </button>

                <PostElements postElements = { postElements } makeDecision={ makeDecision } changeElementContent={ changeElementContent } deleteElement={deleteElement}/>
                
            </div>
    )
}

export default CommandField
