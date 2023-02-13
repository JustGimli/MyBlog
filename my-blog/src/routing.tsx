import React from "react";

import Navbar from './components/navbar';
import Featured from './components/Main/Features';
import Skills from './components/Main/skills/skills';
import Contributors from "./components/Main/Contributors/contr";
import ScrollUp from "./components/scrollUp"
import Home from "./components/Main/home";

export default function MainPage(props:any) {
    return (
        <>
            <Navbar/>
            <div className='background' style={{ "background": "#121212"}}>
            
            <canvas style={{"height": "100%", "width": "100%", "position":"absolute"}}></canvas>
            <Home/>
            <Featured/>
            <Skills/>
            <Contributors />
            <ScrollUp />
            </div>
        </>
    )
}