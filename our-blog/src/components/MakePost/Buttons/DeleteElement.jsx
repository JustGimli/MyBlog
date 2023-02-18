
import React, { memo } from 'react'
import {
    MdControlPoint,
    MdOutlineDeleteOutline
} from "react-icons/md";

const DeleteElement = ({ idx, deleteElement }) => {
  return (
    <div className='Delete-main'>
      <div className="dropdown">
                <MdOutlineDeleteOutline className="icon" id='addArea' />
                <div className="dropdown-content">
                    <a href="#" onClick={e => deleteElement(idx)}>Удалить</a>
                </div>
            </div>
    </div>
  )
}

export default memo(DeleteElement)
