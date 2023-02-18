import React, { useState } from 'react'

const TextArea = () => {
  const [text, setText] = useState('');

  function handleChange(e){
    setText(e.target.value);
  }
  return (
    <div className='text-Area'>
      <textarea className='textarea'  name="text" id="text" cols="30" rows="10" value={ text } onChange={e => handleChange(e) }></textarea>
      
      
      
    </div>
  )
}

export default TextArea
