import React, {useState} from "react";
import './ProjectsPage.css'
import Card from "../components/project/Card";
import Header from "../components/Header";

export default function ProjectsPage ({projects}) {
    const [search, isSearching] = useState("");

    const handleSearch = (text) => {

    }

    const projectCards = projects.map(proj => {
        return <Card cardItem={proj} />
    })

    return (
        <div className={"project-list"}>
            <Header
                imageLink={'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'}
                title={"Projects"}
            />
            <div className={"card-display"}>
                {projectCards}
            </div>
        </div>
    )
}