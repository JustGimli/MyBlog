import React, { useCallback } from "react";

import Navbar from '../navbar';
import Featured from './Features';
import Skills from './skills/skills';
import Contributors from "./Contributors/contr";
import ScrollUp from "../scrollUp"
import Home from "./home";

// particles
import Particles from "react-tsparticles";
import { polygonPathName, loadPolygonPath } from "tsparticles-path-polygon";



export default function MainPage(props) {
    
    const particlesInit = useCallback(async (engine) => {
        await loadPolygonPath(engine);
      }, []);

    
    return (
        <>
            <Navbar/>
            <Particles id="tsparticles" options={part} init={particlesInit} />
            <Home/>
            <Featured/>
            <Skills/>
            <Contributors />
            <ScrollUp />    
        </>
    )
}


const part = {
    fpsLimit: 60,
    particles: {
      color: {
        value: "#990000",
        animation: {
          enable: true,
          speed: 1
        }
      },
      move: {
        attract: {
          enable: true,
          rotate: {
            distance: 100,
            x: 2000,
            y: 2000
          }
        },
        direction: "none",
        enable: true,
        outModes: {
          default: "destroy"
        },
        path: {
          clamp: false,
          enable: true,
          delay: {
            value: 0
          },
          generator: polygonPathName,
          options: {
            sides: 6,
            turnSteps: 30,
            angle: 30
          }
        },
        random: false,
        speed: 3,
        straight: true,
        trail: {
          fillColor: "#000",
          length: 20,
          enable: true
        }
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 0
      },
      opacity: {
        value: 1
      },
      shape: {
        type: "circle"
      },
      size: {
        value: 2
      }
    },
    background: {
      color: "#3c5570"
    },
    fullScreen: {
      zIndex: -1
    },
    detectRetina: true,
    emitters: {
      direction: "none",
      rate: {
        quantity: 1,
        delay: 0.25
      },
      size: {
        width: 0,
        height: 0
      },
      position: {
        x: 50,
        y: 50
      }
    }
  }