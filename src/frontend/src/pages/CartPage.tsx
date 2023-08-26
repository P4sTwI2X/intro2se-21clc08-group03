import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import cartSample from "../models/cart.json";
import { Cart } from "../models/cart";
import SingleCartItem from "../components/SingleCartItem";

const CartPage = () => {
  const [cookie, _] = useCookies(["cart"]);
  const [cart, setCart] = useState(!cookie.cart ? (cartSample as Cart) : (cookie.cart as Cart));
  const [total, setTotal] = useState(0);
  function calculateTotal() {
    var totalPrice = 0;
    for (var item of cookie.cart.arr) {
      totalPrice += item?.price * item?.cartQuantity;
    }
    return totalPrice;
  }
  useEffect(() => {
    setCart(!cookie.cart ? (cartSample as Cart) : (cookie.cart as Cart));

    setTotal(calculateTotal());
  }, [cookie]);

  return (
    <div className="flex flex-col py-10  px-10 w-full bg-amber-100">
      <div className="flex flex-row justify-between mb-8">
        <div className="text-3xl font-semibold text-amber-700">
          BuyMee | Shopping cart <i className="bi bi-cart3"></i>
        </div>
        <div className="flex flex-row text-2xl font-medium items-center">
          <div className="mr-4">Total: </div>
          <div className="italic text-green-700 font-semibold mr-4">${total}</div>
          <button className="px-6 py-2 bg-red-600 font-medium rounded-2xl text-white hover:bg-red-500">
            CHECK OUT{" "}
          </button>
        </div>
      </div>
      {cart.length == 0 && <p>There are no products in your cart</p>}
      {cart.arr.map((value, index) => {
        return <SingleCartItem item={value} key={`cart${index}`} />;
      })}
    </div>
  );
};

export default CartPage;
