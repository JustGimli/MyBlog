import React, { useState } from 'react'

import DeleteElement from '../../Buttons/DeleteElement';


const HeaderArea = ({ idx, changeElementContent, savedHeader, deleteElement }) => {
    const [header, setHeader] = useState(savedHeader);
    
    function handleChange(e){
      setHeader(e.target.value);
      let updatedData = {
        'type': 'header',
        'header': header
      }
      changeElementContent(idx, updatedData);
    }
  return (
    <>
        <div className="Delete-Box">
            <DeleteElement deleteElement = { deleteElement } idx = { idx } />    
        </div>
        <div className='header'>
            <textarea className='headerText'  name="text" id="text" cols="30" rows="1" value={ header } onChange={e => handleChange(e) }></textarea> 
        </div>
    </>
   
  )
}

export default HeaderArea
