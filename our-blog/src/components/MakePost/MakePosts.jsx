import React, { memo, useState } from 'react'

import axios from 'axios';

import CodeArea from './Areas/code/CodeArea';
import TextArea from './Areas/text/TextArea';
import ImageItem from './Areas/image/ImageArea';
import TitleArea from './Areas/title/TitleArea';
import HeaderArea from './Areas/header/HeaderArea';
import AddElement from './Buttons/AddElement';


const PostElements = ({ postElements, makeDecision, changeElementContent, deleteElement }) => {          
  return (
    <div style={ {height: "60px"} }>
    {
        
        postElements.map((element, idx) => 
            
            (element?.type === 'code') ?
                <CodeArea key={ idx } idx={ idx } changeElementContent={ changeElementContent } savedCode={element.code} savedLanguage={element.language}  deleteElement = { deleteElement }/>:
                  (element.type === 'text') ?
                    <TextArea key={ idx } idx={ idx }  changeElementContent = { changeElementContent } savedText={element.text} deleteElement = { deleteElement }/>:
                        (element.type === 'image') ?
                          <ImageItem key={ idx }  idx={ idx }  changeElementContent = { changeElementContent } savedURL={element.url} deleteElement = { deleteElement }/>:
                            (element.type === 'title') ?
                              <TitleArea key={ idx }  idx={ idx }  changeElementContent = { changeElementContent } savedTitle={element.title} />:
                                (element.type === 'header') ?
                                  <HeaderArea key={ idx }  idx={ idx }  changeElementContent = { changeElementContent } savedHeader={element.header} deleteElement = { deleteElement }/>:
                                    <></>,)
    }
    <div style={ {height: "200px"} }>
        <AddElement makeDecision={ makeDecision }/>
    </div>
    
    </div>
  )
}

export default memo(PostElements)
