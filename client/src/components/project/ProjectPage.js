import {Title, Subtitle, TextSection} from '../text/text';
import './ProjectPage.css';


export default function Project ({style, project}) {
    const {name, imageLink, description, technologies, github} = project;

    const techDescriptions = technologies.map((technology) => (
        <>
            <Subtitle>{technology.name}</Subtitle>
            <TextSection>{technology.use}</TextSection>
        </>
    ))

    return (
        <div style={style}>
            <div className={"img-container"} style={{backgroundImage: `url(${imageLink})`}} />
            <div className={"project-page"} >
                <Title style={{textAlign: "center"}}>{name}</Title>
                <Subtitle>Overview</Subtitle>
                <TextSection>{description}</TextSection>
                {techDescriptions}
                <a href={github} />
            </div>
        </div>
    )
}
