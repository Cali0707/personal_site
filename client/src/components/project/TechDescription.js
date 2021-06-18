import React from "react";
import './TechDescription.css';
import {Subtitle, TextSection, TextLink} from "../text/text";

export default function TechDescription ({technology, style}) {
    return (
        <div className={"tech-description"} style={style}>
            <Subtitle isMinor={true}>{technology.name}</Subtitle>
            <TextSection>{technology.use}</TextSection>
            <TextLink link={'#'} text={`See my other projects using ${technology.name}`}/>
        </div>
    )
}
