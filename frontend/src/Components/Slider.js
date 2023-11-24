import React, { useState, useEffect } from 'react';

const Slider = ({ products }) => {
  const repeatedProducts = [...products, ...products, ...products];
  const [productsPerSlide, setProductsPerSlide] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setProductsPerSlide(1);
      } else if (window.innerWidth < 992) {
        setProductsPerSlide(3); // Set to 3 cards for medium devices
      } else {
        setProductsPerSlide(4);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const totalSlides = Math.ceil(repeatedProducts.length / productsPerSlide);
  const visibleProducts = repeatedProducts.slice(
    currentIndex * productsPerSlide,
    currentIndex * productsPerSlide + productsPerSlide
  );

  const cardStyle = {
    margin: '0 10px', // Added spacing between cards
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: `calc(100% / ${productsPerSlide} - 20px)`, // Adjusted width based on the number of cards
    boxSizing: 'border-box',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  };

  const imageContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '8px',
    height: '400px', // Increased height
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const overlayStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const textStyle = {
    marginTop: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#ffc107',
    color: '#fff',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const arrowButtonContainer = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  };

  const arrowButtonStyle = {
    backgroundColor: '#fff',
    color: '#000',
    border: '1px solid #ddd',
    borderRadius: '50%',
    padding: '12px', // Adjusted padding for a bigger button
    cursor: 'pointer',
    fontSize: '18px', // Adjusted font size
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="position-relative">
      <div className="d-flex" style={{ width: '100%' }}>
        {visibleProducts.map((product, index) => (
          <div key={index} style={cardStyle}>
            <div style={imageContainerStyle}>
              <div style={overlayStyle}></div>
              <img style={imageStyle} src={product.image} alt="" />
            </div>
            <div style={textStyle}>
              <h2 className="fs-6 fw-bold text-dark">{product.name}</h2>
              <h4 className="fs-5 text-danger">${product.price}</h4>
              <p className="fs-6 text-secondary mb-3">{product.description}</p>
              <button className="btn btn-warning" style={buttonStyle}>
                <i className="fa fa-shopping-cart me-2"></i> Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {totalSlides > 1 && (
        <div style={arrowButtonContainer}>
          <button className="btn btn-secondary" style={arrowButtonStyle} onClick={handlePrevSlide}>
            &lt;
          </button>
          <button className="btn btn-secondary" style={arrowButtonStyle} onClick={handleNextSlide}>
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider;
