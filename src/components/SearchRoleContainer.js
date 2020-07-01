import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import employees from "../utils/employees";

class SearchRoleContainer extends Component {
  state = {
    search: "",
    results: [],
    roles: [],
    searchedRole: []
  };

  componentDidMount() {
  
  // When this component mounts, set the state.results to the array of all employees imported from utils/employees.json

    this.setState({ results: employees })

  // Push roles for each employee into apiRoles

    let apiRoles = [];

    employees.map(employee => (
      apiRoles.push(employee.role)

    ))

  // Set state.roles to all unique role names in apiRoles. In other words, the Array.from removes all duplicates, so that each role only appears once.

    this.setState({ roles: Array.from(new Set(apiRoles)) })

  }

  // Using the query, ie. the role name submitted by the user, filter through the employees array and get us all the data for any employee whose role matches the query.

  searchEmployee = query => {
    this.setState({ searchedRole: employees.filter(employee => employee.role === query) })
  }

  // Will be used with onChange in SearchForm.js to render datalist results in real time

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, run searchEmployee with the query = `this.state.search`

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
  };

  render() {

    // Send pertinent info to SearchForm and send the data from the user's searched role to the ResultList component

    return ( 

      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          names={this.state.roles}
        />
        {/* <ResultList results={this.state.searchedRole} /> */}
      </div>

    
    );
  }
}

export default SearchRoleContainer;
