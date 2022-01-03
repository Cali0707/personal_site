import React from "react";
import "./Experience.css";
import Timeline from "../components/Timeline";
import Header from "../components/Header";

const imageLink = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80";

export default function Experience () {


    return (
        <div className={"experience-page"}>
            <Header imageLink={imageLink} title={"Education"} />
            <Timeline events={[]} />
        </div>
    )
}
