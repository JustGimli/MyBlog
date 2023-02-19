import React from 'react'


export default function ImageItem(props:any) {

    function handleSubmit(e:any) {
        const elem = (document.getElementById("photo") as HTMLInputElement)
        console.log(elem?.files)
    }

    return (
        <div className="Image-Item">
            <input type="file" name="photo" id="photo"  accept='image/*' onClick={handleSubmit} />
            {/* <button onClick={handleSubmit}>Submit</button>
             */}
             
        </div>
    )
}
