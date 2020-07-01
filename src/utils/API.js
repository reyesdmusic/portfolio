import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getAllEmployees: function() {
    return axios.get("http://dummy.restapiexample.com/api/v1/employees");
  }
};
