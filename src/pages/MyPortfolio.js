import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "./projectsInfo";

function MyPortfolio() {

    return (

        <div  className="row justify-content-center">
          
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        image={project.image}
                        url={project.url}
                        gitURL={project.gitURL}
                    />
                ))}
                </div>
             
         
    )
}

export default MyPortfolio;
