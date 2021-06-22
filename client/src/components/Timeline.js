import React from 'react'
import './Timeline.css'
import {Subtitle, TextSection} from "./text/text";

function TimelineItem({title, date, info}) {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
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
            <div className={`timelineItemContent fadeInSection ${isVisible ? 'isVisible' : ''}`} ref={domRef}>
                <Subtitle>{title}</Subtitle>
                <time>{date}</time>
                <TextSection>{info}</TextSection>
                <span className={"circle"}/>
            </div>
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
