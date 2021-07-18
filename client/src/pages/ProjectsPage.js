import React, {useEffect, useState} from "react";
import './ProjectsPage.css'
import Card from "../components/project/Card";
import Header from "../components/Header";
import DropdownSelect from "../components/form/DropdownSelect";
import { useLocation } from "react-router-dom";


//Normal Sets do not consider objects with identical properties to be the same
class DeepSet extends Set {

  add (o) {
    for (let i of this) {
        if (this.deepCompare(o, i)){
            return this;
        }
    }
    super.add.call(this, o);
    return this;
  };

  deepCompare(o, i) {
    return JSON.stringify(o) === JSON.stringify(i)
  }
}




export default function ProjectsPage ({projects}) {

    const location = useLocation()
    const selected = location.state?.selected ?? [];
    const [selectedTech, setSelectedTech] = useState(selected);
    const[selectedProjects, setSelectedProjects] = useState(projects);
    const _technologies = new DeepSet()

    projects.forEach(project => {
        project.technologies.forEach(tech => {
            _technologies.add({label: tech.name, value: tech.name});
        })
        console.log(_technologies)

    })

    const projectCards = selectedProjects.map(proj => {
        return <Card cardItem={proj} />
    })

    const handleChange = (value) => {
        if (value.length === 0) {
            setSelectedProjects(projects);
        } else {
            const filtered  = projects.filter(project => {
                let res = false
                project.technologies.forEach(tech => {
                    value.forEach(e => {if(e.label === tech.name){res=true}})
                })
                return res;
            });
            setSelectedProjects(filtered)
        }

    }

    useEffect(() => handleChange(selectedTech), [selectedTech])

    const technologies = Array.from(_technologies).sort((a, b) => a.label.localeCompare(b.label));

    return (
        <div className={"project-list"}>
            <Header
                imageLink={'https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'}
                title={"Projects"}
            />
            <div className={"tech-selector"}>
                <DropdownSelect
                    value={selectedTech}
                    options={technologies}
                    onChanged={setSelectedTech}
                    strings={{
                        "selectSomeItems": "Select technologies to filter by",
                        "allItemsAreSelected": "All technologies are selected."
                    }}

                />
            </div>
            <div className={"card-display"}>
                {projectCards}
            </div>
        </div>
    )
}
