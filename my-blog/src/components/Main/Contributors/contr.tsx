import React from "react";

import list from "./ex.json";
import ContrItem from "./contrItem";

export default function Contributors(props:any) {

    const Contr = list.Contr.map((obj) =>  <ContrItem urlGit={obj.href_git} urlPhoto={obj.href_photo} name={obj.name} alt={obj.alt} />)

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