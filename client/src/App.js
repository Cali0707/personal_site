import './App.css';
import ProjectCard from "./components/project/ProjectCard";
import ProjectPage from "./components/project/ProjectPage";
import project from "./utils/project";
import {Title} from "./components/text/text";

function App() {
  return (
    <div className="App">
        {/*<div className={"project-grid"}>*/}
        {/*    /!*<ProjectCard project={project}/>*!/*/}
        {/*    /!*<ProjectCard project={project}/>*!/*/}
        {/*    /!*<ProjectCard project={project}/>*!/*/}
        {/*    */}
        {/*</div>*/}
        <ProjectPage project={project} />
    </div>
  );
}

export default App;
