import React from "react";
import Subtitle from "../text/Subtitle";
import './TextInput.css';
import propTypes from 'prop-types';

export default function TextInput(props){
    const [label, setLabelState] = React.useState("");
    const inputChange = (text) => {
        let labelState = (text !== '') ? 'textBoxLabelFadeIn' : 'textBoxLabelFadeOut';
        props.onChange(text);
        setLabelState(labelState);
    }
    const _style = {width: props.width, border: (props.error!==undefined&&props.error!==false)?"2px solid red":""}
    const inputElem = (props.type==='textArea') ?
        <textarea
            style={{..._style, resize: 'none'}}
            className={"formTextBox textParagraph"}
            onChange={(event) => (inputChange(event.target.value))}
            placeholder={props.label}
            value={props.value}
        /> :
        <input
            style={_style}
            className={"formTextBox textParagraph"}
            type={props.type}
            onChange={(event) => (inputChange(event.target.value))}
            placeholder={props.label}
            value={props.value}
        />
    return(
        <div>
            <div style={{opacity:0}} className={label}><Subtitle style={{fontSize: "16px", textAlign: "left"}}>{props.label}</Subtitle></div>
            {inputElem}
        </div>
    )
}

TextInput.propTypes = {
    label: propTypes.string.isRequired,
    error: propTypes.bool,
    type: propTypes.oneOf(["textArea", "input"]).isRequired,
    required: propTypes.bool,
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
}
