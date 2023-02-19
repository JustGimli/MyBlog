import React from 'react'
import CodeArea from './Areas/code/CodeArea';
import TextArea from './Areas/text/TextArea';
import ImageArea from './Areas/image/ImageArea';

const PostElements = ({ postElements }) => {
  console.log(postElements);
  return (
    <div style={ {height: "60px"} }>
      {
        postElements.map(element => 

            (element.type === 'code') ?
                <CodeArea />:
                  (element.type === 'text') ?
                    <TextArea />:
                        (element.type === 'image') ?
                          <ImageArea />:
                              <></>

            ,
            // if (element.type == 'code') {
            //     { console.log('good') }
            //     <h1 style={ {color: "white"} }>Код</h1>
            // } else if (element.type == 'text') {
            //     <h1 style={ {color: "white"} }>Текст</h1>
            // } else if (element.type == 'image') {
            //     <h1>Картинка</h1>
        
            
        )
      }
    </div>
  )
}

export default PostElements
