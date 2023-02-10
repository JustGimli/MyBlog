import React from "react";

import Item from "./PostItem";

import ex from "./ex.json";

export default function PostList(props: any) {

    const Items = ex.Posts.map( obj => <Item  key={obj.title} urlImg={obj.urlImg} title={obj.title} views={obj.views} text={obj.text} /> )

    return (
        <div className="PostList"> 
            {Items}
        </div>

    )
}