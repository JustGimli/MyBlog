import React, { memo } from 'react'
import CodeArea from './Areas/code/CodeArea';
import TextArea from './Areas/text/TextArea';
import ImageArea from './Areas/image/ImageArea';
import AddElement from './Buttons/AddElement';
import DeleteElement from './Buttons/DeleteElement';
import axios from 'axios';

const PostElements = ({ postElements, makeDecision, changeElementContent, deleteElement }) => {

    function handlePost(e) {
        axios.post("http://127.0.0.1:8000/posts/update/", {
            title: postElements[0]['text'],
            text: JSON.stringify(postElements),
            views: 0,
        })
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
                          <ImageArea key={ idx }  idx={ idx }  changeElementContent = { changeElementContent } deleteElement = { deleteElement }/>:
                              <></>,

            
             
        )

      }
      <div style={ {height: "200px"} }><AddElement   makeDecision={ makeDecision } /></div>
      <button onClick={handlePost} className="AcceptButton"> Submit </button>

    </div>
  )
}

export default memo(PostElements)
