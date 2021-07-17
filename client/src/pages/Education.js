import React from "react";
import './Education.css';
import Timeline from "../components/Timeline";
import Header from "../components/Header";
import events from "../utils/education";

const imageLink = "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

export default function Education () {


    return (
        <div className={"education-page"}>
            <Header imageLink={imageLink} title={"Education"} />
            <Timeline events={events} />
        </div>
    )
}
