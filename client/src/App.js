import './App.css';
import ProjectCard from "./components/project/ProjectCard";
import project from "./utils/project";

function App() {
  return (
    <div className="App">
        <div className={"project-grid"}>
            <ProjectCard project={project}/>
            <ProjectCard project={project}/>
            <ProjectCard project={project}/>
        </div>
    </div>
  );
}

export default App;
