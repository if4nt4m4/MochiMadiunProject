import { Link } from "@inertiajs/react"
import React, { useState, useEffect } from 'react';

export default (params) => {
    const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header>
        <div className={`top-header-area navbar-fix ${isSticky ? 'fixed' : ''}`} id="sticker">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 text-center">
                        <div className="main-menu-wrap">
                            <div className="site-logo">
                                <Link href="/">
                                    <img src="../assets/img/logo.png" alt="Site Logo" />
                                </Link>
                            </div>
                            {/* menu start */}
                            <nav className="main-menu">
                                <ul>
                                    <li className="current-list-item">
                                        <Link href="/">Home</Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link href="/">Static Home</Link>
                                            </li>
                                            <li>
                                                <Link href="/slider-home">Slider Home</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="/About">About</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Pages</Link>
                                        <ul className="sub-menu">
                                        <li>
                                            <Link href="/404">404 page</Link>
                                        </li>
                                        <li>
                                            <Link href="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link href="/cart">Cart</Link>
                                        </li>
                                        <li>
                                            <Link href="/checkout">Check Out</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">Contact</Link>
                                        </li>
                                        <li>
                                            <Link href="/news">News</Link>
                                        </li>
                                        <li>
                                            <Link href="/shop">Shop</Link>
                                        </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="/news">News</Link>
                                        <ul className="sub-menu">
                                        <li>
                                            <Link href="/news">News</Link>
                                        </li>
                                        <li>
                                            <Link href="/single-news">Single News</Link>
                                        </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact</Link>
                                    </li>
                                    <li>
                                        <Link href="/shop">Shop</Link>
                                        <ul className="sub-menu">
                                        <li>
                                            <Link href="/shop">Shop</Link>
                                        </li>
                                        <li>
                                            <Link href="/checkout">Check Out</Link>
                                        </li>
                                        <li>
                                            <Link href="/single-product">Single Product</Link>
                                        </li>
                                        <li>
                                            <Link href="/cart">Cart</Link>
                                        </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="header-icons">
                                        <Link className="shopping-cart" href="/cart">
                                            <i className="fas fa-shopping-cart"></i>
                                        </Link>
                                        <Link className="mobile-hide search-bar-icon" href="#">
                                            <i className="fas fa-search"></i>
                                        </Link>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <Link className="mobile-show search-bar-icon" href="#">
                                <i className="fas fa-search"></i>
                            </Link>
                        <div className="mobile-menu"></div>
                        {/* menu end */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}