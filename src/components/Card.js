import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { productdata } from "./proapi";

export default function Card(props) {
  return (
    <div className="Maincard">
      <div className="card-header">
        <h1 className="card-title">{props.title}</h1>
      </div>
      <div className="card-body">
        <img src={props.imageURL} height="200px" alt="nice" />
        <h6>{props.para}</h6>
      </div>
      <div className="card-footer">
        <button className="buyNow">add to cart</button>
        {productdata.i === "new" ? <div className="new">New</div> : ""}
        {productdata.i === "hot" ? <div className="hot">Hot</div> : ""}
      </div>
    </div>
  );
}
