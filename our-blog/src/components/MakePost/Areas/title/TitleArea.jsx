import React, { useState } from 'react'

const TitleArea = ({ idx, changeElementContent, savedTitle }) => {
    
    const [title, setTitle] = useState(savedTitle);

    function handleChange(e){
        setTitle(e.target.value);
        let updatedData = {
          'type': 'title',
          'title': title
        }
        changeElementContent(idx, updatedData);
      }

  return (
    <div className='title'>
      <textarea name="title" id='title' className='titleText' cols="50" rows="2" value={ title } onChange={e => handleChange(e) }></textarea>
    </div>
  )
}

export default TitleArea
