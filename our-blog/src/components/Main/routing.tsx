import React, { useEffect, useState } from "react";
import { Stage, Layer, Rect, Circle } from "react-konva";
import Particles from "react-tsparticles";

import Navbar from '../navbar';
import Featured from './Features';
import Skills from './skills/skills';
import Contributors from "./Contributors/contr";
import ScrollUp from "../scrollUp"
import Home from "./home";
import Canvas from "./Canvas";

import particlesConfig from "./particles/particlesConfig";






export default function MainPage({props}: any) {

    return (
        <>
            
            
            <Navbar/>
            <div className='background' style={{ "background": "#121212"}}>
            
            
            <Home/>
            
                
            
            
            
            
            <Featured/>
            <Skills/>
            <Contributors />
            <ScrollUp />

            
            
            </div>

            


        </>
    )
}