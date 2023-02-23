import axios, { AxiosError } from "axios";
import React, {  useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Token, TokenContext } from "./context/token";

interface LoginForm {
    login: string,
    password: string
}

export default function FormItem(props: any) {
    const [elem ,setElem] = useState<React.ReactElement | null>(null)
    const [data, setData] = useState<LoginForm>({
        login: "",
        password: ""})
    const navigate = useNavigate()
    const {token, updateToken} = useContext(Token) as TokenContext

    function handleChange(e: any) {
        setData({...data,
        [e.target.name]: e.target.value
        })
    }

    function handleAction(e:any) {
        axios.post("http://127.0.0.1:8000/token/", {
            "username": data["login"],
            "password": data["password"]
        })
        .then((responce) => {
            console.log(responce.data.token)
            updateToken(responce.data.token)
            console.log(token)
            navigate('/make-post', {replace: true})

        }) 
        .catch((reason: AxiosError<{additionalInfo:string}>) => {
                setElem(
                    <div className="Form-error">
                        <span>Incorrect username of password</span>
                    </div>)
        })
        setData({
            login: "",
            password: ""
        })
    }


    return (
        <div className="Styles">
            <div className="Form-div">
            
                <form  method="post" className="Form-Form" >Login:
                        <input type="text" name="login" onChange={handleChange} />
                        Password
                        <input type="password" name="password" onChange={handleChange} />
                        {elem}
                        <button  className="Form-button" onClick={handleAction} type="reset">Submit</button> 
                        
                </form>
                
            </div>
        </div>
    )
} 