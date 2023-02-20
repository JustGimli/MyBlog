import React, { useState, ChangeEvent } from 'react'

export default function ImageItem({ }) {
    const [images, setImages] = useState<File | null>();
    const [imageURLs, setImageURLs] = useState<string>();


    function onImageChange(e: ChangeEvent<HTMLInputElement>) {        
        if (e.target.files?.length !== 0) {
            setImages(e.target.files![0])
            setImageURLs(URL.createObjectURL(e.target.files![0]))
        }
        
    }

    return (
        <div className="Image-Item">
            {images ==null ? 
            <input type="file" multiple  accept='image/*' onChange={e => onImageChange(e)} />:
            <img src={ imageURLs } key={ Date.now() } className="Img-Form" alt={imageURLs}/> }
        </div>
    )
}
 