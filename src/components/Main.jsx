import { useRef, useState } from "react";
import "../assets/css/Main.css";
import { useRefDispatch } from "./RefContext";

const Main = () => {
  const [showedImgTag, setShowedImgTag] = useState(1);
  const [displayModal, setDisplayModal] = useState("none");
  const [itemCount, setItemCount] = useState(0);
  const [modalImg, setModalImg] = useState("");
  const showedImg = `/images/image-product-${showedImgTag}.jpg`;
  const modalContentRef = useRef();
  const dispatch = useRefDispatch();

  const addToCart = () => {
    const cartData = {
      name: "Fall Limited Edition Sneakers",
      price: 125.0,
      image: showedImg,
      itemCount,
    };
    dispatch({ type: "ADD_REF", payload: cartData });

    localStorage.setItem("cartData", JSON.stringify(cartData));
  };

  const changeImgPrev = () => {
    const changedTag = showedImgTag > 1 ? showedImgTag - 1 : 1;
    setShowedImgTag(changedTag);
  };
  const changeImgNext = () => {
    const changedTag = showedImgTag < 4 ? showedImgTag + 1 : 4;
    setShowedImgTag(changedTag);
  };

  return (
    <main>
      <div className='main-container'>
        <div className='image-container'>
          <div className='icon-container'>
            <button type='button' className='prev-icon' onClick={changeImgPrev}>
              <img src='/images/icon-previous.svg' className='icon' />
            </button>
            <button type='button' className='next-icon' onClick={changeImgNext}>
              <img src='/images/icon-next.svg' className='icon' />
            </button>
          </div>
          <img
            src={showedImg}
            alt='product'
            className='img-fluid'
            onClick={() => {
              setDisplayModal("flex");
              setModalImg(showedImg);
            }}
          />

          <div className='img-list-container'>
            <img
              src={`/images/image-product-1-thumbnail.jpg`}
              alt='product'
              className={
                showedImgTag == 1 ? "img-fluid active-img" : "img-fluid"
              }
              onClick={() => setShowedImgTag(1)}
            />
            <img
              src={`/images/image-product-2-thumbnail.jpg`}
              alt='product'
              className={
                showedImgTag == 2 ? "img-fluid active-img" : "img-fluid"
              }
              onClick={() => setShowedImgTag(2)}
            />
            <img
              src={`/images/image-product-3-thumbnail.jpg`}
              alt='product'
              className={
                showedImgTag == 3 ? "img-fluid active-img" : "img-fluid"
              }
              onClick={() => setShowedImgTag(3)}
            />
            <img
              src={`/images/image-product-4-thumbnail.jpg`}
              alt='product'
              className={
                showedImgTag == 4 ? "img-fluid active-img" : "img-fluid"
              }
              onClick={() => setShowedImgTag(4)}
            />
          </div>
        </div>
        <div className='content-container'>
          <h6>SNEAKER COMPANY</h6>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className='price-container'>
            <h4>
              $125.00 <span>50%</span>
            </h4>
            <p>$250.00</p>
          </div>
          <div className='btn-container'>
            <button type='button' className='incre-cart'>
              <span
                className='btn-decre'
                onClick={() => setItemCount(itemCount > 1 ? itemCount - 1 : 0)}
              >
                <img src='/images/icon-minus.svg' />
              </span>{" "}
              <span>{itemCount}</span>{" "}
              <span
                className='btn-incre'
                onClick={() => setItemCount(itemCount + 1)}
              >
                <img src='/images/icon-plus.svg' />
              </span>
            </button>
            <button
              type='button'
              className='cart-btn'
              disabled={itemCount > 0 ? false : true}
              onClick={addToCart}
            >
              <img
                src='/images/icon-cart.svg'
                style={{ marginRight: "0.5em" }}
              />{" "}
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div
        className='modal1'
        style={{ display: displayModal }}
        onClick={() => {
          if (
            modalContentRef &&
            !modalContentRef.current.contains(event.target)
          ) {
            setDisplayModal("none");
          }
        }}
      >
        <div className='modal1-content' ref={modalContentRef}>
          <img
            className='modal-cancel'
            src='/images/icon-close.svg'
            onClick={() => setDisplayModal("none")}
          />
          <div className='image-container'>
            <img
              src={modalImg.slice(0, -5) + `${showedImgTag}.jpg`}
              alt='product'
              className='img-fluid w-100'
            />
            <div className='icon-container'>
              <button
                type='button'
                className='prev-icon'
                onClick={changeImgPrev}
              >
                <img src='/images/icon-previous.svg' className='icon' />
              </button>
              <button
                type='button'
                className='next-icon'
                onClick={changeImgNext}
              >
                <img src='/images/icon-next.svg' className='icon' />
              </button>
            </div>
            <div className='img-list-container'>
              <img
                src={`/images/image-product-1-thumbnail.jpg`}
                alt='product'
                className={
                  showedImgTag == 1 ? "img-fluid active-img" : "img-fluid"
                }
                onClick={() => setShowedImgTag(1)}
              />
              <img
                src={`/images/image-product-2-thumbnail.jpg`}
                alt='product'
                className={
                  showedImgTag == 2 ? "img-fluid active-img" : "img-fluid"
                }
                onClick={() => setShowedImgTag(2)}
              />

              <img
                src={`/images/image-product-3-thumbnail.jpg`}
                alt='product'
                className={
                  showedImgTag == 3 ? "img-fluid active-img" : "img-fluid"
                }
                onClick={() => setShowedImgTag(3)}
              />

              <img
                src={`/images/image-product-4-thumbnail.jpg`}
                alt='product'
                className={
                  showedImgTag == 4 ? "img-fluid active-img" : "img-fluid"
                }
                onClick={() => setShowedImgTag(4)}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
