import React, { Component } from 'react';
import List from "../components/ListItems/List";
import axios from "axios";

export default class Directory extends Component {

    state = {
        employees: []
      };
    
      componentDidMount() {
        this.getEmployees();
      }
    
      getEmployees = () => {
        axios
          .get("https://randomuser.me/api/?results=10")
          .then((response) => {
            this.setState({
              employees: response.data.results,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      };

    render() {
        return (
            <div>
                <List employees={this.state.employees} />
            </div>
        )
    }
}
