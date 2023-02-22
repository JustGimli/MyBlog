import React, { useState, ChangeEvent} from 'react'

import DeleteElement from '../../Buttons/DeleteElement';

interface Props{
    idx: number,
    changeElementContent: Function,
    savedURL: string,
    deleteElement: Function
}

export interface NewData{
    type: string,
    url: string 
}

export default function ImageItem({ idx, changeElementContent, savedURL, deleteElement }:Props) {
const [images, setImages] = useState<File | null>();
const [imageURLs, setImageURLs] = useState<string>(savedURL);

    
   

    function onImageChange(e: ChangeEvent<HTMLInputElement>) {        
        if (e.target.files?.length !== 0) {
            const url = URL.createObjectURL(e.target.files![0])
            setImages(e.target.files![0])
            setImageURLs(url)
            
            
            const data = {
                'type': "image",
                'file': e.target.files![0],
                'url': e.target.files![0].name
            }

              changeElementContent(idx, data);
        }
    }

    return (
        <div className="Image-Item">
            {images ==null ? 
            <input type="file" multiple  accept='image/*' onChange={e => onImageChange(e)} />:
            <img src={ imageURLs } key={ Date.now() } className="Img-Form" alt={imageURLs}/> }
            <DeleteElement deleteElement = { deleteElement } idx = { idx } />
        </div>
    )
}
 
