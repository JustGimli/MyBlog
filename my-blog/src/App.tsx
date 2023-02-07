import React, { useEffect }  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/navbar';
import StarRating from './components/starRating';
import Featured from './components/Features';

import './App.scss'



function App() {

    useEffect(() =>{
        AOS.init();
    }, [])

    return (
        <>  
            <Navbar/>
        <div className='background' style={{ "background": "#121212"}}>
            <canvas style={{"height": "100%", "width": "100%"}}></canvas>
            {/* <div>
                <StarRating />
            </div> */}
            <Featured/>
        </div>
        </>
    );
} 

export default App;