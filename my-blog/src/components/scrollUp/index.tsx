import React from "react";

import {ImArrowUp} from 'react-icons/im'

export default function ScrollUp(props: any) {
    const Up = () => {
        window.scrollTo(0,0)
    }

    return (
        <div className="ScrollUp" data-aos="scrollUp" onClick={Up}>
            <ImArrowUp />
        </div>
    )
}