import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  return (
    <div className="jumbotron jumbotron-fluid pt-5">
      <div className="container">
        <h1 className="display-4">
          <span className="font-weight-bold">Tlaxcala Bakery</span>
          <span className="text-danger">.</span>
        </h1>{" "}
        <p className="lead">
          Delicious Mexican bread and cakes baked fresh daily.
        </p>
      </div>
    </div>
  );
}

export default Hero;
