import React from "react";
import { Outlet, Link } from "react-router-dom";

class Header extends React.Component{
    constructor(props: any){
        super(props)
        this.state = {
            onTop: true
        } 

    }

    mainMenu = ["Home", "Features", "Skills", "Contributors"]
    listItem = this.mainMenu.map((str) => <li key={str}><a href={`/#${str}`.toLowerCase()}>{str}</a></li>)

    render(): React.ReactNode {
        return(
            
            <div className="max-width"> 
                <div className="Header-Menu">
                    <div className="logo">
                        <a href="https://github.com/JustGimli">Just<span className="Header-Span">Gimli</span></a>
                    </div>
                    <ul>
                        {window.innerWidth >= 600 ?this.listItem:this.listItem[0]}
                        <li key={"Posts"}><Link to="/posts">Posts </Link></li>
                    </ul>
                </div>
                <Outlet/>
            </div>
            
        )
    }
}

export default Header