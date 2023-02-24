    import React, { useState, useEffect, useCallback, useContext } from 'react'

    import axios from 'axios';
    import { Token } from '../admin/form/context/token';

    import PostElements from './MakePosts';


    const CommandField = () => {
        const [postElements, setPostElements] = useState([{'type': 'title', 'title': ''}]); // Хранит последовательность элементов для текущего поста
        const {token} = useContext(Token)

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
            setPostElements(
                postElements.map((element, index) => {
                    if (index === idx) {
                        return {'type': 'deleted',
                                'element': <div></div>}
                    } else {
                        return element
                    }
                }
            ))
            
            
        }, [postElements])  

        const makeDecision = useCallback((e, updatedData) => {
            e.preventDefault()
            let newArray = [...postElements, updatedData];
            setPostElements(newArray);
        }, [postElements])  

        function SaveInLocalStorage(){
            setPostElements(postElements.filter(element => element.type !== 'deleted'))
            console.log(postElements);
            let elements = JSON.stringify(postElements);
            localStorage.setItem('elements', elements);
        }

        useEffect(() => {
            let elements = localStorage.getItem('elements');
            if (elements){
                elements = JSON.parse(elements);

                let titleExists = false;
                

                for(let i=0; i < elements.length; i++) {
                    const element = elements[i];
                    if (element.type === 'title') {
                        titleExists = true
                    }
                }

                if (titleExists) {
                    setPostElements(elements); 
                } else {
                    // console.log('Baaaad');
                    elements.unshift({'type': 'title', 'title': ''});
                }
                
                
            } 
        }, [])

        function handlePost(e) {

            let firstImage = true; 
            let articleImages = [];
            let file;
            setPostElements(postElements.filter(element => element.type !== 'deleted'))
            for (let i = 0; i < postElements.length; i++){
                const element = postElements[i]
                if (element.type === 'image'){
                    if (firstImage){
                        file =  element.file
                        firstImage = false;
                    } else {
                        articleImages.push(element.file)
                    }
                    
                } 
            }
            
            const sendData = {
                "generalData": {
                    "photo": file,
                    "title": postElements[0].title,
                    "text": JSON.stringify(postElements),
                }, 
                "articleImages": {
                    articleImages
                }
                
            }
            axios.post("http://127.0.0.1:8000/posts/update/", sendData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Token ${token}`
            }})
            setPostElements([{'type': 'title', 'title': ''}])
            localStorage.setItem('elements', '');
        }

        return (
                <div className='Out-div'>
                    <button onClick={e =>  SaveInLocalStorage() }>Сохранить в LocalStorage</button> 
                    <button onClick={e => handlePost(e)} className="AcceptButton"> Submit </button>
                    <PostElements postElements = { postElements } makeDecision={ makeDecision } changeElementContent={ changeElementContent } deleteElement={deleteElement}/>               
                </div>
        )
    }

    export default CommandField
