import React from "react"; 

interface IProp {
    urlGit: string,
    urlPhoto: string,
    name: string,
    alt?: string
}

export default function ContrItem({ name, urlGit, urlPhoto, alt="img" }: IProp) {

    return(
        <div className="Contr-Card" data-aos="zoom-in">
            <div className="Contr-Box">
                <img src={urlPhoto} alt={alt} className="Img"/>
                <span className="Contr-Name"><a href={urlGit}>{name}</a></span>
                <p><button className={`Contr-Stripe ${alt}`}>{alt}</button></p>
            </div>
        </div>
    )
}