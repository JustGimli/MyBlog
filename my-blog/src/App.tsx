import React, { useEffect }  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Main/navbar';
import Featured from './components/Main/Features';
import Skills from './components/Main/skills/skills';

import './App.scss'



function App() {

    useEffect(() =>{
        AOS.init();
    }, [])

    return (
        <>  
        <Navbar/>
        {/* <BrowserRouter> */}
            {/* <Routes> */}
                {/* <Route path='/'> */}
                    <div className='background' style={{ "background": "#121212"}}>
                    <canvas style={{"height": "100%", "width": "100%"}}></canvas>
                    {/* <div>
                        <StarRating />
                    </div> */}
                    <Featured/>
                    <Skills/>
                </div>
                {/* </Route> */}
                {/* <Route path='/posts'></Route> */}
            {/* </Routes> */}
        {/* </BrowserRouter> */}

            
        
        </>
    );
} 

export default App; 