import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomePage.css";
import YelpReviews from "./Yelp";
import Footerv2 from "./Footerv2";

function Homepage() {
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
          <button
            className="nav-button fa fa-bars"
            onClick={handleButtonClick}
          ></button>
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
            <span className="custom-font alex-brush">Culinary</span>
            <br />
            DELIGHT
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
            src="https://previews.dropbox.com/p/thumb/AB0ZHnFRrT1eRm6lt38lyo8OyM_nvuFgE-dZ8BtvxqCaa8yLQ_nEs9xEeLXOHyNVZdp5OWztvjbSXFfTJKX5Zpr73HyGjdxDvxy4K66kQUGK6AOBtRga18E9A4a2GQUT3h481A6-umVgsMMutMFZLUckPqrjV_YErkWa1rPVxEuDy5s0FFZozwsr_K5E05riZiXO-iKhPx_sOELd8ZQr7N9q8YDxurB0sp9PTrA4L4Dkmjl8doZXYXqxQLSDhrT1UiQ_i3WYrWb9si3YxmrmReMUqWpiAinYxfc3coMglHMYnZ3XLze7NDAc1B5-4zDRLo8EA52164fOIQPDOjYMfJg8GOFSG0Ab0DxSlPMKoHhk_l2--4c7QoQOhdaplZ7rpGs/p.png"
            data-aos="fade-up"
            data-aos-delay="300"
          />
          <img
            src="https://previews.dropbox.com/p/thumb/AB3XAsNnTS9mKic4wSrK8MPccUSxUEjSk0_wmXpoqUSaPEH_HIAecc9O34N7qIlfspoQIBWJnE1HdDuukkTkCEQduchI7OqEsyuVcHxf-WzM8yZn3F10IshK8dONV8-goJ3qR9Qc3Np38IT1y6fZLQ5-E6AV5Tl-8mAfPwGnWvYpwpSw1P7OucSrflaVPSBV1kbpQCObvrG87xZZoxcGdMEa0F0pHEPADMPJpCWTJFzjy2zQvLEzdsRsP5X6RDLjZg9XXRrLI4Pj0HL6PJp3CrtuuCk103_cL1o__x4si_NURSt0uDZMc5ctYlNdHEQV0VEUTH0bVU8XZAXDhdniFNKqXo4cJ8RofuPjTIoOyJFuvtOYgs4OjxwafaFd4hQr5e8/p.png"
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
              Copyright 2014 &#169; Handcrafted with love by{" "}
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
