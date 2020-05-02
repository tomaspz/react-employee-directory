import React from 'react';
import { Link } from 'react-router-dom';
// import { browserHistory } from "react-router";
// import { useHistory } from "react-router-dom";

const Table = (props) => {

  // function getSortedData(data, prop, isAsc) {
  //   return data.sort((a, b) => {
  //       return (a[prop] < b[prop] ? -1 : 1) * (isAsc ? 1 : -1)
  //   });
  // }
  
  return (
    <div className="container">

      <div className="row justify-content-center">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col"><button className="btn btn-outline-success my-2 my-sm-0" type="button">First Name</button></th>
              <th scope="col"><button className="btn btn-outline-success my-2 my-sm-0" type="button">Last Name</button></th>
              <th scope="col">Email</th>
              <th scope="col">Cell</th>
            </tr>
          </thead>
          <tbody>
            {props.employeesToDisplay.map((employee, index) => {
              return (
                <tr key={index}>
                  <td><img src={employee.picture.thumbnail} alt="employee avatar" /></td>
                  <td>{employee.name.first}</td>
                  <td>{employee.name.last}</td>
                  <td>{employee.email}</td>
                  <td>{employee.cell}</td>
                  <td>
                    <Link to={{
                      pathname: "/details",
                      state: {
                        employee: employee 
                      }
                    }} id={employee.login.uuid} className="btn btn-outline-success my-2 my-sm-0" role="button">Details
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Table;