import React, {useState} from "react";
import "./ContactMe.css";
import Header from "../components/Header";
import {Subtitle, TextSection} from "../components/text/text";
import TextInput from "../components/form/TextInput";
import Button from "../components/form/Button";
import Loading from "../components/helpers/Loading";

const url = '/email'

export default function ContactMe () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = () => {
        if(!isSuccess){
            setLoading(true)
            const requestOptions = {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                })
            };
            fetch(url, requestOptions)
                .then(response => response.json())
                .then(data => {
                    setIsSuccess(data.message === "Email sent successfully!");
                    setLoading(false);
                })
        }

    }

    const contactForm = loading ? <Loading /> : (<div>
        <TextInput label={"Name"} type={"text"} value={name} width={"50vw"} onChange={(text)=>setName(text)} />
        <TextInput label={"Email"} type={"text"} value={email} width={"50vw"} onChange={(text)=>setEmail(text)} />
        <TextInput label={"Subject"} type={"text"} value={subject} width={"50vw"} onChange={(text)=>setSubject(text)} />
        <TextInput label={"Message"} width={"50vw"} type={"textArea"} value={message} onChange={(text)=>setMessage(text)} />
        <Button onClick={handleSubmit} label={"Submit"} style={{margin: '12px 0'}}/>
    </div>)

    return (
        <div className={'contact-page'}>
            <Header imageLink={"https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"}
                    title={"Contact Me"} />
            <div className={"contact-page-content"}>
                <Subtitle>Contact Form</Subtitle>
                <TextSection>Thank you for your interest in contacting me! In order to reach out, please complete the form below.
                </TextSection>
                {!isSuccess ? contactForm : <div><Subtitle>Success</Subtitle><TextSection>Thank you for reaching out! I will reply within 1-2 business days.</TextSection></div>}
                <Subtitle>Social Media</Subtitle>
                <TextSection>
                    Feel free to follow my social media accounts.
                </TextSection>
            </div>
        </div>
    )
}
