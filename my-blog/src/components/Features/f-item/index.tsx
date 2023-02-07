import React from "react";

interface IProp {
    title: string,
    description: string,
    aos: string
}

export default function FItem({ title, description, aos }:IProp) {
    return(
        <>
            <div className="card" data-aos={aos}>
                <div className="box">
                    <div className="title">{title}</div>
                    <p className="descript">{description}</p>
                </div>
            </div>
        </>
    )
}