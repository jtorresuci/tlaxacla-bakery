import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomePage.css";

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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            aspernatur beatae laboriosam dicta tempora ab, dolorem mollitia
            perspiciatis, deleniti quidem dolor repellat animi. Quidem eligendi
            iste distinctio fugit maxime modi. Lorem ipsum dolor sit amet.
          </p>
          <a href="#">about us</a>
        </div>
        <div
          className="stuffed-cherries"
          data-aos="fade-left"
          data-aos-delay="300"
        ></div>
      </section>

      <section className="bread-background center-h1">
        <h1 className="custom-h1 alex-brush">
          <span className="custom-font">Tasteful</span>
          <br />
          RECIPES
        </h1>
      </section>

      <section className="menu add-flex add-padding">
        <div className="menu-images">
          <img
            src="http://www.konoba-mirakul.com/wp-content/uploads/2015/03/delikatesa4.jpg"
            data-aos="fade-down"
            data-aos-delay="300"
          />
          <img
            src="http://www.konoba-mirakul.com/wp-content/uploads/2015/03/delikatesa21.jpg"
            data-aos="fade-left"
            data-aos-delay="300"
          />
          <img
            src="https://www.gourmetsociety.co.uk/uploads/images/restaurants/093ce538894c95892f62dc93bb023636-image.png"
            data-aos="fade-right"
            data-aos-delay="300"
          />
          <img
            src="http://retrokitchenbar.com/wp-content/uploads/2014/05/menu-thumb-4-300x218.jpg"
            data-aos="fade-up"
            data-aos-delay="300"
          />
        </div>
        <div className="center-text">
          <h1>
            <span className="custom-font alex-brush">Discover</span>
            <br />
            MENU
          </h1>
          <h2>*</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            distinctio possimus tempore voluptatem, quo repellendus quas culpa
            quasi, hic optio sapiente molestias necessitatibus, aliquam
            excepturi consequatur a voluptates quam beatae!
          </p>
          <a href="#">view the full menu</a>
        </div>
      </section>

      <section className="cake-background center-h1">
        <h1 className="custom-h1">
          <span className="custom-font alex-brush">The perfect</span>
          <br />
          BLEND
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim animi
            odit in dignissimos neque ratione, laboriosam rerum! Deleniti
            accusamus non, aliquam tempora, mollitia laborum ad, fugiat at
            explicabo esse aut. Lorem ipsum dolor sit amet, adipisicing elit.
          </p>
          <a href="#">make a reservation</a>
        </div>
        <div>
          <img
            src="http://www.konoba-mirakul.com/wp-content/uploads/2015/03/kulinarstvo11.jpg"
            data-aos="fade-up"
            data-aos-delay="300"
          />
          <img
            src="http://www.konoba-mirakul.com/wp-content/uploads/2015/03/kulinarstvo21.jpg"
            data-aos="fade-down"
            data-aos-delay="300"
          />
        </div>
      </section>

      <footer>
        <button onClick={handleButtonClick} className="to-top">
          <i className="fa fa-chevron-up"></i>TOP
        </button>

        <div className="restaurant-info">
          <div className="locations">
            <h4>LOCATIONS</h4>
            <div className="location-1">
              <h5>
                376 Van Brun St
                <br />
                Brooklyn, NY &#8212; 11231
              </h5>
            </div>
            <div className="location-2">
              <h5>
                25 Union Square West
                <br />
                New York, NY &#8212; 10003
              </h5>
            </div>
          </div>

          <div className="hours">
            <h4>HOURS</h4>
            <div className="weekdays">
              <h5>
                Monday - Thursday
                <br />
                5:30pm - 10:00pm
              </h5>
            </div>

            <div className="weekends">
              <h5>
                Friday & Saturday
                <br />
                5:30pm - 11:00pm
              </h5>
            </div>

            <div className="private-events">
              <h5>
                Available for private
                <br />
                events on Sunday
              </h5>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>
            <small>
              Copyright 2014 &#169; Handcrafted with love by{" "}
              <span>PixelGrade</span> Team
            </small>
          </p>
          <p>
            <small>Permissions and Copyright &#8226; Contact The Team</small>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
