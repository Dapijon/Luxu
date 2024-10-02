// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Product from "./components/Product";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Loading from "./components/Loading"; // Import the Loading component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('loading').classList.add('fade-out');
      setTimeout(() => setLoading(false), 500); // Match the duration of the CSS transition
    }, 3500); // Adjust the delay time as needed (2000ms = 2 seconds)

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
