// components/Products.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Product.css';

// Import images if they are located in src
import sugarImage from '../assets/images/sugar.jpg';
import cookingOilImage from '../assets/images/cooking oil.jpeg';
import beddingsImage from '../assets/images/bedding.jpeg';
import computersImage from '../assets/images/computers.webp';
import coffeeImage from '../assets/images/essentials.jpeg';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'Premium sugar',
      description: 'High-quality Australian sugar, carefully processed and packed for export.',
      image: sugarImage,
    },
    {
      id: 2,
      title: 'Quality cooking oil',
      description: 'Premium cooking oil, ensuring health and taste in every drop.',
      image: cookingOilImage,
    },
    {
      id: 3,
      title: 'Comfortable beddings',
      description: 'Comfortable and durable beddings that meet global standards.',
      image: beddingsImage,
    },
    {
      id: 4,
      title: 'Computers',
      description: 'Get the latest high-performance computers for your needs.',
      image: computersImage,
    },
    {
      id: 5,
      title: 'Essential Goods',
      description: 'A wide range of daily essentials that cater to various needs.',
      image: coffeeImage,
    },
  ];

  return (
    <section className="products-section">
      <h2 className="products-title">Our Products</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop={true} 
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
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
