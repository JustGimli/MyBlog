import React from "react";

import Navbar from './components/Main/navbar';
import Featured from './components/Main/Features';
import Skills from './components/Main/skills/skills';


export default function MainPage(props:any) {
    return (
        <>
            <Navbar/>
            <div className='background' style={{ "background": "#121212"}}>
            <canvas style={{"height": "100%", "width": "100%"}}></canvas>
            <Featured/>
            <Skills/>
            </div>
        </>
    )
}