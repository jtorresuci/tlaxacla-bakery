import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomePage.css";
import YelpReviews from "./Yelp";
import Footerv2 from "./Footerv2";

function Homepage(props) {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      easing: "ease",
    });
  }, []);

  const handleButtonClick = (event) => {
    const { className } = event.target;
    const navDiv = document.querySelector("nav div");
    switch (className) {
      case "nav-button":
        navDiv.classList.add("show");
        break;
      case "exit-menu":
        navDiv.classList.remove("show");
        break;
      case "to-top":
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <header>
        <nav>
          <h2>
            <a href="#" id="logo">
              Tlaxcala Bakery
            </a>
          </h2>
         
        </nav>
        <div className="center">
          <h1 className="alex-brush">Welcome</h1>
          <h2>Tlaxcala Bakery</h2>
          <span id="asterisk">*</span>
          <p>Authentic Mexican Bread</p>
        </div>
      </header>

      <section className="add-padding add-flex">
        <div className="center-text">
          <h1 className="alex-brush">
            <span className="custom-font">Discover</span>
            <br />
            OUR STORY
          </h1>
          <h2>*</h2>
          <p>
            At our bakery, we believe in using only the best ingredients to
            create delicious, authentic handmade Mexican bread. Established in
            1998, we started out selling our bread to supermarkets in Los
            Angeles, and have since made our mark in Orange County.
          </p>
          {/* <a href="#">about us</a> */}
        </div>
        <div
          className="stuffed-cherries"
          data-aos="fade-left"
          data-aos-delay="300"
        ></div>
      </section>

     
      <section className="cake-background center-h1">
        <h1 className="custom-h1">
          <span className="custom-font alex-brush">Authentic Mexican</span>
          <br />
          BREAD
        </h1>
      </section>

      <section className="add-flex reservation-section">
        <div className="center-text add-padding">
          <h1>
            <span className="custom-font alex-brush">Mexican</span>
            <br />
            PRIDE
          </h1>
          <h2>*</h2>
          <p>
            We take pride in serving our customers with the best authentic
            handmade Mexican bread. Experience the lively flavors and rich
            traditions of Mexico with every bite of our original pastries and
            bread. Our tray of Mexican bread and pastries is ideal for any
            occasion and will take your taste buds on a journey to Mexico.
          </p>
          {/* <a href="#">make a reservation</a> */}
        </div>
        <div>
          <img
            src={props.img2}
            data-aos="fade-up"
            data-aos-delay="300"
          />
          <img
            src={props.img3}
            data-aos="fade-down"
            data-aos-delay="300"
          />
        </div>
      </section>

      <section className="bread-background center-h1">
        <h1 className="custom-h1 alex-brush">
          <span className="custom-font">Customers</span>
          <br />
          LOVE US
        </h1>
      </section>

      <section>
        <YelpReviews />
      </section>


      <footer>
        <button onClick={handleButtonClick} className="to-top">
          <i className="fa fa-chevron-up"></i>TOP
        </button>
<Footerv2/>
        

        <div className="">
          <p>
            <small>
              Copyright 2014 &#169;
              <span>PixelGrade</span> Team
            </small>
          </p>
          <p>

          </p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
