import React from 'react';
import Item from './Item';

const List = (props) => {
    return (
        <div className="container">
            <div className="row">
                {props.employees.map((employee) => (
                <Item {...employee} key={employee.login.uuid}/>
                ))}
            </div>
        </div>
    );
};

export default List;