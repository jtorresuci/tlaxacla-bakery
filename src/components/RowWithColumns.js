import React from "react";
import { Col, Row } from "react-bootstrap";

function RowWithColumns(props) {
  const { reverse } = props;
  return (
    <Row style={{ display: "flex", alignItems: "center" }}>
      {reverse ? (
        <>
          <Col
            xs={12}
            md={12}
            
            style={{
              aspectRatio: 1,
              background: `url(${props.img1}) no-repeat center center`,
              backgroundSize: "cover",
              zIndex: 2,
              position: "relative",
            }}
          ></Col>
          <Col
            xs={12}
            md={12}
            style={{ aspectRatio: 1, justifyContent: "center" }}
          >
            <h1>{props.title1}</h1>
            <p>{props.description1}</p>
          </Col>
          <Col
            xs={12}
            md={12}
            style={{
              aspectRatio: 1,
              background: `url(${props.img2}) no-repeat center center`,
              backgroundSize: "cover",
              zIndex: 2,
              position: "relative",
            }}
          ></Col>
          <Col
            xs={12}
            md={12}
            style={{ aspectRatio: 1, justifyContent: "center" }}
          >
            <h1>{props.title2}</h1>
            <p>{props.description2}</p>
          </Col>
        </>
      ) : (
        <>
          <Col
            xs={12}
            md={12}
            style={{ aspectRatio: 1, justifyContent: "center" }}
          >
            <h1>{props.title1}</h1>
            <p>{props.description1}</p>
          </Col>
          <Col
            xs={12}
            md={12}
            style={{
              aspectRatio: 1,
              background: `url(${props.img1}) no-repeat center center`,
              backgroundSize: "cover",
              zIndex: 2,
              position: "relative",
            }}
          ></Col>
          <Col
            xs={12}
            md={12}
            style={{ aspectRatio: 1, justifyContent: "center" }}
          >
            <h1>{props.title2}</h1>
            <p>{props.description2}</p>
          </Col>
          <Col
            xs={12}
            md={12}
            style={{
              aspectRatio: 1,
              background: `url(${props.img2}) no-repeat center center`,
              backgroundSize: "cover",
              zIndex: 2,
              position: "relative",
            }}
          ></Col>
        </>
      )}
    </Row>
  );
}

export default RowWithColumns;
