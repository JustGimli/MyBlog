import React from "react";

import Navbar from "../navbar";
import PostList from "./PostList/List";

export default function Posts(props: any) {
    return(
        <>
            <Navbar />
            <div className="Background">
                <div className="max-width">
                    <PostList />
                </div>
            </div>
        </>
    )
}