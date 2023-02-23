import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
import YelpReviews from "./components/Yelp";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";

const googleAnalytics = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;

function App() {
  return (
    <div className="container shadow-lg p-3 mt-5 mb-5 ml-1 mr-1 bg-light rounded">
      <GoogleAnalytics trackingId={googleAnalytics} />
      {/* <Header logo="concha.png" companyName="Tlaxcala Bakery" /> */}
      <Hero />
      <Product
        title="Freshly Made"
        description="Using only the best ingredients and baked to perfection, our artisanal bread will give you a taste of Mexico. Our bread is a celebration of Mexican ancestry and culture in addition to being a delicious treat. Experience the flavors that have been handed down through the years by bringing them to your kitchen."
        photo="1.png"
      />
      <Product
        title="Authentic Mexican Bread"
        description="With our collection of freshly baked bread and pastries, indulge in the lively flavors and rich traditions of Mexico. Whether it's a traditional concha or a flavorful empanada, every bite of our original Mexican pastries offers a sense of tradition. Our tray of Mexican bread and pastries is ideal for any occasion and will take your taste senses right to Mexico. Give your family and friends a delightful taste of Mexico right now."
        photo="3.png"
      />
      <Product
        title="The Borracho"
        description="Our genuine borracho bread, with its mouthwatering sweetness and vivid pink swirls, is a Mexican treasure. Anybody with a sweet tooth must try this pastry because it's soft, fluffy, and very delicious. Our borracho bread is the ideal option to help satisfy your cravings whether you're in the mood for a morning snack or an evening dessert. Explore our collection to find a new favorite right away!"
        photo="2.png"
      />
      <YelpReviews />
      <Footer
        businessName="Tlaxcala Bakery"
        phoneNumber="714-547-8265"
        address={{
          line1: "1208 S. Standard Ave.",
          line2: "Santa Ana, CA 92707",
        }}
      />
    </div>
  );
}

export default App;
