import React from 'react'
import CodeArea from './Areas/code/CodeArea';
import TextArea from './Areas/text/TextArea';
import ImageArea from './Areas/image/ImageArea';
import AddElement from './Buttons/AddElement';
import DeleteElement from './Buttons/DeleteElement';

const PostElements = ({ postElements, makeDecision }) => {
  console.log(postElements);
  return (
    <div style={ {height: "60px"} }>
      {
        postElements.map((element, idx) => 
            
            (element.type == 'code') ?
                <CodeArea />:
                  (element.type == 'text') ?
                    <TextArea />:
                        (element.type == 'image') ?
                          <ImageArea />:
                              <></>,

            
            
        )

      }
      <div style={ {height: "200px"} }><AddElement   makeDecision={ makeDecision } /></div>
      

    </div>
  )
}

export default PostElements
