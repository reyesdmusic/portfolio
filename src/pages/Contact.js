import React, { Component } from "react";
import employees from "../utils/employees";
import ResultList from "../components/ResultList";



class Contact extends Component {
  state = {
    results: []
  };

  
 
  componentDidMount() {

    this.setState({ results: employees })

  }

  

  render() {
    return (
      <div>
        <h1 className="text-center">All Employees</h1>
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default Contact;
