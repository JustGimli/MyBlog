import React, { memo, useState } from 'react'

import axios from 'axios';

import CodeArea from './Areas/code/CodeArea';
import TextArea from './Areas/text/TextArea';
import ImageItem from './Areas/image/ImageArea';
import AddElement from './Buttons/AddElement';

const PostElements = ({ postElements, makeDecision, changeElementContent, deleteElement }) => {
    
    function handlePost(e) {

        let firstImage = true; 
        let articleImages = [];
        let file;
        for (let i = 0; i < postElements.length; i++){
            const element = postElements[i]
            if (element.type == 'image'){
                if (firstImage){
                    file =  element.file
                    firstImage = false;
                } else {
                    articleImages.push(element.file)
                }
                
            } 
        }
        
    
        

        // const articleImages = images.map((image, idx) => {if (idx != 0) return image.file})
        
        
        const sendData = {
            "generalData": {
                "photo": file,
                "title": postElements.find(obj => obj.type === "text")['text'],
                "text": JSON.stringify(postElements),
                

                
            }, 
            "articleImages": {
                articleImages
            }
            
        }
        axios.post("http://127.0.0.1:8000/posts/update/", sendData, {
            headers: {
                "Content-Type": "multipart/form-data",
        }})
    }
  
  return (
    <div style={ {height: "60px"} }>
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
