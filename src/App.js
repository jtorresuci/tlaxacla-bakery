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
    <div className="container shadow-lg p-3 mt-5 mb-5 bg-light rounded">
    <GoogleAnalytics trackingId={googleAnalytics} />
      <Header logo="concha.png" companyName="Tlaxcala Bakery" />
      <Hero />
      <Product
        title="Freshly Made"
        description="At Tlaxcala Bakery, all of our breads and cakes are freshly made daily for the best flavor"
        photo="1.png"
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
