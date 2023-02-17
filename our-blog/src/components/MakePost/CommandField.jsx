import axios from 'axios';
import React, { useState } from 'react'


import CodeArea from './Areas/CodeArea';


const CommandField = () => {
    

    return (
        <>
            <textarea name="Userlog" cols="30" rows="10"></textarea>
            <CodeArea />
            
        </>

        
    
    );

}

export default CommandField
