import React from "react";
import ListSkills from "./sList.json";
import SkillItem from "./s-item";

export default function Skills(props:any) {

    const arrSkills = ListSkills.Instuments.map((obj) => <SkillItem  key={obj.title} title={obj.title} rate={obj.rate} /> )
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