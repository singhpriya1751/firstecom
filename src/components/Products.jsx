import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../Global/ProductsContext";

function Products() {
  const { product } = useContext(ProductsContext);

  return (
    <div className="products" style={{ marginTop: "30px" }}>
      {Products.map((product) => (
        <div className="product" key={product.id}>
          <div className="productImage">
            <img src={product.image} alt="Not found" />
          </div>
          <div className="productDetails">
            <div className="productName">{product.name}</div>
            <div className="productPrice">${product.price}.00</div>
          </div>
          <div className="add-to-cart">Add To Cart</div>
          {product.status === "hot" ? <div className="hot">Hot</div> : ""}
          {product.status === "new" ? <div className="new">New</div> : ""}
        </div>
      ))}
    </div>
  );
}

export default Products;
