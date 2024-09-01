import "../assets/css/Cart.css";
import { memo, useEffect, useRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRefDispatch } from "./RefContext";

const Cart = memo(({ style, setDisplayCart, cartData }) => {
  console.log(cartData);
  const [cartItem, setCartItem] = useState(
    cartData || JSON.parse(localStorage.getItem("cartData"))
  );
  const cartRef = useRef();
  const dispatch = useRefDispatch();

  useEffect(() => {
    setCartItem(cartData);
    const handleClickEvent = (e) => {
      if (
        cartRef.current?.style.display === "" &&
        !document.getElementsByClassName("shopping-cart")[0].contains(e.target)
      ) {
        if (cartRef && !cartRef.current.contains(e.target)) {
          setDisplayCart("none");
        }
      }
    };

    document.addEventListener("click", handleClickEvent);
  }, [setDisplayCart, cartRef.current?.style.display, cartData]);

  return (
    <div className='cart-pop-over' ref={cartRef} style={style}>
      <h5>Cart</h5>
      <div className='cart-content-container'>
        {!cartItem ? (
          <h6>Your cart is empty</h6>
        ) : (
          <>
            <div className='cart-content'>
              <img src={cartItem.image} className='img-fluid' />
              <p>
                {" "}
                {cartItem.name} ${cartItem.price}.00 x {cartItem.itemCount}{" "}
                <span>
                  {" "}
                  $
                  {cartItem.itemCount > 0
                    ? cartItem.price * cartItem.itemCount
                    : cartItem.price}
                  .00
                </span>
              </p>
              <DeleteIcon
                className='delete-icon'
                onClick={() => {
                  localStorage.removeItem("cartData");
                  dispatch({ type: "REV_DATA" });
                }}
              />
            </div>
            <button type='button' className='btn-checkout'>
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
});

Cart.displayName = "Cart";

export default Cart;
