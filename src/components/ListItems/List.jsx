import React from 'react';
import Item from './Item';

const List = (props) => {
    return (
        <div className="container">
            <div className="row">
                <table class="table table-striped">
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
                        {props.employees.map((employee) => (
                            <Item {...employee} key={employee.login.uuid} />
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default List;