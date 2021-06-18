import React from "react";
import "./TextLink.css";

export default function ({link, text}) {
    return (
        <a className={'text-link'} href={link}>
            {text}
        </a>
    )
}
