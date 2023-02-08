import React from "react";

import MyFeatures from "./features.json"
import FItem from "./f-item";


export default function Featured(props: any) {
    const listItem = MyFeatures.Features.map((obj) => <FItem key={obj.title} title={obj.title} description={obj.description} aos={obj.aos} />)

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