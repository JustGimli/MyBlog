import React from "react";

import Header from "./header";

export default function Navbar(props:any) {
    return (
        <div className="navbar" data-aos="navbar"  data-aos-anchor-placement="top-top" data-aos-offset="300">
            <Header/>       
        </div>
    )
}