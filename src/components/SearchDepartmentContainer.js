import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import employees from "../utils/employees";

class SearchDepartmentContainer extends Component {
 
  state = {
    search: "",
    results: [],
    departments: [],
    searchedDepartment: []
  };

  componentDidMount() {

  // When this component mounts, set the state.results to the array of all employees imported from utils/employees.json

    this.setState({ results: employees })
  
  // Push department name for each employee into apiDepartments

    let apiDepartments = [];

    employees.map(employee => (
      apiDepartments.push(employee.department)

    ))

  // Set state.departments to all unique department names in apiDepartments. In other words, the Array.from removing all name duplicates, so that each department name only appears once.

    this.setState({ departments: Array.from(new Set(apiDepartments)) })

  }

  // Using the query, ie. the department name submitted by the user, filter through the employees array and get us all the data for any employee whose department matches the query.

  searchEmployee = query => {
    this.setState({ searchedDepartment: employees.filter(employee => employee.department === query) })
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

    // Send pertinent info to SearchForm and send the data from the user's searched department to the ResultList component
    return (
      <div>

        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          names={this.state.departments}
        />
        <ResultList results={this.state.searchedDepartment} />

      </div>
    );
  }
}

export default SearchDepartmentContainer;
