import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Product from "./components/Product";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Loading from "./components/Loading"; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading && <Loading />}
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Product />
          <ContactUs />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
