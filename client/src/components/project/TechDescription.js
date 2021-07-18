import React from "react";
import './TechDescription.css';
import {Subtitle, TextSection} from "../text/text";
import Button from '../form/Button'
import {useHistory} from "react-router-dom";

export default function TechDescription ({technology, style}) {

    const history = useHistory()

    const handleClick = () => {
        history.push('/projects', {selected: [{label: technology.name, value: technology.name}]})
    }

    return (
        <div className={"tech-description"} style={style}>
            <Subtitle isMinor={true}>{technology.name}</Subtitle>
            <TextSection>{technology.use}</TextSection>
            <Button onClick={handleClick} label={`See my other projects using ${technology.name}`} />
        </div>
    )
}
