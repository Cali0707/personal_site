import {Title, Subtitle, TextSection} from '../text/text';
import Header from "../Header";
import TechDescription from "./TechDescription";
import Github from "../socials/Github";
import './ProjectPage.css';


export default function ProjectPage ({style, project}) {
    const {name, imageLink, description, technologies, github} = project;

    const techDescriptions = technologies.map((technology) => (
        <TechDescription technology={technology} />
    ))

    return (
        <div style={style} className={"project-page"}>
            {/*<div className={"project-header"} style={{backgroundImage: `linear-gradient(rgba(19,23,27,0),rgba(19,23,27,20) 95%, rgba(19,23,27,100)),url(${imageLink})`}}>*/}
            {/*    <Title style={{margin: "auto"}}>{name}</Title>*/}
            {/*</div>*/}
            <Header title={name} imageLink={imageLink} />
            <div className={"project-content"} >
                <Subtitle>Overview</Subtitle>
                <TextSection>{description}</TextSection>
                <Subtitle>Technologies Used</Subtitle>
                {techDescriptions}
                <Subtitle>Links</Subtitle>
                <Github link={github} />
            </div>
        </div>
    )
}
