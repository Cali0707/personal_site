import React from "react";
import Button from "../form/Button";
import './ProjectCard.css';
import {useHistory} from "react-router-dom";

export default function ProjectCard ({project}) {
    const history = useHistory();

    const handleClick = () => {
        history.push(project.path)
    }

    return (
        <div className={"project-card"} style={{backgroundImage: `url(${project.imageLink})`}}>
            <div className={"project-card-content"}>
                <h2 className={"project-card-title"}>
                    {project.name}
                </h2>
                <p className={"project-card-body"}>
                    {project.description}
                </p>
                <Button onClick={handleClick} label={"Learn more"}/>
            </div>
        </div>
    )
}
