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

    mainMenu = ["Home", "Featured", "Stats"]
    listItem = this.mainMenu.map((str) => <li key={str}>{str}</li>)

    render(): React.ReactNode {
        return(
            <div className="Header-Menu" data-aos="header"
            data-aos-offset='500' data-aos-anchor-placement="top-center"
            data-aos-duration="1500">
                <span>Just</span><span style={{"color": "red"}}>Gimli</span>
                <ul>{this.listItem}</ul>
            </div>
        )
    }
}

export default Header