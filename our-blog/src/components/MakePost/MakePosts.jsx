import React, { memo } from 'react'

import axios from 'axios';

import CodeArea from './Areas/code/CodeArea';
import TextArea from './Areas/text/TextArea';
import ImageItem from './Areas/image/ImageArea';
import AddElement from './Buttons/AddElement';

const PostElements = ({ postElements, makeDecision, changeElementContent, deleteElement }) => {

    function handlePost(e) {
        const file = postElements.map(obj => obj.file)
        
        const formData = new FormData()
        formData.append("photo", file)
        formData.append("title", postElements[0]['text'])
        formData.append("views", 0)
        formData.append("text", JSON.stringify(postElements))
        console.log(formData)
        axios.post("http://127.0.0.1:8000/posts/update/", formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }})
    }
  
  return (
    <div style={ {height: "60px"} }>
        <h2 className='Head'>В начале текстовое поле для Title</h2>
        <form>
    {
        postElements.map((element, idx) => 
            
            (element.type === 'code') ?
                <CodeArea key={ idx } idx={ idx } changeElementContent={ changeElementContent } savedCode={element.code} savedLanguage={element.language}  deleteElement = { deleteElement }/>:
                  (element.type === 'text') ?
                    <TextArea key={ idx } idx={ idx }  changeElementContent = { changeElementContent } savedText={element.text} deleteElement = { deleteElement }/>:
                        (element.type === 'image') ?
                          <ImageItem key={ idx }  idx={ idx }  changeElementContent = { changeElementContent } savedURL={element.url} deleteElement = { deleteElement }/>:
                              <></>,)
    }
    <div style={ {height: "200px"} }>
        <AddElement makeDecision={ makeDecision }/>
    </div>
    
    <button onClick={handlePost} className="AcceptButton"> Submit </button>
    </form>
    </div>

  )
}

export default memo(PostElements)
