import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
import YelpReviews from "./components/Yelp";

function App() {
  return (
    <div className="container shadow-lg p-3 mb-5 bg-light rounded">
      <Header logo="concha.png" companyName="Tlaxcala Bakery" />
      <Hero />
      <Product title="Freshly Made" description="At Tlaxcala Bakery, all of our breads and cakes are freshly made daily for the best flavor" photo="1.png" />
      <YelpReviews/>
    </div>
  );
}

export default App;
