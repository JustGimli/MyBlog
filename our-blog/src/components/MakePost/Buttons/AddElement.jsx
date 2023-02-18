import React, { memo } from 'react'
import {
    MdControlPoint,
    MdOutlineDeleteOutline
} from "react-icons/md";

const AddElement = ({ makeDecision }) => {

    

  return (
    <div className='Add-main'>
      <div className="dropdown">
                <MdControlPoint className="icon" id='addArea' />
                <div className="dropdown-content">
                    <a href="#" onClick={e => makeDecision(e, {"type": "code"})}>Код</a>
                    <a href="#"  onClick={e => makeDecision(e, {"type": "text"})}>Текст</a>
                    <a href="#"  onClick={e => makeDecision(e, {"type": "image"})}>Картинка</a>
                </div>
            </div>
    </div>
  )
}

export default memo(AddElement)
