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
                    <TextSection>Hi! My name is Calum, and I'm studying Engineering Science at the University of Toronto.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aliquid amet aperiam at atque commodi consequuntur cupiditate dicta dignissimos distinctio dolorem earum, eligendi esse eveniet expedita fugiat impedit ipsa laborum maxime mollitia odio quasi ratione repellendus tempora temporibus veritatis?
                    </TextSection>
                </div>
            </div>
            <div className={"navigation"}>
                <Button onClick={()=>{handleClick("/projects")}} label={"View my Projects"} large/>
                <Button onClick={()=>{}} label={"Contact Me"} large />
            </div>

        </div>

    )
}
