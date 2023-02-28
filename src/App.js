import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
import YelpReviews from "./components/Yelp";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import SignatureFooter from "./components/SignatureFooter";
import CodePen from "./components/CodePen";
import Homepage from "./components/HomePage";

const googleAnalytics = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;

function App() {
  return (
    // <div className="container shadow-lg p-3 mt-5 mb-5 ml-1 mr-1 bg-light rounded">
    <div>
      <GoogleAnalytics trackingId={googleAnalytics} />
      {/* <Header logo="concha.png" companyName="Tlaxcala Bakery" /> */}
      <Homepage img1="1.png" img2="2.png" img3="3.png" />
      <SignatureFooter ninjalogo="ninjalogo.png" />
    </div>
  );
}

export default App;
