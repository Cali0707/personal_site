import React from "react";
import './Title.css';

export default function Title ({children, style}) {
    return (
        <div className={"title"} style={style}>
            {children}
        </div>
    )
}
