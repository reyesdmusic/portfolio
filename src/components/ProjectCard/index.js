import React from "react";
import "./style.css";

function ProjectCard(props) {

    return (

        <div id="profile-card" className="card align-items-center">
            <div className="card-header text-center">
                <a href={props.url} target="_blank" rel="noopener noreferrer">
                    <img id="my-project-image" className="img-fluid hover-outline" src={props.image} alt={props.title} />
                </a>
            </div>
            <div className="card-body text-center">
                <h3>
                    <a id="my-header" href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a>
                </h3>
            </div>
            <div className="card-footer text-center">
                <p className="mt-3">
                    <a id="project-link" href={props.gitURL} target="_blank" rel="noopener noreferrer">{props.title} Github Repo Link</a>
                </p>
            </div>
        </div>

    )
}


export default ProjectCard;