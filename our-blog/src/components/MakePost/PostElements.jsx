import React, { memo } from 'react'
import CodeArea from './Areas/code/CodeArea';
import TextArea from './Areas/text/TextArea';
import ImageArea from './Areas/image/ImageArea';
import AddElement from './Buttons/AddElement';
import DeleteElement from './Buttons/DeleteElement';

const PostElements = ({ postElements, makeDecision, changeElementContent, deleteElement }) => {



  
  return (
    <div style={ {height: "60px"} }>
      {
        
        postElements.map((element, idx) => 
            
            (element.type == 'code') ?
                <CodeArea key={ idx } idx={ idx } changeElementContent={ changeElementContent } savedCode={element.code} savedLanguage={element.language}  deleteElement = { deleteElement }/>:
                  (element.type == 'text') ?
                    <TextArea key={ idx } idx={ idx }  changeElementContent = { changeElementContent } savedText={element.text} deleteElement = { deleteElement }/>:
                        (element.type == 'image') ?
                          <ImageArea key={ idx }  idx={ idx }  changeElementContent = { changeElementContent } savedURL={element.url} deleteElement = { deleteElement }/>:
                              <></>,

            
            
        )

      }
      <div style={ {height: "200px"} }><AddElement   makeDecision={ makeDecision } /></div>
      

    </div>
  )
}

export default memo(PostElements)
