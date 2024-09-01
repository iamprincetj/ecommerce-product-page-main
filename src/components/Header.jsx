import "../assets/css/Header.css";
import Cart from "./Cart";
import { useCallback, useEffect, useState } from "react";
import { useRefValue } from "./RefContext";

const Header = () => {
  const [displayCart, setDisplayCart] = useState("");
  const [counter, setCounter] = useState(0);
  const memoSetDisplayCart = useCallback((value) => {
    setDisplayCart(value);
  }, []);
  let cartData = useRefValue() || JSON.parse(localStorage.getItem("cartData"));

  const cartBtn = document.querySelector(".cart-btn");
  cartBtn?.addEventListener("click", () => {
    setCounter(counter + 1);
    setCounter(counter - 1);
  });

  useEffect(() => {
    setDisplayCart("none");
  }, []);
  return (
    <div>
      <header>
        <nav>
          <div className='navbar-brand-container'>
            <img src='/images/logo.svg' />
            <img
              src='/images/icon-menu.svg'
              className='navbar-menu-icon'
              data-bs-toggle='offcanvas'
              data-bs-target='#demo'
            />
            <ul>
              <li>
                <a href='#'>Collections</a>
              </li>
              <li>
                <a href='#'>Men</a>
              </li>
              <li>
                <a href='#'>Women</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
          <div className='navbar-profile-container'>
            <span className='shopping-cart-container'>
              <img
                src='/images/icon-cart.svg'
                className='shopping-cart'
                onClick={() => {
                  displayCart
                    ? memoSetDisplayCart("")
                    : memoSetDisplayCart("none");
                }}
              />
              {cartData && cartData.itemCount > 0 && (
                <span>{cartData?.itemCount}</span>
              )}
            </span>
            <img
              className='profile-pic'
              src='/images/image-avatar.png'
              alt='user profile picture'
            />
            <Cart
              style={{ display: displayCart }}
              setDisplayCart={memoSetDisplayCart}
              cartData={cartData}
            />
          </div>
        </nav>
      </header>

      <div className='offcanvas offcanvas-start' id='demo'>
        <div className='offcanvas-header'>
          <img src='/images/icon-close.svg' data-bs-dismiss='offcanvas' />
        </div>
        <div className='offcanvas-body'>
          <ul>
            <li>
              <a href='#'>Collections</a>
            </li>
            <li>
              <a href='#'>Men</a>
            </li>
            <li>
              <a href='#'>Women</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
