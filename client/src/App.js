import './App.css';
import ProjectPage from "./components/project/ProjectPage";
import projects from "./utils/project";
import interests from './utils/interests';
import React, {useState} from "react";
import {BrowserRouter, Route, Redirect, Switch, useHistory} from "react-router-dom";
import Home from "./pages/Home";
import CardsPage from "./pages/ProjectsPage";
import ContactMe from "./pages/ContactMe";
import Timeline from "./components/Timeline";
import Interests from "./pages/Interests";
import DropdownSelect from "./components/form/DropdownSelect";
import Education from "./pages/Education";

/* TODO
- Refactor Projects & Interests pages into component
- Populate Projects page
- Make popup modal
- make Education page
- Make Employment page
 */

function App() {

    return (
       <Switch>
           {projects.map(proj => {
               return(<Route path={proj.path} exact render={()=><ProjectPage project={proj} />} />)
           })}
           {interests.map(interest => {
               return(<Route path={interest.path} exact render={()=><ProjectPage project={interest} />} />)
           })}
           <Route path={'/projects'} exact render={()=><CardsPage projects={projects} selected={[]}/>} />
           <Route path={'/contact'} exact component={ContactMe} />
           <Route path={'/interests'} exact render={()=><Interests interests={interests} />} />
           <Route path={'/education'} component={Education} />
           <Route path={'/'} render={()=><Home />} />

       </Switch>
    );
}

export default App;
