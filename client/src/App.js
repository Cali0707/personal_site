import './App.css';
import ProjectPage from "./components/project/ProjectPage";
import projects from "./utils/project";
import interests from './utils/interests';
import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import CardsPage from "./pages/ProjectsPage";
import ContactMe from "./pages/ContactMe";
import Interests from "./pages/Interests";
import Education from "./pages/Education";
import Experience from "./pages/Experience";

/* TODO
- Refactor Projects & Interests pages into component
- Make popup modal -> use this for filtering of projects
- Add social media links (probably instagram, linkedin, strava)
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
           <Route path={'/experience'} component={Experience} />
           <Route path={'/'} render={()=><Home />} />
       </Switch>
    );
}

export default App;
