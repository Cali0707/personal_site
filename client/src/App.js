import './App.css';
import ProjectPage from "./components/project/ProjectPage";
import projects from "./utils/project";
import React from "react";
import {BrowserRouter, Route, Redirect, Switch, useHistory} from "react-router-dom";
import Home from "./pages/Home";
import ProjectList from "./pages/ProjectList";

function App() {
    // const routerRef = React.useRef();
    // let history = useHistory();
    //
    // React.useEffect(() => {
    //     handlePageChange(window.location.pathname);
    // }, []);
    //
    // function handlePageChange (link) {
    //     history.push(link)
    // }

    return (
       <BrowserRouter>
           <Switch>
               {projects.map(proj => {
                   return(<Route path={proj.path} exact render={()=><ProjectPage project={proj}/>} />)
               })}
               <Route path={'/projects'} exact render={()=><ProjectList projects={projects} />} />
               <Route path={'/'} component={Home} />
           </Switch>
       </BrowserRouter>
    );
}

export default App;
