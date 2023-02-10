import React from "react";
import { Outlet, Link } from "react-router-dom";

interface IProp{

}

class Header extends React.Component{
    constructor(props: any){
        super(props)
        this.state = {
            onTop: true
        }

    }

    mainMenu = ["Home", "Features", "Skills", "Contributors"]
    listItem = this.mainMenu.map((str) => <li key={str}><a href={`#${str}`.toLowerCase()}>{str}</a></li>)

    render(): React.ReactNode {
        return(
            
            <div className="max-width">
                <div className="Header-Menu">
                    <div className="logo">
                        <a href="https://github.com/JustGimli">Just<span className="Header-Span">Gimli</span></a>
                    </div>
                    <ul>{this.listItem}
                        <Link to="/posts"><li key={"Posts"}>Posts</li></Link>
                    </ul>
                </div>
                <Outlet/>
            </div>
            
        )
    }
}

export default Header