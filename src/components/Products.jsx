import React from "react";
import Card from "./Card";
import { productdata } from "./proapi";

export default function Products() {
  return (
    <>
      <div className="container">
        <div className="row mt-5 gx-5">
          {productdata.map((user, i) => {
            return (
              <div className="col-md-12 col-lg-3">
                <Card
                  key={i}
                  imageURL={productdata[i].imageURL}
                  para={productdata[i].para}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
