import React, { useEffect, useState }  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './components/Main/routing';
import ErrorPage from './components/ErrorPage/error-page';
import Posts from './components/Posts/posts';
import Post from './components/Posts/OnePost/itemPost';
import CommandField from './components/MakePost/CommandField';
import FormItem from './components/admin/form';
import ProtectedRoute from './components/MakePost/protectedRoute';

import { Token } from './components/admin/form/context/token';

import './AppCss.scss'


function App() {
    const [token, setToken] = useState("")

    
    useEffect(() =>{
        AOS.init(
            {duration: 1200}
        );
    }, [])

    const updateToken = (token: string) => {
        setToken(token)
    }

    return (
        <>
        <Token.Provider value={{token, updateToken}}>
        <BrowserRouter> 
            <Routes> 
                <Route path='/' errorElement={<ErrorPage/>} element={<MainPage />}></Route> 
                <Route path='/posts' errorElement={<ErrorPage/>} element={<Posts/>} ></Route>
                <Route path='/posts/:id' errorElement={<ErrorPage/>} element={<Post/>} ></Route>
                <Route path='/make-post' errorElement={<ErrorPage/>} element={<ProtectedRoute><CommandField/></ProtectedRoute>} ></Route>
                <Route path='/login' errorElement={<ErrorPage/>} element={<FormItem/>} ></Route> 
                <Route path='*' element={<ErrorPage/>}></Route>
            </Routes> 
        </BrowserRouter> 
        </Token.Provider>
            
        
        </>
    );
} 


export default App; 