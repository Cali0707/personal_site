import './App.css';
import ProjectPage from "./components/project/ProjectPage";
import projects from "./utils/project";
import React from "react";
import {BrowserRouter, Route, Redirect, Switch, useHistory} from "react-router-dom";
import Home from "./pages/Home";
import ProjectList from "./pages/ProjectList";
import ContactMe from "./pages/ContactMe";
import Timeline from "./components/Timeline";

/* TODO
- Make timeline component
- Make My Interests page
- Populate Projects page
- Use local storage to prevent multiple emails (maybe also some kind of server side stop)
- Make popup modal
- Make loading animation
- make Education page
- Make Employment page
 */

const events = [
    {
        title: 'Something here',
        date: "July 07 2021",
        info: "This is a paragraph with some test info"
    },
    {
        title: 'Something else here',
        date: "July 21 2021",
        info: "This is a paragraph with some test info"
    },
    {
        title: 'Some other event',
        date: 'July 22 2021',
        info: "This is a paragraph with some test info"
    },
    {
        title: 'A test event',
        date: 'July 24 2021',
        info: "This is a paragraph with some test info"
    },
    {
        title: 'Some other event',
        date: 'July 22 2021',
        info: "This is a paragraph with some test info"
    },
    {
        title: 'A test event',
        date: 'July 24 2021',
        info: "This is a paragraph with some test info"
    },
    {
        title: 'Some other event',
        date: 'July 25 2021',
        info: "This is a paragraph with some test info"
    },
    {
        title: 'A test event',
        date: 'July 26 2021',
        info: "This is a paragraph with some test info"
    },
    {
        title: 'Some other event',
        date: 'July 27 2021',
        info: "This is a paragraph with some test info"
    },
    {
        title: 'A test event',
        date: 'July 28 2021',
        info: "This is a paragraph with some test info"
    },
    {
        title: 'Some other event',
        date: 'July 29 2021',
        info: "This is a paragraph with some test info"
    },
    {
        title: 'A test event',
        date: 'July 30 2021',
        info: "This is a paragraph with some test info"
    },
    {
        title: 'Some other event',
        date: 'July 31 2021',
        info: "This is a paragraph with some test info"
    },
    {
        title: 'A test event',
        date: 'August 1 2021',
        info: "This is a paragraph with some test info"
    },
]

function App() {

    return (
       // <Switch>
       //     {projects.map(proj => {
       //         return(<Route path={proj.path} exact render={()=><ProjectPage project={proj}/>} />)
       //     })}
       //     <Route path={'/projects'} exact render={()=><ProjectList projects={projects} />} />
       //     <Route path={'/contact'} component={ContactMe} />
       //     <Route path={'/'} render={()=><Home />} />
       //
       // </Switch>

        <Timeline events={events}/>
    );
}

export default App;
