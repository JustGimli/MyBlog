import React, {  useState, useEffect } from "react";


import ContrItem from "./contrItem";
import axios from "axios";

export default function Contributors(props:any) {

    const [list, setList] = useState<Array<object>>([])

    useEffect(()=> {
        axios.get("http://127.0.0.1:8000/contributors/")
        .then((responce) => {
            setList(responce.data)
        })
    }, [])

    const Contr = list.map((obj:any) =>  <ContrItem  key={obj.name} urlGit={obj.href_git} urlPhoto={`http://127.0.0.1:8000/${obj.photo}`} name={obj.name} alt={obj.alt} />)
    
    return (
        <>
            <section className="Contr" id="contributors">
                <div className="max-width">
                    <h2 className="title">Contributors
                        <p>‒‒ <span>amazing people</span> ‒‒</p>
                    </h2> 
                    <div className="Contr-List">
                            {Contr}
                    </div>
                </div>
            </section>
            <footer className="Footer">
                <span> 
                    JustGimli <a href="#features" >Donate</a> | <a href="https://github.com/JustGimli" target="_blank" rel="unfollow noreferrer">Email Us</a>
                </span> 
            </footer>
        </>
    ) 
}