import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer({ businessName, phoneNumber, address }) {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12} md={6} className="text-left">
            <h4>
            <span className="font-weight-bold">Tlaxcala Bakery</span>
          <span className="text-danger">.</span></h4>
          </Col>
          <Col xs={12} md={6} className="text-right">
            <p>Phone: {phoneNumber}</p>
            <p>{address.line1}</p>
            <p>{address.line2}</p>
            <a href={`https://www.google.com/maps/place/${encodeURIComponent(address.line1 + ' ' + address.line2)}`} target="_blank" rel="noopener noreferrer">
              View on Map
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
