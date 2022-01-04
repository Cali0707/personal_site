import React from 'react'
import './Timeline.css'
import {Subtitle, TextSection} from "./text/text";
import Button from "./form/Button";
import {useHistory} from "react-router-dom";

function TimelineItem({title, date, info, links}) {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    const history = useHistory();
    let body;

    if (links) {
        const buttons = links.map(l => {
            const handleClick = () => {
                history.push(l.url)
            }
            return <Button onClick={handleClick} label={l.title} />
        })
        body = <div className={`timelineItemContent fadeInSection ${isVisible ? 'isVisible' : ''}`} ref={domRef}>
                <Subtitle>{title}</Subtitle>
                <time>{date}</time>
                <TextSection>{info}</TextSection>
                {buttons}
                <span className={"circle"}/>
            </div>
    } else {
        body = <div className={`timelineItemContent fadeInSection ${isVisible ? 'isVisible' : ''}`} ref={domRef}>
                <Subtitle>{title}</Subtitle>
                <time>{date}</time>
                <TextSection>{info}</TextSection>
                <span className={"circle"}/>
            </div>
    }

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        const current = domRef.current;
        observer.observe(current);
        return () => observer.unobserve(current);
    }, []);

    return (
        <div className={"timelineItem"}>
            {body}
        </div>
    )
}

export default function Timeline({events}){
    const timelineEvents = events.map((event, i) => (
        <TimelineItem date={event.date} title={event.title} info={event.info} key={event.title+i.toString()}/>
    ));
    return(
        events.length > 0 && (
            <div className={"timelineContainer"}>
                {timelineEvents}
            </div>
        )
    )
}
