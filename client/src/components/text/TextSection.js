import React from "react";
import "./TextSection.css"

export default function TextSection ({children, style}) {
    return (
        <div className={"text-section"} style={style}>
            {children}
        </div>
    )
}