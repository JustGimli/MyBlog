import axios from 'axios';
import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import CodeArea from './Areas/CodeArea';


const CommandField = () => {
    const codeString = 'def main():\n print("Hello world")';

    // cosnt [image, setImage] = useState('');
    
    // function changeFile(e){
    //     let file = e.target.files[0];
    //     setImage(file);
        
    // }

    // function postFile(){
    //     let formData = new FormData();
    //     let file = file;

    //     formData.append('photo', file);
    //     formData.append('text', 'Офигенная статья');
    //     formData.append('views', 113);
    //     formData.append('title', 'Мессенджер');

    //     const response = axios({
    //         url: '/make-post',
    //         method: 'POST',
    //         data: formData
    //     })

    //     console.log(response, response.data);
    // }

    return (
        <>
            <CodeArea />
            {/* <form action="">
                <input type="file" name="фото" onChange={e => changeFile(e) }/>
                <button onClick={ postFile } >Отправить</button>
            </form> */}
            
        </>

        
    
    );

}

export default CommandField
