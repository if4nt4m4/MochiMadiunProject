import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

export default () => {
    useEffect(() => {
        // Initialize Owl Carousel
        const $ = window.$;
        $('.logo-carousel-inner').owlCarousel({
          items: 5, // Number of items to show
          loop: true, // Loop the items
          margin: 30, // Space between items
          nav: true, // Show navigation buttons
          dots: true, // Show dots
          autoplay: true, // Autoplay the carousel
          autoplayTimeout: 3000, // Autoplay interval (3 seconds)
          responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 5 }
          }
        });
      }, []);
  return (
    <div>
      {/* Advertisement Section */}
      <div className="abt-section mb-100 mt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="abt-bg">
                <a
                  href="https://www.youtube.com/watch?v=DBLlFWYcIGQ"
                  className="video-play-btn popup-youtube"
                >
                  {/* Add play button icon here if needed */}
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="abt-text">
                <p className="top-sub">Since Year 1999</p>
                <h2>
                  We are <span className="orange-text">Fruitkha</span>
                </h2>
                <p>
                  Etiam vulputate ut augue vel sodales. In sollicitudin neque et
                  massa porttitor vestibulum ac vel nisi. Vestibulum placerat
                  eget dolor sit amet posuere. In ut dolor aliquet, aliquet
                  sapien sed, interdum velit. Nam eu molestie lorem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente facilis illo repellat veritatis minus, et labore
                  minima mollitia qui ducimus.
                </p>
                <a href="/about" className="boxed-btn mt-4">
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="product-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>
                  <span className="orange-text">Our</span> Products
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, fuga quas itaque eveniet beatae optio.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html">
                    <img
                      src="assets/img/products/product-img-1.jpg"
                      alt="Strawberry"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </a>
                </div>
                <h3>Strawberry</h3>
                <p className="product-price">
                  <span>Per Kg</span> $85
                </p>
                <a href="cart.html" className="cart-btn">
                  <i className="fas fa-shopping-cart" /> Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Banner */}
      <section className="shop-banner">
        <div className="container">
          <h3>
            December sale is on! <br /> with big <span className="orange-text">Discount...</span>
          </h3>
          <div className="sale-percent">
            <span>Sale! <br /> Upto</span> 50% <span>off</span>
          </div>
          <a href="/shop" className="cart-btn btn-lg">Shop Now</a>
        </div>
      </section>

      {/* Logo Carousel Section */}
      <div className="logo-carousel-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="logo-carousel-inner owl-carousel owl-theme owl-loaded">
              <div className="owl-stage-outer">
                <div className="owl-stage">
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <div key={index} className="owl-item" style={{ width: 255, marginRight: 30 }}>
                      <div className="single-logo-item">
                        <img src={`assets/img/company-logos/${item}.png`} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="owl-controls">
                <div className="owl-nav">
                  <div className="owl-prev" style={{ display: 'none' }}>
                    prev
                  </div>
                  <div className="owl-next" style={{ display: 'none' }}>
                    next
                  </div>
                </div>
                <div className="owl-dots">
                  {[1, 2].map((item, index) => (
                    <div key={index} className={index === 0 ? 'owl-dot active' : 'owl-dot'}>
                      <span />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
