import React from "react";

import Navbar from "../navbar";
import List from "./PostList/List";
import ScrollUp from "../scrollUp";

export default function Posts(props: any) {
    return(
        <>
            <Navbar />
            <div className="Background">
                <div className="max-width">
                    <List />
                    <ScrollUp />
                </div>
            </div>
        </>
    )  
}