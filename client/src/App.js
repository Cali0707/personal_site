import './App.css';
import ProjectPage from "./components/project/ProjectPage";
import projects from "./utils/project";
import React from "react";
import {BrowserRouter, Route, Redirect, Switch, useHistory} from "react-router-dom";
import Home from "./pages/Home";
import ProjectList from "./pages/ProjectList";
import ContactMe from "./pages/ContactMe";

function App() {

    return (
       <Switch>
           {projects.map(proj => {
               return(<Route path={proj.path} exact render={()=><ProjectPage project={proj}/>} />)
           })}
           <Route path={'/projects'} exact render={()=><ProjectList projects={projects} />} />
           <Route path={'/contact'} component={ContactMe} />
           <Route path={'/'} render={()=><Home />} />

       </Switch>
    );
}

export default App;
