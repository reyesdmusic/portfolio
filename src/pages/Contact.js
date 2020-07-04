import React from "react";
import "./style.css";


function Contact() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-12 d-flex justify-content-center">

        <div id="my-card" class="card align-items-center">
          <div className="card-body">
            <div className="d-flex justify-content-center">
              <ul>
                <li>LOCATION <a id="my-link">Richmond, VA</a></li>
                <li>MOBILE <a id="my-link">(786) 355-4531</a></li>
                <li>GITHUB <a id="my-link" href="https://github.com/reyesdmusic" target="_blank" rel="noopener noreferrer">github.com/reyesdmusic</a></li>
                <li>LINKEDIN <a id="my-link" href="https://www.linkedin.com/in/danny-reyes-dev/" target="_blank" rel="noopener noreferrer">linkedin.com/in/danny-reyes-dev</a></li>
                <li>EMAIL <a id="my-link" href="mailto:reyesdmusic@gmail.com">reyesdmusic@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      
      </div>
    </div>

  );
}

export default Contact;
