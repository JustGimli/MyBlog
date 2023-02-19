import React, { useState } from 'react'

import DeleteElement from '../../Buttons/DeleteElement';

const TextArea = ({ idx, changeElementContent, savedText, deleteElement }) => {

  const [text, setText] = useState(savedText);
  
  

  function handleChange(e){
    setText(e.target.value);
    let updatedData = {
      'type': 'text',
      'text': text
    }
    changeElementContent(idx, updatedData);
  }

  
  return (
    <div className='text-Area'>
      <textarea className='textarea'  name="text" id="text" cols="30" rows="10" value={ text } onChange={e => handleChange(e) }></textarea>
      
      <DeleteElement deleteElement = { deleteElement } idx = { idx } />
       
    </div>
  )
}

export default TextArea
