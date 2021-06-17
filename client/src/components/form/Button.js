import React from "react";
import './Button.css'
import propTypes from "prop-types"

export default function Button(props) {
    return(
        <div onClick={props.onClick} className={"button " + (props.large ? 'buttonLarge' : '')}>
            {props.label}
        </div>
    )
}

Button.propTypes = {
    onClick: propTypes.func.isRequired,
    large: propTypes.bool,
    label: propTypes.string.isRequired
}