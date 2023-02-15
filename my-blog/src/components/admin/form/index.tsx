import React, { useState } from "react";
import { Form } from "react-router-dom";

export default function FormItem(props: any) {
    const [name, SetName] = useState()
    const [pass, SetPass] = useState()

    function handleChange(e: any) {
        SetName(e.target.value)
    }

    function handlePass(e: any) {
        SetPass(e.target.value)
    }

    return (
        <div className="Styles">
            <div className="Form-div">
                <form action="" method="post" className="Form-Form" >Login:
                        <input type="text" name="login" onChange={handleChange} value={name}/>
                        Password
                        <input type="password" name="password" onChange={handlePass} value={pass}/>
                        <input type="button" value="Submit" className="Form-button"/>
                </form>
            </div>
        </div>
    )
} 