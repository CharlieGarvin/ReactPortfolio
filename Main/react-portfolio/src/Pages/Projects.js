import React from "react";
import ProjectItem from "../components/ProjectItem";
// import Img through assests file path

function Projects() {
    return (
        <div className="projects">
            <h1>My Personal Projects</h1>
            <div className="projectList">
                <ProjectItem name="Project Name"  />
                <ProjectItem />
            </div>
        </div>
    )
}

export default Projects;