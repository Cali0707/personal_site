import {Subtitle, TextSection} from '../text/text';
import Header from "../Header";
import TechDescription from "./TechDescription";
import Github from "../socials/Github";
import './ProjectPage.css';
import Timeline from "../Timeline";
import {useEffect} from "react";


export default function ProjectPage ({style, project}) {
    const {name, imageLink, descriptionLong, technologies, github, timeline} = project;

    const overview = descriptionLong.map(d => {
        if (d.type === "image") {
            return <img alt={d.alt} src={d.src}/>
        } else {
            return (
                <>
                    <TextSection>{d.text}</TextSection>
                    <br/>
                </>
            )
        }
    })

    const techDescriptions = technologies ? technologies.map((technology) => (
        <TechDescription technology={technology} />
    )) : null;

    useEffect(() => {
        window.scrollTo(0,0)
    }, []);

    return (
        <div style={style} className={"project-page"}>
            <Header title={name} imageLink={imageLink} />
            <div className={"project-content"} >
                <Subtitle>Overview</Subtitle>
                {overview}
                {technologies && <Subtitle>Technologies Used</Subtitle>}
                {technologies && techDescriptions}
                {timeline && <Subtitle>Timeline</Subtitle>}
                {timeline && <Timeline events={timeline} />}
                <br/>
                {github && <Subtitle>Links</Subtitle>}
                {github && <Github link={github} />}
            </div>
        </div>
    )
}
