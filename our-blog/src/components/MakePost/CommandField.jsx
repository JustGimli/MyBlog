import axios from 'axios';
import React, { useState } from 'react'


import CodeArea from './Areas/CodeArea';


const CommandField = () => {

    const [userInput, setInput] = useState()
    const [isSlesh, setSlesh] = useState(false)

    const helperWindow = <div className='helperWindow'>
                helper
            </div> 
        
    function handleUserInput(event) {
        const symbol = event.target.value

        if (symbol.slice(-1) === "/") {
            setSlesh(true)
        }

        setInput(symbol)
    }

    return (
        <>
            <img src="/home/jg/Pictures/Wallpapers/2.jpeg" alt="" />
            {isSlesh ? helperWindow : null}
            <textarea name="Userlog" cols="30" rows="10" onChange={handleUserInput} value={userInput}></textarea>
            <textarea name="View" id="" cols="30" rows="10"></textarea>
            
        </>

        
    
    );

}

export default CommandField
