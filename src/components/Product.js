import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Product(props) {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
        <img src={props.photo} alt={props.title} className="img-fluid rounded mb-3 w-100" />
          <h2 className="text-center">
            <span className="font-weight-bold">{props.title}</span>
            <span className="text-danger">.</span>
          </h2>
          <p className="lead">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
