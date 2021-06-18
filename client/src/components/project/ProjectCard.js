import React from "react";
import './ProjectCard.css';

export default function ProjectCard ({project}) {
    return (
        <div className={"project-card"} style={{backgroundImage: `url(${project.imageLink})`}}>
            <div className={"project-card-content"}>
                <h2 className={"project-card-title"}>
                    {project.name}
                </h2>
                <p className={"project-card-body"}>
                    {project.description}
                </p>
                <a className={"project-button"} href={project.path}>Learn More</a>
            </div>
        </div>
    )
}
