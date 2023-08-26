import { useState } from "react";
import { Cart, CartItem } from "../models/cart";
import { useCookies } from "react-cookie";
import cartSample from "../models/cart.json";
import { Link } from "react-router-dom";

function SingleCartItem({ item }: { item: CartItem }) {
  const [quantity, setQuantity] = useState(item.cartQuantity);
  const [cookie, setCookie] = useCookies(["cart"]);
  const [cart, setCart] = useState(!cookie.cart ? (cartSample as Cart) : (cookie.cart as Cart));
  return (
    <div className="w-full bg-white rounded-md py-2 px-8 flex flex-col shadow-md my-2 ">
      <div className="text-xl py-4 border-b border-black">{`SHOP${item.productId}`}</div>
      <div className="flex flex-row items-center justify-between py-4">
        <Link to={`/product/${item.productId}`}>
          <div className="flex flex-row">
            <img src={item.image} alt={item.productName} width={100} height={100} />
            <div className="flex flex-col items-left justify-evenly ml-8">
              <h3 className="text-2xl font-bold">{item.productName}</h3>
              <h5>Optional info</h5>
            </div>
          </div>
        </Link>
        <div className="text-2xl">${item.price}</div>
        <div className="flex rounded-md bg-white border-solid justify-between px-5 mt-2 py-2 border border-black">
          <button
            onClick={() => {
              if (quantity > 1) {
                let arr = cart.arr as CartItem[];
                for (let i = 0; i < arr.length; i++) {
                  if (item.productId == arr[i].productId) {
                    arr[i].cartQuantity = quantity - 1;
                    break;
                  }
                }
                setCookie(
                  "cart",
                  JSON.stringify({
                    length: cart.length,
                    arr: arr,
                  }),
                  { path: "/" }
                );
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </button>
          <input
            className="text-center font-bold text-lg w-20"
            value={quantity}
            type="number"
            onChange={(event) => {
              let arr = cart.arr as CartItem[];
              for (let i = 0; i < arr.length; i++) {
                if (item.productId == arr[i].productId) {
                  arr[i].cartQuantity = parseInt(event.target.value);
                  break;
                }
              }
              setCookie(
                "cart",
                JSON.stringify({
                  length: cart.length,
                  arr: arr,
                }),
                { path: "/" }
              );
              setQuantity(parseInt(event.target.value));
            }}
          ></input>
          <button
            onClick={() => {
              if (quantity < item.quantity) {
                let arr = cart.arr as CartItem[];
                for (let i = 0; i < arr.length; i++) {
                  if (item.productId == arr[i].productId) {
                    arr[i].cartQuantity = quantity + 1;
                    break;
                  }
                }
                setCookie(
                  "cart",
                  JSON.stringify({
                    length: cart.length,
                    arr: arr,
                  }),
                  { path: "/" }
                );
                setQuantity(quantity + 1);
              }
            }}
          >
            +
          </button>
        </div>
        <input type="checkbox" className="p-6 w-6 h-6" />
      </div>
    </div>
  );
}

export default SingleCartItem;