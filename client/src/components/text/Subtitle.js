import React from "react";
import "./Subtitle.css"

export default function Subtitle ({children, style, isMinor}) {
    const className = "subtitle " + (isMinor ? "is-minor" : "");
    return (
        <div className={className} style={style}>
            {children}
        </div>
    )
}
