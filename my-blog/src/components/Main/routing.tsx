import React from "react";

import Navbar from '../navbar';
import Featured from './Features';
import Skills from './skills/skills';
import Contributors from "./Contributors/contr";
import ScrollUp from "../scrollUp"
import Home from "./home";

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