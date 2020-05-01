import React from "react";
// import axios from "axios";

const Item = (props) => {

  return (
    <div className="container-fluid">
      <div className="row single-item" style={{
          padding: 10, borderBlockColor: 'dark'}}>
        <div className="col-1">
          <img src={props.picture.thumbnail} alt="Employee avatar"></img>
        </div>
        <div className="col-2">{props.name.first}</div>
        <div className="col-2">{props.name.last}</div>
        <div className="col-4">{props.email}</div>
        <div className="col-3">{props.cell}</div>
      </div>
    </div>

  );
};

export default Item;