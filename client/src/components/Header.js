import React from "react";
import {Title} from "./text/text";
import './Header.css';

export default function Header ({imageLink, title}) {
    return (
        <div className={"header"} style={{backgroundImage: `linear-gradient(rgba(19,23,27,0),rgba(19,23,27,20) 95%, rgba(19,23,27,100)),url(${imageLink})`}}>
            <Title style={{margin: "auto"}}>{title}</Title>
        </div>
    )
}
