import React from "react";

function SearchForm(props) {

  return (

    /*In datalist, show all names of either employees, departments, or roles sent in through props */

    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="search"
          id="search"
          list="names"
        />
       <datalist id="names">
          {props.names.map(name => (
            <option value={name} key={name} />
          ))}
        </datalist> 

        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
