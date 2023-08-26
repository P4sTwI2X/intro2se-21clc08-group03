import { useEffect, useState } from "react";
import { Cart, CartItem } from "../models/cart";
import { useCookies } from "react-cookie";
import cartSample from "../models/cart.json";
import { Link } from "react-router-dom";

function SingleCartItem({ item }: { item: CartItem }) {
  const [quantity, setQuantity] = useState(item.cartQuantity);
  const [cookie, setCookie] = useCookies(["cart"]);
  const [cart, setCart] = useState(!cookie.cart ? (cartSample as Cart) : (cookie.cart as Cart));

  useEffect(() => {
    setCart(!cookie.cart ? (cartSample as Cart) : (cookie.cart as Cart));
  }, [cookie]);

  function decreaseQuantity() {
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
  }

  function changeInputQuantity(event: any) {
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
  }

  function increaseQuantity() {
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
  }

  function removeProduct() {
    let arr = cart.arr as CartItem[];

    arr = arr.filter((e) => e.productId != item.productId);
    setCookie(
      "cart",
      JSON.stringify({
        length: arr,
        arr: arr,
      }),
      { path: "/" }
    );
  }

  return (
    <div className="w-full bg-white rounded-md py-2 px-8 flex flex-col shadow-md my-2 ">
      <div className="text-xl py-4 border-b border-black">{`SHOP${item.productId}`}</div>
      <div className="flex flex-row items-center justify-between py-4">
        <Link to={`/product/${item.productId}`} className="flex-[3]">
          <div className="flex-[3] flex flex-row">
            <img src={item.image} alt={item.productName} width={100} height={100} />
            <div className="flex flex-col items-left justify-evenly ml-8">
              <h3 className="text-2xl font-bold">{item.productName}</h3>
            </div>
          </div>
        </Link>
        <div className="flex-1 text-center text-2xl">${item.price}</div>
        <div className="flex rounded-md bg-white border-solid justify-between px-5 mt-2 py-2 border border-black">
          <button onClick={decreaseQuantity}>-</button>
          <input
            className="text-center font-bold text-lg w-20"
            value={quantity}
            type="number"
            onChange={changeInputQuantity}
          ></input>
          <button className="flex-1" onClick={increaseQuantity}>
            +
          </button>
        </div>
        <button
          onClick={removeProduct}
          className="ml-20 w-4 p-4 rounded-full text-xl h-6 text-red-500 hover:text-red-800 m-auto flex items-center justify-center"
        >
          x
        </button>
      </div>
    </div>
  );
}

export default SingleCartItem;
