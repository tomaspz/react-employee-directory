import React, { Component } from 'react';
// import List from "../components/ListItems/List";
import Table from "../components/ListItems/Table";
import axios from 'axios';


export default class Directory extends Component {

  state = {
    employees: [],
    employeesToDisplay: [],
    searchTerm: "",
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => {
        // console.log(response.data.results);
        this.setState({
          employees: response.data.results,
          employeesToDisplay: response.data.results
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // HANDLESUBMIT FUNCTION - SEARCH FOR EMAIL

  handleSubmit = (event) => {
    event.preventDefault();
    const employees = [...this.state.employees];
    const filteredEmployees = employees.filter(employee => {
        // return employee.name.last.includes(this.state.searchTerm);
        const regex = new RegExp(this.state.searchTerm, 'gi');
        return employee.name.last.match(regex);
    });
    this.setState({
      employeesToDisplay: filteredEmployees
    })
  }

  // HANDLECHANGE FUNCTION

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <div className="row justify-content-center" style={{ backgroundColor: 'darkslategrey', color: 'white', textAlign: 'center', margin: 20 }}>
          <h1 style={{marginLeft: 30}}>Employee Directory</h1>
          <hr />
          {/* SEARCH FORM */}
          <form className="form-inline" onSubmit={this.handleSubmit} style={{marginRight: 30}}>
                <input 
                  className="form-control mr-sm-2" 
                  type="text" 
                  placeholder="Search By Last Name" 
                  aria-label="Search"
                  name="searchTerm"
                  value={this.state.searchTerm}
                  onChange={this.handleChange}
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
        {/* <List employees={this.state.employees} /> */}
        <Table 
          employees={this.state.employees} 
          employeesToDisplay={this.state.employeesToDisplay}
          searchTerm={this.state.searchTerm}
        />
      </div>
    )
  }
}
