import React, { useEffect, useState } from "react";
import { Stage, Layer, Rect, Circle } from "react-konva";

import Navbar from '../navbar';
import Featured from './Features';
import Skills from './skills/skills';
import Contributors from "./Contributors/contr";
import ScrollUp from "../scrollUp"
import Home from "./home";
import Canvas from "./Canvas";




export default function MainPage(props:any) {

    return (
        <>
            
            
            <Navbar/>
            <div className='background' style={{ "background": "#121212"}}>
            
            {/* <canvas style={{"height": "100%", "width": "100%", "position":"absolute"}} id="example">
            </canvas> */}

            {/* <Stage width={window.innerWidth} height={window.innerHeight} style={{position:'absolute'}}>
                
                <Layer>
                    <Canvas />
                    
                    
                </Layer>
            </Stage> */}
            <Home/>
            <Featured/>
            <Skills/>
            <Contributors />
            <ScrollUp />

            
            
            </div>

            


        </>
    )
}