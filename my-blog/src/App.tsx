import React, { useEffect }  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/header';

import './App.scss'



function App() {

    useEffect(() =>{
        AOS.init();
    }, [])

    return (
        <>
        <Header></Header>
        </>
    );
}

export default App;
