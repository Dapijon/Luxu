// App.js
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Product from "./components/Product"
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Product />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
