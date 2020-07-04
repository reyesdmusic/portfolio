import React from "react";
import image from "./profile-pic.jpg";
import resume from "./danny_reyes_resume2.pdf";
import "./style.css";

function About() {
  return (
    <div id="about-container" className="row justify-content-center">
      <div className="col-md-6 d-flex justify-content-center">

        <div id="my-card" class="card align-items-center">
          <img id="my-profile-pic" className="card-img-top" src={image} alt="Danny Reyes" />
          <div className="card-body">
            <div className="d-flex justify-content-center">
              <a id="my-link" href="https://github.com/reyesdmusic" target="_blank" rel="noopener noreferrer">GITHUB</a>
              <a id="my-link" href="https://www.linkedin.com/in/danny-reyes-dev/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
              <a id="my-link" href={resume} target="_blank" rel="noopener noreferrer">RESUME</a>
              <a id="my-link" href="mailto:reyesdmusic@gmail.com">EMAIL</a>
            </div>
            <p className="card-text">I’m a Full Stack Web developer with a creative spirit. A self-starter who works well independently but also thrives in teams. Always eager to learn, I'm coachable and excited about coding.</p>
            <p className="card-text">I recently received a full stack coding certificate from the University of Richmond coding bootcamp.</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
