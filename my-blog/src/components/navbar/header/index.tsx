import React from "react";

interface IProp{

}

class Header extends React.Component{
    constructor(props: any){
        super(props)
        this.state = {
            onTop: true
        }

    }

    mainMenu = ["Home", "Features", "Stats", "Posts", "Contact"]
    listItem = this.mainMenu.map((str) => <li key={str}><a href={`#${str}`.toLowerCase()}>{str}</a></li>)

    render(): React.ReactNode {
        return(
            <div className="max-width">
                <div className="Header-Menu">
                    <div className="logo">
                        <a href="https://github.com/JustGimli">Just<span className="Header-Span">Gimli</span></a>
                    </div>
                    <ul>{this.listItem}</ul>
                </div>
            </div>
            
        )
    }
}

export default Header