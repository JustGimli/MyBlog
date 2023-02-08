import React from "react";

interface IProp {
    title: string,
    description: string,
    aos: string
}

export default function FItem({ title, description, aos }:IProp) {
    return(
        <>
            <div className="card" >
                <div className="box" data-aos={aos}>
                    <div className="title">{title}</div>
                    <p className="descript">{description}</p>
                </div>
            </div>
        </>
    )
} 