import React, { useState } from 'react'

const Details = (props) => {
    const [employee] = useState(props.location.state.employee);

    return (
        <div>
            <div className="row justify-content-center" style={{ backgroundColor: 'darkslategrey', color: 'white', textAlign: 'center', margin: 20 }}>
                <h1 style={{ marginLeft: 30 }}>User Details</h1>
            </div>

            <div className="row justify-content-center">
                <div className="card">
                    <img src={employee.picture.medium} className="card-img-top" style={{ width: 300 }} alt="employee avatar" />

                    <div className="card-body">
                        <h2 className="card-title">{employee.name.first} {employee.name.last}</h2>
                        <p className="card-text"><strong>Address:</strong> <br></br>
                        {employee.location.street.number} {employee.location.street.name} <br></br>
                            {employee.location.city} {employee.location.state} {employee.location.postcode} <br></br>
                            {employee.location.country}
                        </p>
                        <p className="card-text">
                        <strong>Email:</strong> {employee.email}
                        </p>
                        <p className="card-text">
                        <strong>Cell Phone:</strong> {employee.cell}
                        </p>
                        <p className="card-text">
                        <strong>Home Phone:</strong> {employee.phone}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;