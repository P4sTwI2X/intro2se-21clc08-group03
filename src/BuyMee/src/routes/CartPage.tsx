import CartItem from "../components/CartItem";

const CartPage = () => {
  return (
    <div className="flex flex-col py-10  px-10 w-full bg-amber-100">
      <div className="flex flex-row justify-between mb-8">
        <div className="text-3xl font-semibold text-amber-700">
          BuyMee | Shopping cart <i className="bi bi-cart3"></i>
        </div>
        <div className="flex flex-row text-2xl font-medium items-center">
          <div className="mr-4">Total: </div>
          <div className="italic text-green-700 font-semibold mr-4">$100 </div>
          <button className="px-6 py-2 bg-red-600 font-medium rounded-2xl text-white hover:bg-red-500">
            CHECK OUT{" "}
          </button>
        </div>
      </div>

      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
};

export default CartPage;
