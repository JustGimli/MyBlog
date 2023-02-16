import axios, { AxiosError } from "axios";
import React, {  useState } from "react";

interface LoginForm {
    login: string,
    password: string
}

export default function FormItem(props: any) {
    const [elem ,setElem] = useState<React.ReactElement | null>(null)
    const [data, setData] = useState<LoginForm>({
        login: "",
        password: ""
    })

    function handleChange(e: any) {
        setData({...data,
        [e.target.name]: e.target.value
        })
    }

    function handleAction(e:any) {
        axios.post("http://127.0.0.1:8000/login/", {
            "login": data["login"],
            "password": data["password"]
        })
        .then((responce) => {
            console.log(responce)
        }) 
        .catch((reason: AxiosError<{additionalInfo:string}>) => {
            if (reason.response!.status === 404) {
                setElem(
                    <div className="Form-error">
                        <span>Incorrect username or password</span>
                    </div>)
            }
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