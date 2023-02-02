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

    render(): React.ReactNode {
        return(
            <div className="Header-Menu" data-aos="header"
            data-aos-offset='500' data-aos-anchor-placement="top-center"
            data-aos-duration="1500">
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Stats</li>
                </ul>
            </div>
        )
    }
}

export default Header