import React, {useState} from "react";
import './ProjectsPage.css'
import Card from "../components/project/Card";
import Header from "../components/Header";
import {Dropdown, DropdownButton} from "react-bootstrap";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";

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
            <DropdownButton id="dropdown-basic-button" title="Dropdown button" className={"dropdown-button"}>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <div className={"card-display"}>
                {projectCards}
            </div>
        </div>
    )
}
