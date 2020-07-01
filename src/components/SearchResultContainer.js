import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
import employees from "../utils/employees";



class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    names: [],
    searchedEmployee: []
  };

  
  componentDidMount() {

    // When this component mounts, set the state.results to the array of all employees imported from utils/employees.json

    this.setState({ results: employees })

    // Push employee name for each employee into apiNames

    let apiNames = [];

    employees.map(employee => (
      apiNames.push(employee.employee_name)
      
    ))

    // Set state.names to all the emplyee names in apiNames.

    this.setState({ names: apiNames })
      
  }

  // Using the query, ie. the emplyee name submitted by the user, filter through the employees array and get us all the data for any employee whose name matches the query.

  searchEmployee = query => {
    this.setState({ searchedEmployee: employees.filter(employee => employee.employee_name === query )})
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

    // Send pertinent info to SearchForm and send the data from the user's search to the ResultList component
    
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          names={this.state.names}
        />
        <ResultList results={this.state.searchedEmployee} />
      </div>
    );
  }
}

export default SearchResultContainer;
