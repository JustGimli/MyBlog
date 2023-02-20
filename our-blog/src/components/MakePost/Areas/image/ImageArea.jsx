import React, { useState, useEffect } from 'react'


export default function ImageItem() {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);


    function onImageChange(e) {
        // const elem = (document.getElementById("photo") as HTMLInputElement)
        

        if (e.target.files.length != 0  && images !== []){
            setImages([e.target.files]);
            console.log(images);
            let url = URL.createObjectURL(images[0])
            setImageURLs([url]);
            console.log(imageURLs);
        }
        
    }

    return (
        <div className="Image-Item">
            <input type="file" multiple  accept='image/*' onClick={e => onImageChange(e)} />
            { imageURLs.map((imageSrc, idx) => <img src={ imageSrc } key={ Date.now() }  style={{ width: "200px" }}/>) }
            {/* <button onClick={handleSubmit}>Submit</button>
             */}
             
        </div>
    )
}
