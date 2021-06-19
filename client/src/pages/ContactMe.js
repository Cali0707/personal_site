import React, {useState} from "react";
import "./ContactMe.css";
import {useHistory} from "react-router-dom";
import Header from "../components/Header";
import {Subtitle, TextSection} from "../components/text/text";
import TextInput from "../components/form/TextInput";
import Button from "../components/form/Button";

export default function ContactMe () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        console.table([name, email, message])
    }

    return (
        <div className={'contact-page'}>
            <Header imageLink={"https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"}
                    title={"Contact Me"} />
            <div className={"contact-page-content"}>
                <Subtitle>Contact Form</Subtitle>
                <TextSection>Thank you for your interest in contacting me! In order to reach out, please complete the form below and I will reply
                    within 1-2 business days.
                </TextSection>
                <div>
                    <TextInput label={"Name"} type={"text"} value={name} width={"50vw"} onChange={(text)=>setName(text)} />
                    <TextInput label={"Email"} type={"text"} value={email} width={"50vw"} onChange={(text)=>setEmail(text)} />
                </div>
                <TextInput label={"Message"} width={"50vw"} type={"textArea"} value={message} onChange={(text)=>setMessage(text)} />
                <Button onClick={handleSubmit} label={"Submit"} style={{margin: '12px 0'}}/>
                <Subtitle>Social Media</Subtitle>
                <TextSection>Feel free to follow me on my social medias, and to reach out to me there as well.
                </TextSection>
            </div>
        </div>
    )
}
