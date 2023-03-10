import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Reviews from "./Reviews";
import "./Yelp.css"

function YelpReviews() {
  const [reviews, setReviews] = useState([]);

  const apiURI = process.env.REACT_APP_API_URI;

  // Fetch Yelp reviews on component mount
  useEffect(() => {
    fetch(apiURI)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.reviews.filter((review) => review.rating === 5));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center">5-Star Yelp Reviews</h2>
      <Reviews />
      {reviews.length > 0 ? (
        <Carousel interval={4000}>
          {reviews.map((review) => (
            <Carousel.Item key={review.id}>
              <Card style={{ minHeight: "400px", maxHeight: "350px" }}>
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <img
                    src={
                      review.user.imageUrl
                        ? review.user.imageUrl
                        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    }
                    alt={review.user.name}
                    className="rounded-circle mb-3"
                    style={{ height: "100px", width: "100px" }}
                  >
                    {console.log(review.user)}
                  </img>
                  <Card.Title className="text-center mb-0">
                    {review.user.name}
                  </Card.Title>
                  <Card.Text className="text-center mb-3">
                    {review.text}{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
}

export default YelpReviews;
