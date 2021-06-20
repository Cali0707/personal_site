import './App.css';
import ProjectPage from "./components/project/ProjectPage";
import projects from "./utils/project";
import interests from './utils/interests';
import React from "react";
import {BrowserRouter, Route, Redirect, Switch, useHistory} from "react-router-dom";
import Home from "./pages/Home";
import CardsPage from "./pages/ProjectsPage";
import ContactMe from "./pages/ContactMe";
import Timeline from "./components/Timeline";
import Interests from "./pages/Interests";
import DropdownSelect from "./components/form/DropdownSelect";

/* TODO
- Populate Interests page
- Refactor Projects & Interests pages into component
- Make My Interests page
- Populate Projects page
- Use local storage to prevent multiple emails (maybe also some kind of server side stop)
- Make popup modal
- Make loading animation
- make Education page
- Make Employment page
 */

function App() {

    return (
       // <Switch>
       //     {projects.map(proj => {
       //         return(<Route path={proj.path} exact render={()=><ProjectPage project={proj}/>} />)
       //     })}
       //     <Route path={'/projects'} exact render={()=><CardsPage projects={projects} />} />
       //     <Route path={'/contact'} component={ContactMe} />
       //     <Route path={'/interests'} render={()=><Interests interests={interests} />} />
       //     <Route path={'/'} render={()=><Home />} />
       //
       // </Switch>
        <DropdownSelect />
    );
}

export default App;
