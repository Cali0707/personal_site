import './App.css';
import Project from "./components/project/ProjectPage";
import project from "./utils/project";

function App() {
  return (
    <div className="App">
      <Project project={project}/>
    </div>
  );
}

export default App;
