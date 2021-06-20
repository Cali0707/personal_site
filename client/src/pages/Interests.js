import React from "react";
import Header from "../components/Header";
import Card from "../components/project/Card";
import './Interests.css';
import {Subtitle, TextSection} from "../components/text/text";

export default function Interests ({interests}) {
    const interestCards = interests.map((interest) => (
        <Card cardItem={interest} />
    ))

    return (
        <div className={"interests-page"}>
            <Header imageLink={"https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2023&q=80"}
                title={"Interests"} />
            <div className={"interests-overview"}>
                <Subtitle>Overview</Subtitle>
                <TextSection>My interests range from fitness to food to music. Below you can see some of my specific interests</TextSection>
            </div>
            <div className={"interest-cards"}>
                {interestCards}
            </div>
        </div>

    )
}
