import React from "react";

const ProductItem = (props) => {
  let { product, showProduct } = props;
  return (
    <div className="card">
      <img className="w-100" src={product.image} alt="Title" />
      <div className="card-body">
        <h4 className="card-title">{product.name}</h4>
        <p className="card-text">$ {product.price}</p>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#modalId"
          onClick={() => {
            showProduct(product);
          }}
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
