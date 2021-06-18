import React from "react";
import './ProjectCard.css';

export default function ProjectCard ({project}) {
    return (
        <div className={"project-card"}>
            <div className={"project-card-content"}>
                <h2 className={"project-card-title"}>
                    Some project
                </h2>
                <p className={"project-card-body"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, voluptate.
                </p>
                <a className={"project-button"} href={"#"}>Learn More</a>
            </div>
        </div>
    )
}
