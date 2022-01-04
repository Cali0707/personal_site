import React, {useState} from "react";
import "./ContactMe.css";
import Header from "../components/Header";
import {Subtitle, TextSection} from "../components/text/text";
import TextInput from "../components/form/TextInput";
import Button from "../components/form/Button";
import Loading from "../components/helpers/Loading";
import SocialMediaButtons from "../components/socials/SocialMediaButtons";
import {SocialMediaTile} from "../components/socials/SocialMediaButtons";

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
        <TextInput label={"Name"} type={"text"} value={name} width={"calc(100vw - 96px)"} onChange={(text)=>setName(text)} />
        <TextInput label={"Email"} type={"text"} value={email} width={"calc(100vw - 96px)"} onChange={(text)=>setEmail(text)} />
        <TextInput label={"Subject"} type={"text"} value={subject} width={"calc(100vw - 96px)"} onChange={(text)=>setSubject(text)} />
        <TextInput label={"Message"} width={"calc(100vw - 96px)"} type={"textArea"} value={message} onChange={(text)=>setMessage(text)} />
        <div style={{textAlign: "center"}}>
            <Button onClick={handleSubmit} label={"Submit"} style={{margin: '12px auto'}}/>
        </div>
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
                {/*<SocialMediaTile url={"www.instagram.com"} svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>}/>*/}
                <SocialMediaButtons />
            </div>
        </div>
    )
}
