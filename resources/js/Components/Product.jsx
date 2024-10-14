import React, { useState } from "react";

const ProductPage = () => {
  const [filter, setFilter] = useState("all");

  const products = [
    { id: 1, category: "strawberry", name: "Strawberry", price: 85, img: "assets/img/products/product-img-1.jpg" },
    { id: 2, category: "berry", name: "Berry", price: 70, img: "assets/img/products/product-img-2.jpg" },
    { id: 3, category: "lemon", name: "Lemon", price: 35, img: "assets/img/products/product-img-3.jpg" },
    { id: 4, category: "avocado", name: "Avocado", price: 50, img: "assets/img/products/product-img-4.jpg" },
    { id: 5, category: "green-apple", name: "Green Apple", price: 45, img: "assets/img/products/product-img-5.jpg" },
    { id: 6, category: "strawberry", name: "Strawberry", price: 80, img: "assets/img/products/product-img-6.jpg" },
  ];

  const filteredProducts =
    filter === "all" ? products : products.filter((product) => product.category === filter);

  return (
    <>
      {/* Breadcrumb Section */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Fresh and Organic</p>
                <h1>Shop</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="product-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-filters">
                <ul>
                  <li className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>
                    All
                  </li>
                  <li className={filter === "strawberry" ? "active" : ""} onClick={() => setFilter("strawberry")}>
                    Strawberry
                  </li>
                  <li className={filter === "berry" ? "active" : ""} onClick={() => setFilter("berry")}>
                    Berry
                  </li>
                  <li className={filter === "lemon" ? "active" : ""} onClick={() => setFilter("lemon")}>
                    Lemon
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row product-lists">
            {filteredProducts.map((product) => (
              <div key={product.id} className={`col-lg-4 col-md-6 text-center ${product.category}`}>
                <div className="single-product-item">
                  <div className="product-image">
                    <a href="single-product.html">
                      <img src={product.img} alt={product.name} />
                    </a>
                  </div>
                  <h3>{product.name}</h3>
                  <p className="product-price">
                    <span>Per Kg</span> {product.price}$
                  </p>
                  <a href="cart.html" className="cart-btn">
                    <i className="fas fa-shopping-cart"></i> Add to Cart
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="pagination-wrap">
                <ul>
                  <li>
                    <a href="#">Prev</a>
                  </li>
                  <li>
                    <a className="active" href="#">1</a>
                  </li>
                  <li>
                    <a href="#">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">Next</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
