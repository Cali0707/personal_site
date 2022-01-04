import React from "react";
import "./Experience.css";
import Timeline from "../components/Timeline";
import Header from "../components/Header";
import Button from "../components/form/Button"
import {useHistory} from "react-router-dom";

const imageLink = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80";


export default function Experience () {

    const history = useHistory();

    const handleClick = (link) => {
        history.push(link)
    }

    const experience = [
        {
            title: "Webmaster at University of Toronto Engineering Cannonball Committee",
            date: "September 2021 - Present",
            info: <ul>
                    <li>
                        Developed all aspects of an eCommerce website to sell tickets for UofT Engineering’s annual dinner dance, the Cannonball. This website handled over $50k in transactions, including over $14k in 45 minutes.
                        <Button onClick={() => handleClick("/projects/cannonball-website")} label={"View this project"}/>
                    </li>
                </ul>
        },
        {
            title: "Junior Software Engineer at JMA Consulting",
            date: "May 2021 - September 2021",
            info: <ul>
                    <li>
                        Designed, developed, and tested a Wix Application to allow charities to generate and distribute Canada Revenue Agency compliant receipts whenever a donation is made on their site.
                    </li>
                    <li>
                        Implemented using React, Node.js, Express, MySQL, Amazon SES, OAuth and React props that followed the Wix style guide.
                    </li>
                    <li>
                        Enabled admins to configure which products and collections of products in Wix were charitable donations.
                    </li>
                    <li>
                        Provided admins with receipt configuration options including the company name and logo, the CFO signature, and a message.
                    </li>
                    <li>
                        Created an admin dashboard showing generated receipts with selectable sort criteria.
                    </li>
                    <li>
                        <Button onClick={() => handleClick("/projects/wix-charitable-receipts-application")} label={"View this project"}/>
                    </li>
                </ul>
        },
        {
            title: "Tech Team Member at University of Toronto Engineering Orientation Committee",
            date: "May 2021 - September 2021",
            info: <ul>
                    <li>
                        Developed custom calendar and timeline components in React.
                        <Button onClick={() => handleClick("/projects/f!rosh-website")} label={"View this project"}/>
                    </li>
                    <li>
                        Developed an FAQ page which allowed Frosh to sort by category and search questions, or submit questions, which other members of the Orientation committee could reply to in a Google sheet, automatically updating the FAQ responses.
                        <Button onClick={() => handleClick("/projects/f!rosh-website")} label={"View this project"}/>
                    </li>
                    <li>
                        Helped develop a discord bot which allowed Frosh to submit items to the scavenger hunt.
                        <Button onClick={() => handleClick("/projects/f!rosh-discord-bot")} label={"View this project"}/>
                    </li>
                    <li>
                        Led development of a cross-platform application in Flutter/Dart, which was published to the App Store (the Google Play store review took too long). The app allowed Frosh to see what activity they were currently participating in, their upcoming schedule, and to use a personal QR code to be signed at each event. This QR-code sign in reduced event sign in time by over 50% compared to previous years.
                        <Button onClick={() => handleClick("/projects/f!rosh-app")} label={"View this project"}/>
                    </li>
                </ul>
        },
        {
            title: "Junior Developer at JMA Consulting",
            date: "June 2020 - September 2020",
            info: <ul>
                    <li>
                        Developed the UI for an iOS/Android application for Autism Ontario in compliance with their existing design guidelines using Flutter/Dart.
                        <Button onClick={() => handleClick("/projects/autism-ontario-app")} label={"View this project"}/>
                    </li>
                    <li>
                        Migrated the company’s projects, issues, comments, and attachments from JIRA to Gitlab by developing a Python script to interact with their APIs.
                        <Button onClick={() => handleClick("/projects/jira-gitlab-migration")} label={"View this project"}/>
                    </li>
                    <li>Performed QA on a variety of sites, including Drupal, WordPress, and Apache Solr systems. </li>
                </ul>
        },

    ]


    return (
        <div className={"experience-page"}>
            <Header imageLink={imageLink} title={"Experience"} />
            <Timeline events={experience}/>
        </div>
    )
}
