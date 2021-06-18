import React from "react";
import './Title.css';

export default function Title ({children, style, isMinor}) {
    const className = "title " + (isMinor ? "is-minor" : "");
    return (
        <div className={className} style={style}>
            {children}
        </div>
    )
}
