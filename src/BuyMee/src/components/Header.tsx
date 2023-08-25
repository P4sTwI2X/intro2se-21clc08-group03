import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Cart } from "../models/cart";
import cartSample from "../models/cart.json";
import { Cookies, useCookies } from "react-cookie";

export default function Header() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [cookie, setCookie] = useCookies(["cart"]);
  const [len, setLen] = useState(
    !cookie.cart ?cartSample.length: (cookie.cart as Cart).arr.length
  );
  useEffect(() => {
    setLen(!cookie.cart ? cartSample.length:(cookie.cart as Cart).arr.length);
  }, [cookie]);
  return (
    <nav className="bg-[#7A9D54] border-none dark:bg-gray-900 grid grid-rows-2 gap-0">
      <div className="w-full flex flex-wrap items-center justify-end px-10">
        <ul className="flex justify-between space-x-5">
          <li>
            <Link to="/categories" className="text-white hover:text-yellow-400">
              Categiories
            </Link>
          </li>
          <li className="text-white font-light">|</li>
          <li>
            <Link to="/articles" className="text-white hover:text-yellow-400">
              Articles
            </Link>
          </li>
          <li className="text-white font-light">|</li>
          <li>
            <Link to="/login" className="text-white hover:text-yellow-400">
              Login
            </Link>
          </li>
          <li className="text-white font-light">|</li>
          <li>
            <Link to="/sign-up" className="text-white hover:text-yellow-400">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap items-center justify-center mx-auto space-x-10 mb-5">
        <h1
          className="font-black text-white text-4xl cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          BuyMee
        </h1>
        <div className="pt-2 relative mx-auto text-gray-600 ms-2">
          <input
            className="bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            value={keyword}
            onChange={(event) => {
              setKeyword(event.target.value);
            }}
            onKeyUp={(event) => {
              if (event.key == "Enter") {
                navigate(`/search?keyword=${event.currentTarget.value}`);
              }
            }}
            type="search"
            name="search"
            placeholder="Search here..."
            autoComplete="off"
            style={{ width: "60vw" }}
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-3 mr-1"
            onClick={() => {
              navigate(`/search?keyword=${keyword}`);
            }}
          >
            <div className="rounded-md bg-amber-200 px-2">
              <i className="bi bi-search text-rose-900 text-2xl font-bold"></i>
            </div>
          </button>
        </div>
        <Link
          to="/cart"
          className="relative block py-2 pl-3 pr-4 text-white hover:text-yellow-400 rounded"
          aria-current="page"
        >
          <i className="relative bi bi-cart3 text-3xl"></i>
          <p className="bg-red-600 text-white px-2 py-0 absolute z-10 top-0 right-0 text-sm rounded-md">{len}</p>
        </Link>
      </div>
    </nav>
  );
}