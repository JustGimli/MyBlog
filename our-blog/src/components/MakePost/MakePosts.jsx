import React, { memo } from 'react'

import axios from 'axios';

import CodeArea from './Areas/code/CodeArea';
import TextArea from './Areas/text/TextArea';
import ImageItem from './Areas/image/ImageArea';
import AddElement from './Buttons/AddElement';

const PostElements = ({ postElements, makeDecision, changeElementContent, deleteElement }) => {

    function handlePost(e) {
        const file = postElements.filter(obj => obj.type === 'image')[0]["file"]

        const sendData = {
            "photo": file,
            "title": "test",
            "text": JSON.stringify(postElements)
        }
        console.log(sendData)
        axios.post("http://127.0.0.1:8000/posts/update/", sendData, {
            headers: {
                "Content-Type": "multipart/form-data",
        }})
    }
  
  return (
    <div style={ {height: "60px"} }>
    <h2 className='Head'>В начале текстовое поле для Title</h2>
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
    </div>

  )
}

export default memo(PostElements)
