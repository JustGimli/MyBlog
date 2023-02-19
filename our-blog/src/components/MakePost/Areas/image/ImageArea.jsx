import React from 'react'

const ImageArea = ({ idx, changeElementContent }) => {
  function handleFileChange(e){
    console.log(e.target.value);
  }
  return (
    <div>
      <input type="file" accept='.jpg .jpeg .png .gif' onChange={e=> handleFileChange(e) }/>
    </div>
  )
}

export default ImageArea
