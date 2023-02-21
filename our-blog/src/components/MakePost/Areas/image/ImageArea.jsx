
import React, { useState, ChangeEvent, useEffect } from 'react'
import axios from 'axios';

import DeleteElement from '../../Buttons/DeleteElement';

// interface Props{
//     idx: number,
//     changeElementContent: Function,
//     savedURL: string,
//     deleteElement: Function
// }

// export interface NewData{
//     type: string,
//     url: string 
// }

export default function ImageItem({ idx, changeElementContent, savedURL, deleteElement }) {
const [images, setImages] = useState();
const [imageURLs, setImageURLs] = useState(savedURL);

    
   

    function onImageChange(e) {        
        if (e.target.files?.length !== 0) {
            const url = URL.createObjectURL(e.target.files[0])
            setImages(e.target.files[0])
            setImageURLs(url)

            const data = {
                type: "image",
                url: url
            }

              changeElementContent(idx, data);
        }
    }

    function handleSubmit(e){
        // e.prevent.Default();
        console.log('Отправка');
        const data = new FormData() 
        data.append('image', images);

        
        let url = "http://localhost:8000/post-image/";

        axios.post(url, data, { // receive two parameter endpoint url ,form data 
            headers: {
                'content-type': 'multipart/form-data'
              }
        })
        .then(res => { // then print response status
            console.warn(res);
        })
    }

    return (
        <div className="Image-Item">
            
            <input type="file" multiple  accept='image/*' onChange={e => onImageChange(e)} />
            <img src={ imageURLs } key={ Date.now() } className="Img-Form" alt={imageURLs}/> 
            <DeleteElement deleteElement = { deleteElement } idx = { idx } />
           
                
            <button onClick={e => handleSubmit(e)}>Отправить</button>
        
        </div>
    )
}
 
