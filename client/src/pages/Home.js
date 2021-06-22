import React from "react";
import './Home.css';
import {Subtitle, TextSection, Title} from '../components/text/text';
import TextInput from "../components/form/TextInput";
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
                <img className={"profile"} src={"https://avatars.githubusercontent.com/u/65566908?v=4"} alt={"A picture of me"}/>
                <div className={"about-me-text"}>
                    <Subtitle>About Me</Subtitle>
                    <TextSection>Hi! My name is Calum, I'm in the Engineering Science class of 2024 at the University of Toronto, and I will probably end up in one of
                        the Machine Intelligence, Robotics, or ECE majors after second year.
                        I chose Engineering Science because I really enjoy learning the theory behind how things work and then applying it to make things work.
                        <br/><br/>I am able to take initiative and think analytically
                        and creatively to solve problems. I am able to learn quickly, work well under pressure, balance competing priorities, and deliver results.
                        I aim to foster a collaborative environment in every project I work on, and I can both work independently and take on leadership roles.
                    </TextSection>
                </div>
            </div>
            <div className={"navigation"}>
                <Button onClick={()=>{handleClick("/projects")}} label={"View my Projects"} large/>
                <Button onClick={()=>{handleClick('/interests')}} label={"Interests"} large />
                <Button onClick={()=>{handleClick('/contact')}} label={"Contact Me"} large />
            </div>

        </div>

    )
}
