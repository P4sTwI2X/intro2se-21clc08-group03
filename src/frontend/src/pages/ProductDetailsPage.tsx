import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import productList from "../models/product.json";
import { Cart, CartItem } from "../models/cart";
import cartSample from "../models/cart.json";
import { useCookies } from "react-cookie";

export default function ProductDetails() {
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["cart"]);
  const [cart, setCart] = useState(!cookie.cart ? (cartSample as Cart) : (cookie.cart as Cart));
  const { id } = useParams();
  const product = productList.arr[parseInt(id || "1") - 1];
  const [quantity, setQuantity] = useState(1);

  async function addProductOnCart() {
    let arr = cart.arr as CartItem[];
    var isExist = false;
    for (let i = 0; i < arr.length; i++) {
      if (product.productId == arr[i].productId) {
        arr[i].cartQuantity += quantity;
        isExist = true;
        break;
      }
    }
    if (!isExist) {
      arr.push({
        ...product,
        cartQuantity: quantity,
      });
    }

    setCookie(
      "cart",
      JSON.stringify({
        length: cart.length + (isExist ? 0 : 1),
        arr: arr,
      }),
      { path: "/" }
    );

    setCart(!cookie.cart ? (cartSample as Cart) : (cookie.cart as Cart));
  }

  return (
    <div className="w-full flex justify-center items-center px-20 py-10 space-x-20">
      <div className="w-[640px] h-[560px] rounded-xl bg-[#E8E8DF] flex justify-center items-center">
        <img src={product.image}></img>
      </div>
      <div className="w-1/2">
        <h1 className="font-extrabold text-4xl">{product.productName}</h1>
        <h2 className="font-light text-[#828282] text-lg mt-3">{`SHOP${product.productId}`}</h2>
        <div className="flex items-center space-x-6 my-6">
          <p className="line-through text-[#828282] text-xl">$99.99</p>
          <p className="text-red-600 font-extrabold text-3xl">${product.price}</p>
        </div>
        <h2 className="font-bold text-lg">Description</h2>
        <p className="text-lg my-2 text-md">{product.description}</p>
        <Link to="#" className="text-[#7A9D54] text-md">
          Read more
        </Link>
        <div className="rounded-lg bg-[#F2FFD2] px-10 py-5 mt-8">
          <h1 className="font-bold text-lg">Quantity</h1>
          <div className="flex rounded-md bg-white border-solid justify-between px-5 mt-2 py-2">
            <button
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}
            >
              -
            </button>
            <input
              className="text-center font-bold text-lg"
              value={quantity}
              type="number"
              onChange={(event) => {
                setQuantity(parseInt(event.target.value));
              }}
            ></input>
            <button
              onClick={() => {
                if (quantity < product.quantity) {
                  setQuantity(quantity + 1);
                }
              }}
            >
              +
            </button>
          </div>
          <p className="text-[#828282] mt-1 mb-5">Maximum purchase {` ${product.quantity}`}</p>
          <button
            onClick={() => {
              addProductOnCart();
              navigate("/cart");
            }}
            className="w-full bg-[#8C3333] text-white font-bold rounded-md py-2 active:bg-red-800 hover:bg-red-800"
          >
            Buy Now
          </button>
          <div className="flex w-full justify-between text-[#7A9D54] mt-4 space-x-5 ">
            <button
              onClick={addProductOnCart}
              className="py-2 px-4  border border-solid border-[#7A9D54] rounded-md bg-white w-full hover:border-yellow-500 hover:text-yellow-500"
            >
              <i className="bi bi-cart"></i>
              {" Add To Cart"}
            </button>
            <button className="py-2 px-4  border border-solid border-[#7A9D54] rounded-md bg-white w-full hover:border-yellow-500 hover:text-yellow-500">
              <i className="bi bi-heart"></i>
              {" Like"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
