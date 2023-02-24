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
                    <a href="#" onClick={e => makeDecision(e, {"type": "code", "code": "", "language": "Язык"})}>Код</a>
                    <a href="#"  onClick={e => makeDecision(e, {"type": "text", "text": ""})}>Текст</a>
                    <a href="#"  onClick={e => makeDecision(e, {"type": "image", "url": ""})}>Картинка</a>
                    <a href="#"  onClick={e => makeDecision(e, {"type": "header", "header": ""})}>Заголовок</a>
                </div>
            </div>
    </div>
  )
}

export default memo(AddElement)
