import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Product.css';

// Importing of images
import sugarImage from '../assets/images/sugar.jpg';
import cookingOilImage from '../assets/images/cooking oil.jpeg';
import beddingsImage from '../assets/images/bedding.jpeg';
import computersImage from '../assets/images/computers.webp';
import essentialsImage from '../assets/images/essentials.jpeg';

const Products = () => {
  const products = [
    { id: 1, title: 'Premium sugar', description: 'High-quality Australian sugar, carefully processed and packed for export.', image: sugarImage },
    { id: 2, title: 'Quality cooking oil', description: 'Premium cooking oil, ensuring health and taste in every drop.', image: cookingOilImage },
    { id: 3, title: 'Comfortable beddings', description: 'Comfortable and durable beddings that meet global standards.', image: beddingsImage },
    { id: 4, title: 'Computers', description: 'The latest technology solutions, ready to enhance your productivity.', image: computersImage },
    { id: 5, title: 'A wide range of daily essentials that cater to various needs.', description: 'A wide range of essentials.', image: essentialsImage },
  ];

  return (
    <section id='product' className="products-section">
      <h2 className="products-title">Our Products</h2>
      <Swiper
        className="custom-swiper"  
        modules={[Pagination, Autoplay]}  
        spaceBetween={0}  
        slidesPerView={1}  
        autoplay={{
          delay: 3000,  
          disableOnInteraction: false,  
          pauseOnMouseEnter: true,  
        }}
        loop={true}  
        pagination={{ clickable: true }} 
        breakpoints={{
          768: {
            slidesPerView: 2,  
            spaceBetween: 20,  
          },
          1024: {
            slidesPerView: 3,  
            spaceBetween: 30, 
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
