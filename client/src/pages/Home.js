import React from "react";
import './Home.css';
import {Subtitle, TextSection} from '../components/text/text';
import Button from "../components/form/Button";
import Header from "../components/Header";
import {useHistory} from "react-router-dom";

export default function Home () {

    let history = useHistory();

    const handleClick = (link) => {
        history.push(link)
    }

    const imageLink = "https://images.unsplash.com/photo-1618143416214-16501f28d943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"

    return(
        <div className={"home"}>
            <Header imageLink={imageLink} title={"Calum Murray"} history={history} isHome/>
            <div className={"about-me"}>
                <img className={"profile"} src={"https://avatars.githubusercontent.com/u/65566908?v=4"} alt={"My profile"}/>
                <div className={"about-me-text"}>
                    <Subtitle>About Me</Subtitle>
                    <TextSection>My name is Calum, and I'm in the Engineering Science class of 2024 at the University of Toronto. I will likely choose either
                        the Machine Intelligence or ECE major after second year.
                        I chose Engineering Science because I really enjoy learning the theory behind how things work and then applying it to make things work better.
                        <br/><br/>When solving problems, I think both analytically and creatively. I learn quickly, take initiative, work well under pressure,
                        balance competing priorities, and deliver results. I work hard to foster a collaborative environment in all of my projects, and I can both work independently
                        and take on leadership roles.
                    </TextSection>
                </div>
            </div>
            <div className={"navigation"}>
                <Button onClick={()=>{handleClick("/projects")}} label={"Projects"} large/>
                <Button onClick={()=>{handleClick('/education')}} label={"Education"} large />
                <Button onClick={()=>{handleClick("/experience")}} label={"Experience"} large />
                <Button onClick={()=>{handleClick('/interests')}} label={"Interests"} large />
                <Button onClick={()=>{handleClick('/contact')}} label={"Contact"} large />
            </div>
        </div>
    )
}
