import React from "react";
// import axios from "axios";

const Item = (props) => {

  return (
    <div className="container-fluid">
      <div className="row single-item" style={{
          padding: 10, borderBlockColor: 'dark'}}>
        <tr>                
          <td><img src={props.picture.thumbnail} alt="Employee avatar"></img></td>
          <td>{props.name.first}</td>
          <td>{props.name.last}</td>
          <td>{props.email}</td>
          <td>{props.cell}</td>
        </tr>
      </div>
    </div>
  );
};

export default Item;