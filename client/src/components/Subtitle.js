import React from "react";
import "./Subtitle.css"

export default function Subtitle ({children, style}) {
    return (
        <div className={"subtitle"}>
            {children}
        </div>
    )
}