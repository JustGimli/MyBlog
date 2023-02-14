import React, {useEffect, useState} from "react";
import axios from "axios";

import SkillItem from "./s-item";


export default function Skills(props:any) {


    const [list, setList] = useState<Array<object>>([])
    
    useEffect(()=> {
        axios.get("http://127.0.0.1:8000/skills/")
        .then((responce) => {
            setList(responce.data)

        })
    }, [])

    const arrSkills = list.map((obj:any) => <SkillItem  key={obj.title} title={obj.title} rate={obj.rate} /> )
    return (
        <section className="Skills" id="skills">
        <div className="max-width">
                <h2 className="title">My Skills 
                <p>‒‒ <span>I'm something known</span> ‒‒</p>
                </h2> 
                <div className="skills-list">
                    {arrSkills}
                </div>
            </div>
        </section>
    )
}  