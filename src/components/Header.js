import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        <img src={props.logo} alt="Bakery Logo" className="img-fluid bread-icon mb-1" style={{maxHeight: "40px"}} />
        <span className="company-name">{props.companyName}</span>
      </a>
    </nav>
  );
}

export default Header;
