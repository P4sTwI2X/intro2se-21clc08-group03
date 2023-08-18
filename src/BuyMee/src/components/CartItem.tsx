import { useState } from "react";
import { Product } from "../models/product";

function CartItem() {
  const [quantity, setQuantity] = useState(1);
  const product: Product = {
    description: "Breifly info about product",
    image: "/assets/images/product.png",
    price: 69.99,
    productName: "Product Name",
    quantity: 5,
    shopId: "SHOP NAME",
  };

  return (
    <div className="w-full bg-white rounded-md py-2 px-8 flex flex-col shadow-md my-2 ">
      <div className="text-xl py-4 border-b border-black">Shop name</div>
      <div className="flex flex-row items-center justify-between py-4">
        <div className="flex flex-row">
          <img src="./boss1.png" alt="Cat" width={100} height={100} />
          <div className="flex flex-col items-left justify-evenly ml-8">
            <h3 className="text-2xl font-bold">Product name</h3>
            <h5>Optional info</h5>
          </div>
        </div>
        <div className="text-2xl">$100</div>
        <div className="flex rounded-md bg-white border-solid justify-between px-5 mt-2 py-2 border border-black">
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
            className="text-center font-bold text-lg w-20"
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
        <input type="checkbox" className="p-6 w-6 h-6" />
      </div>
    </div>
  );
}

export default CartItem;
