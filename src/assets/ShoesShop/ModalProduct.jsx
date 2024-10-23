import React from "react";

const ModalProduct = (props) => {
  let { product } = props;
  return (
    <div
      className="modal fade"
      id="modalId"
      tabIndex={-1}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      role="dialog"
      aria-labelledby="modalTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title " id="modalTitleId">
              Thông tin sản phẩm
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="table-responsive">
              <table className="table text-center ">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ whiteSpace: "nowrap", lineHeight: "7" }}>
                    <td>{product.id}</td>
                    <td>
                      <img
                        style={{ width: "150px" }}
                        src={product.image}
                        alt=""
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>$ {product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.shortDescription}</td>
                  </tr>
                  <tr></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
