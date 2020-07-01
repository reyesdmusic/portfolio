import React from "react";

/// Take in the results, which is an array of all employees, and create a table for each employee with all of his or her data.
 
function ResultList(props) {
  return ( 

    <table className="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
          <th>Department</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>

        {props.results.map(result => (

          <tr>
            <td>{result.id}</td>
            <td>{result.employee_name}</td>
            <td>{result.employee_age}</td>
            <td>{result.employee_salary}</td>
            <td>{result.department}</td>
            <td>{result.role}</td>
          </tr>

        ))}

      </tbody>
    </table>

  );
}

export default ResultList;
