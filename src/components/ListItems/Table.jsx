import React from 'react'

const Table = (props) => {

  return (
    <div className="container">

      <div className="row justify-content-center">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
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