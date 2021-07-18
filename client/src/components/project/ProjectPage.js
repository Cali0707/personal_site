import {Subtitle, TextSection} from '../text/text';
import Header from "../Header";
import TechDescription from "./TechDescription";
import Github from "../socials/Github";
import './ProjectPage.css';
import Timeline from "../Timeline";


export default function ProjectPage ({style, project}) {
    const {name, imageLink, descriptionLong, technologies, github, timeline} = project;

    const techDescriptions = technologies ? technologies.map((technology) => (
        <TechDescription technology={technology} />
    )) : null;

    return (
        <div style={style} className={"project-page"}>
            <Header title={name} imageLink={imageLink} />
            <div className={"project-content"} >
                <Subtitle>Overview</Subtitle>
                <TextSection>{descriptionLong}</TextSection>
                {technologies && <Subtitle>Technologies Used</Subtitle>}
                {technologies && techDescriptions}
                {timeline && <Subtitle>Timeline</Subtitle>}
                {timeline && <Timeline events={timeline} />}
                {github && <Subtitle>Links</Subtitle>}
                {github && <Github link={github} />}
            </div>
        </div>
    )
}
