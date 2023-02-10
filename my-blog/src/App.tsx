import React, { useEffect }  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import MainPage from './routing';
import ErrorPage from './components/error-page';

import './App.scss'



function App() {

    useEffect(() =>{
        AOS.init(
            {duration: 900}
        );
    }, [])

    return (
        <>
        
        <BrowserRouter> 
            <Routes> 
                <Route path='/' errorElement={<ErrorPage/>} element={<MainPage />}></Route> 
                <Route path='/posts' errorElement={<ErrorPage/>}></Route>
            </Routes> 
        </BrowserRouter> 

            
        
        </>
    );
} 

export default App; 