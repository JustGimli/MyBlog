import React, { useEffect }  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import StarRating from './components/starRating';
import Header from './components/header';

import './App.scss'



function App() {

    useEffect(() =>{
        AOS.init();
    }, [])

    return (
        <>  
        <div><Header/></div>
        <div style={{"height": "500px"}}></div> 
        <div>
            <StarRating />
        </div>
        </>
    );
}

export default App;
