// components/Products.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Product.css';

// Import images
import sugarImage from '../assets/images/sugar.jpg';
import cookingOilImage from '../assets/images/cooking oil.jpeg';
import beddingsImage from '../assets/images/bedding.jpeg';
import computersImage from '../assets/images/computers.webp';
import coffeeImage from '../assets/images/essentials.jpeg';

const Products = () => {
  const products = [
    { id: 1, title: 'Premium sugar', description: 'High-quality Australian sugar.', image: sugarImage },
    { id: 2, title: 'Quality cooking oil', description: 'Premium cooking oil.', image: cookingOilImage },
    { id: 3, title: 'Comfortable beddings', description: 'Durable beddings.', image: beddingsImage },
    { id: 4, title: 'Computers', description: 'Latest high-performance computers.', image: computersImage },
    { id: 5, title: 'Essential Goods', description: 'A wide range of essentials.', image: coffeeImage },
  ];

  return (
    <section id='product' className="products-section">
      <h2 className="products-title">Our Products</h2>
      <Swiper
        modules={[Pagination, Autoplay]}  // Use Pagination and Autoplay
        spaceBetween={0}  // No spacing between slides
        slidesPerView={1}  // Show 1 slide at a time initially
        autoplay={{
          delay: 2500,  // 2.5 second delay
          disableOnInteraction: false,  // Don't stop autoplay on user interaction
          pauseOnMouseEnter: true,  // Pauses when user hovers over
        }}
        loop={true}  // Loop the slider infinitely
        pagination={{ clickable: true }}  // Clickable pagination dots
        breakpoints={{
          768: {
            slidesPerView: 2,  // Show 2 slides for medium screens
            spaceBetween: 20,  // Add space between slides for medium screens
          },
          1024: {
            slidesPerView: 3,  // Show 3 slides for larger screens
            spaceBetween: 30,  // Standard spacing for larger screens
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Products;
