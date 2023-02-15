import React, { useEffect, useState } from "react";

import FItem from "./f-item";
import axios from "axios";


export default function Featured(props: any) {

    const [list, setList] = useState<Array<object>>([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/features/")
        .then((responce) => {
            setList(responce.data)
        })
    }, [])
    
    const listItem = list.map((obj:any) => <FItem key={obj.title} title={obj.title} description={obj.description} aos={obj.aos} />)

    return(
        <section className="Features" id="features">
            <div className="max-width">
                <h2 className="title"> My Features
                <p>‒‒ <span>i can do a lot&gt;&lt;</span> ‒‒</p></h2>
                <div className="Features-list" >
                {listItem}
                </div>
            </div>
        </section>
    )
}  