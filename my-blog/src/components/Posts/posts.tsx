import React from "react";

import Navbar from "../navbar";
import PostList from "./PostList/List";
import ScrollUp from "../scrollUp";

export default function Posts(props: any) {
    return(
        <>
            <Navbar />
            <div className="Background">
                <div className="max-width">
                    <PostList />
                    <ScrollUp />
                </div>
            </div>
        </>
    )  
}