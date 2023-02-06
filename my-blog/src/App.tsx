import React, { useEffect }  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/navbar';
import StarRating from './components/starRating';


import './App.scss'



function App() {

    useEffect(() =>{
        AOS.init();
    }, [])

    return (
        <>  
        <div>
            <Navbar/>
        </div>
        <div style={{"height": "100px"}}></div>
        <div>
            <StarRating />
        </div>
        </>
    );
}

export default App;
