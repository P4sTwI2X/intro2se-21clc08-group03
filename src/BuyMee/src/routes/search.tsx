import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function SearchPage() {
  const query = useQuery(); // search query
  const [sideBarView, setSideBarView] = useState(false);
  const dummyData = [
    {
      image: "./boss1.png",
      name: "Dog 1",
      price: " 100",
    },
    {
      image: "./boss1.png",
      name: "Dog 1",
      price: " 200",
    },
    {
      image: "./boss1.png",
      name: "Dog 1",
      price: " 100",
    },
    {
      image: "./boss1.png",
      name: "Dog 1",
      price: " 200",
    },

    {
      image: "./boss1.png",
      name: "Dog 1",
      price: " 100",
    },
    {
      image: "./boss1.png",
      name: "Dog 1",
      price: " 300",
    },

    {
      image: "./boss1.png",
      name: "Dog 1",
      price: " 100",
    },
    {
      image: "./boss1.png",
      name: "Dog 1",
      price: " 6700",
    },
    {
      image: "./boss1.png",
      name: "Dog 1",
      price: " 6700",
    },
  ];
  const shopOptions = ["Name 1", "Name 2", "Name 3"];
  const originOptions = ["Origin 1", "Origin 2", "Origin 3"];
  const ageOptions = ["Age 1", "Age 2", "Age 3"];
  const priceOptions = ["$100-200", "$200-300", "$>300"];
  return (
    <div
      className="w-full h-full relative"
    >
      <div className={"absolute z-20 h-full w-full " + (sideBarView ? "" : "hidden")} onClick={(event)=>{
        if (event.target==event.currentTarget) {
          setSideBarView(false);
        }
      }}>
      <div
        className={"absolute z-30 h-full w-fit p-[50px] bg-[#DFEACC]"}
        id="sidebar-filter"
      >
        <div className="flex w-full justify-end text-red-900 top-0 right-0 absolute z-30 mx-2 my-2 text-2xl">
          <button
            onClick={() => {
              setSideBarView(false);
            }}
          >
            <i className="bi bi-x-square-fill"></i>
          </button>
        </div>
        <div className="w-full flex justify-center items-center space-x-2 text-red-700">
          <div className="w-[33px] h-[30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="30"
              viewBox="0 0 33 30"
              fill="none"
              className="fill-red-700"
            >
              <path d="M12.3752 15.3337V27.1875C12.3752 27.3474 12.4202 27.5046 12.5059 27.6442C12.5915 27.7838 12.7151 27.9012 12.8647 27.9852C13.0143 28.0692 13.1851 28.117 13.3608 28.124C13.5365 28.1311 13.7112 28.0972 13.8685 28.0256L20.056 25.2131C20.227 25.1352 20.3709 25.0155 20.4714 24.8675C20.5719 24.7195 20.6252 24.549 20.6252 24.375V15.3337L29.6734 5.28187C29.7592 5.18658 29.8236 5.07685 29.8628 4.95894C29.902 4.84103 29.9153 4.71726 29.9019 4.59469C29.8885 4.47211 29.8487 4.35314 29.7847 4.24456C29.7207 4.13598 29.6338 4.03992 29.529 3.96187C29.4242 3.88382 29.3035 3.82529 29.1738 3.78965C29.0441 3.754 28.9079 3.74193 28.7731 3.75411C28.6383 3.7663 28.5074 3.80251 28.388 3.86068C28.2685 3.91885 28.1629 3.99783 28.077 4.09312L18.7958 14.4056C18.6449 14.5733 18.5625 14.7833 18.5627 15V23.7956L14.4377 25.6706V15C14.4379 14.7833 14.3555 14.5733 14.2046 14.4056L6.30114 5.625H22.6877C22.9612 5.625 23.2235 5.52622 23.4169 5.35041C23.6103 5.17459 23.719 4.93614 23.719 4.6875C23.719 4.43885 23.6103 4.2004 23.4169 4.02458C23.2235 3.84877 22.9612 3.75 22.6877 3.75H4.1252C3.92984 3.74988 3.73846 3.80021 3.57334 3.89513C3.40823 3.99005 3.27616 4.12566 3.19253 4.28616C3.1089 4.44667 3.07714 4.62547 3.10095 4.80175C3.12476 4.97802 3.20315 5.14453 3.32701 5.28187L12.3752 15.3337Z" />
            </svg>
          </div>
          <p className="text-[28px]">SEARCH FILTER</p>
        </div>
        <p className="text-[28px] font-[500] mt-5">Shop</p>
        {shopOptions.map((option, index) => {
          return (
            <div className="flex space-x-2 ms-10" key={`shop${index}`}>
              <input type="checkbox" name="shop" value={option}></input>
              <p className="text-[20px] font-light">{option}</p>
            </div>
          );
        })}
        <div className="w-full bg-[#73737380] h-[1.5px] my-[60px]"></div>

        <p className="text-[28px] font-[500]">Origin</p>
        {originOptions.map((option, index) => {
          return (
            <div className="flex space-x-2 ms-10" key={`origin${index}`}>
              <input type="checkbox" name="origin" value={option}></input>
              <p className="text-[20px] font-light">{option}</p>
            </div>
          );
        })}
        <div className="w-full bg-[#73737380] h-[1.5px] my-[60px]"></div>

        <p className="text-[28px] font-[500]">Age</p>
        {ageOptions.map((option, index) => {
          return (
            <div className="flex space-x-2 ms-10" key={`age${index}`}>
              <input type="checkbox" name="age" value={option}></input>
              <p className="text-[20px] font-light">{option}</p>
            </div>
          );
        })}
        <div className="w-full bg-[#73737380] h-[1.5px] my-[60px]"></div>

        <p className="text-[28px] font-[500]">Price</p>
        {priceOptions.map((option, index) => {
          return (
            <div className="flex space-x-2 ms-10" key={`price${index}`}>
              <input type="checkbox" name="price" value={option}></input>
              <p className="text-[20px] font-light">{option}</p>
            </div>
          );
        })}
        <div className="w-full bg-[#73737380] h-[1.5px] my-[60px]"></div>
      </div>
      </div>
      <div className="w-full px-[130px] py-[30px] bg-white">
        <div className="flex justify-between w-full">
          <div className="flex space-x-5">
            <button
              onClick={() => {
                setSideBarView(!sideBarView);
              }}
              className="rounded-[10px] bg-[#8C3333EB] w-[130px] h-[50px] text-white flex justify-center items-center space-x-2 hover:bg-red-800"
            >
              <div className="w-[33px] h-[30px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="30" viewBox="0 0 33 30" fill="none">
                  <path
                    d="M12.3752 15.3337V27.1875C12.3752 27.3474 12.4202 27.5046 12.5059 27.6442C12.5915 27.7838 12.7151 27.9012 12.8647 27.9852C13.0143 28.0692 13.1851 28.117 13.3608 28.124C13.5365 28.1311 13.7112 28.0972 13.8685 28.0256L20.056 25.2131C20.227 25.1352 20.3709 25.0155 20.4714 24.8675C20.5719 24.7195 20.6252 24.549 20.6252 24.375V15.3337L29.6734 5.28187C29.7592 5.18658 29.8236 5.07685 29.8628 4.95894C29.902 4.84103 29.9153 4.71726 29.9019 4.59469C29.8885 4.47211 29.8487 4.35314 29.7847 4.24456C29.7207 4.13598 29.6338 4.03992 29.529 3.96187C29.4242 3.88382 29.3035 3.82529 29.1738 3.78965C29.0441 3.754 28.9079 3.74193 28.7731 3.75411C28.6383 3.7663 28.5074 3.80251 28.388 3.86068C28.2685 3.91885 28.1629 3.99783 28.077 4.09312L18.7958 14.4056C18.6449 14.5733 18.5625 14.7833 18.5627 15V23.7956L14.4377 25.6706V15C14.4379 14.7833 14.3555 14.5733 14.2046 14.4056L6.30114 5.625H22.6877C22.9612 5.625 23.2235 5.52622 23.4169 5.35041C23.6103 5.17459 23.719 4.93614 23.719 4.6875C23.719 4.43885 23.6103 4.2004 23.4169 4.02458C23.2235 3.84877 22.9612 3.75 22.6877 3.75H4.1252C3.92984 3.74988 3.73846 3.80021 3.57334 3.89513C3.40823 3.99005 3.27616 4.12566 3.19253 4.28616C3.1089 4.44667 3.07714 4.62547 3.10095 4.80175C3.12476 4.97802 3.20315 5.14453 3.32701 5.28187L12.3752 15.3337Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p>Filter</p>
            </button>
            <button className="rounded-[10px] bg-[#E4E4E4EB] w-[165px] h-[50px] text-black flex justify-center items-center space-x-2 hover:bg-gray-300">
              <div className="w-[33px] h-[30px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M12 8H27M12 16H21M12 24H27M7 24C7 24.2652 6.89464 24.5196 6.70711 24.7071C6.51957 24.8946 6.26522 25 6 25C5.73478 25 5.48043 24.8946 5.29289 24.7071C5.10536 24.5196 5 24.2652 5 24C5 23.7348 5.10536 23.4804 5.29289 23.2929C5.48043 23.1054 5.73478 23 6 23C6.26522 23 6.51957 23.1054 6.70711 23.2929C6.89464 23.4804 7 23.7348 7 24ZM7 16C7 16.2652 6.89464 16.5196 6.70711 16.7071C6.51957 16.8946 6.26522 17 6 17C5.73478 17 5.48043 16.8946 5.29289 16.7071C5.10536 16.5196 5 16.2652 5 16C5 15.7348 5.10536 15.4804 5.29289 15.2929C5.48043 15.1054 5.73478 15 6 15C6.26522 15 6.51957 15.1054 6.70711 15.2929C6.89464 15.4804 7 15.7348 7 16ZM7 8C7 8.26522 6.89464 8.51957 6.70711 8.70711C6.51957 8.89464 6.26522 9 6 9C5.73478 9 5.48043 8.89464 5.29289 8.70711C5.10536 8.51957 5 8.26522 5 8C5 7.73478 5.10536 7.48043 5.29289 7.29289C5.48043 7.10536 5.73478 7 6 7C6.26522 7 6.51957 7.10536 6.70711 7.29289C6.89464 7.48043 7 7.73478 7 8Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <p>Popularity</p>
            </button>
          </div>
          <div className="flex justify-between space-x-5 items-center">
            <p className="font-bold text-black text-[20px]">Views:</p>
            <button className="bg-[#E6E6E680] w-[50px] h-[50px] rounded-[10px] flex justify-center items-center hover:bg-gray-300">
              <div className="w-[24px] h-[24px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M1.5 3.75C1.5 3.15326 1.73705 2.58097 2.15901 2.15901C2.58097 1.73705 3.15326 1.5 3.75 1.5H8.25C8.84674 1.5 9.41903 1.73705 9.84099 2.15901C10.2629 2.58097 10.5 3.15326 10.5 3.75V8.25C10.5 8.84674 10.2629 9.41903 9.84099 9.84099C9.41903 10.2629 8.84674 10.5 8.25 10.5H3.75C3.15326 10.5 2.58097 10.2629 2.15901 9.84099C1.73705 9.41903 1.5 8.84674 1.5 8.25V3.75ZM13.5 3.75C13.5 3.15326 13.7371 2.58097 14.159 2.15901C14.581 1.73705 15.1533 1.5 15.75 1.5H20.25C20.8467 1.5 21.419 1.73705 21.841 2.15901C22.2629 2.58097 22.5 3.15326 22.5 3.75V8.25C22.5 8.84674 22.2629 9.41903 21.841 9.84099C21.419 10.2629 20.8467 10.5 20.25 10.5H15.75C15.1533 10.5 14.581 10.2629 14.159 9.84099C13.7371 9.41903 13.5 8.84674 13.5 8.25V3.75ZM1.5 15.75C1.5 15.1533 1.73705 14.581 2.15901 14.159C2.58097 13.7371 3.15326 13.5 3.75 13.5H8.25C8.84674 13.5 9.41903 13.7371 9.84099 14.159C10.2629 14.581 10.5 15.1533 10.5 15.75V20.25C10.5 20.8467 10.2629 21.419 9.84099 21.841C9.41903 22.2629 8.84674 22.5 8.25 22.5H3.75C3.15326 22.5 2.58097 22.2629 2.15901 21.841C1.73705 21.419 1.5 20.8467 1.5 20.25V15.75ZM13.5 15.75C13.5 15.1533 13.7371 14.581 14.159 14.159C14.581 13.7371 15.1533 13.5 15.75 13.5H20.25C20.8467 13.5 21.419 13.7371 21.841 14.159C22.2629 14.581 22.5 15.1533 22.5 15.75V20.25C22.5 20.8467 22.2629 21.419 21.841 21.841C21.419 22.2629 20.8467 22.5 20.25 22.5H15.75C15.1533 22.5 14.581 22.2629 14.159 21.841C13.7371 21.419 13.5 20.8467 13.5 20.25V15.75Z"
                    fill="#252B42"
                  />
                </svg>
              </div>
            </button>
            <button className="bg-[#E6E6E680] w-[50px] h-[50px] rounded-[10px] flex justify-center items-center hover:bg-gray-300">
              <div className="w-[31px] h-[31px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.71997 24.2205C8.71997 23.9636 8.82204 23.7171 9.00371 23.5355C9.18539 23.3538 9.4318 23.2517 9.68872 23.2517H27.1262C27.3832 23.2517 27.6296 23.3538 27.8112 23.5355C27.9929 23.7171 28.095 23.9636 28.095 24.2205C28.095 24.4774 27.9929 24.7238 27.8112 24.9055C27.6296 25.0872 27.3832 25.1892 27.1262 25.1892H9.68872C9.4318 25.1892 9.18539 25.0872 9.00371 24.9055C8.82204 24.7238 8.71997 24.4774 8.71997 24.2205ZM8.71997 16.4705C8.71997 16.2136 8.82204 15.9671 9.00371 15.7855C9.18539 15.6038 9.4318 15.5017 9.68872 15.5017H27.1262C27.3832 15.5017 27.6296 15.6038 27.8112 15.7855C27.9929 15.9671 28.095 16.2136 28.095 16.4705C28.095 16.7274 27.9929 16.9738 27.8112 17.1555C27.6296 17.3372 27.3832 17.4392 27.1262 17.4392H9.68872C9.4318 17.4392 9.18539 17.3372 9.00371 17.1555C8.82204 16.9738 8.71997 16.7274 8.71997 16.4705ZM8.71997 8.72048C8.71997 8.46355 8.82204 8.21715 9.00371 8.03547C9.18539 7.8538 9.4318 7.75173 9.68872 7.75173H27.1262C27.3832 7.75173 27.6296 7.8538 27.8112 8.03547C27.9929 8.21715 28.095 8.46355 28.095 8.72048C28.095 8.97741 27.9929 9.22382 27.8112 9.40549C27.6296 9.58717 27.3832 9.68923 27.1262 9.68923H9.68872C9.4318 9.68923 9.18539 9.58717 9.00371 9.40549C8.82204 9.22382 8.71997 8.97741 8.71997 8.72048ZM6.4996 6.09711C6.58982 6.1871 6.66139 6.294 6.71023 6.41169C6.75907 6.52939 6.7842 6.65556 6.7842 6.78298C6.7842 6.91041 6.75907 7.03658 6.71023 7.15427C6.66139 7.27197 6.58982 7.37887 6.4996 7.46886L3.59335 10.3751C3.50336 10.4653 3.39646 10.5369 3.27876 10.5857C3.16107 10.6346 3.0349 10.6597 2.90747 10.6597C2.78005 10.6597 2.65388 10.6346 2.53618 10.5857C2.41849 10.5369 2.31159 10.4653 2.2216 10.3751L1.25285 9.40636C1.16278 9.31629 1.09133 9.20936 1.04258 9.09167C0.993839 8.97399 0.96875 8.84786 0.96875 8.72048C0.96875 8.5931 0.993839 8.46697 1.04258 8.34929C1.09133 8.23161 1.16278 8.12468 1.25285 8.03461C1.34292 7.94454 1.44985 7.87309 1.56753 7.82434C1.68521 7.7756 1.81135 7.75051 1.93872 7.75051C2.0661 7.75051 2.19223 7.7756 2.30992 7.82434C2.4276 7.87309 2.53453 7.94454 2.6246 8.03461L2.90747 8.31942L5.12785 6.09711C5.21784 6.00689 5.32474 5.93531 5.44243 5.88648C5.56013 5.83764 5.6863 5.8125 5.81372 5.8125C5.94115 5.8125 6.06732 5.83764 6.18501 5.88648C6.30271 5.93531 6.40961 6.00689 6.4996 6.09711ZM6.4996 13.8471C6.58982 13.9371 6.66139 14.044 6.71023 14.1617C6.75907 14.2794 6.7842 14.4056 6.7842 14.533C6.7842 14.6604 6.75907 14.7866 6.71023 14.9043C6.66139 15.022 6.58982 15.1289 6.4996 15.2189L3.59335 18.1251C3.50336 18.2153 3.39646 18.2869 3.27876 18.3357C3.16107 18.3846 3.0349 18.4097 2.90747 18.4097C2.78005 18.4097 2.65388 18.3846 2.53618 18.3357C2.41849 18.2869 2.31159 18.2153 2.2216 18.1251L1.25285 17.1564C1.07094 16.9745 0.96875 16.7277 0.96875 16.4705C0.96875 16.2132 1.07094 15.9665 1.25285 15.7846C1.43475 15.6027 1.68147 15.5005 1.93872 15.5005C2.19598 15.5005 2.44269 15.6027 2.6246 15.7846L2.90747 16.0694L5.12785 13.8471C5.21784 13.7569 5.32474 13.6853 5.44243 13.6365C5.56013 13.5876 5.6863 13.5625 5.81372 13.5625C5.94115 13.5625 6.06732 13.5876 6.18501 13.6365C6.30271 13.6853 6.40961 13.7569 6.4996 13.8471ZM6.4996 21.5971C6.58982 21.6871 6.66139 21.794 6.71023 21.9117C6.75907 22.0294 6.7842 22.1556 6.7842 22.283C6.7842 22.4104 6.75907 22.5366 6.71023 22.6543C6.66139 22.772 6.58982 22.8789 6.4996 22.9689L3.59335 25.8751C3.50336 25.9653 3.39646 26.0369 3.27876 26.0857C3.16107 26.1346 3.0349 26.1597 2.90747 26.1597C2.78005 26.1597 2.65388 26.1346 2.53618 26.0857C2.41849 26.0369 2.31159 25.9653 2.2216 25.8751L1.25285 24.9064C1.07094 24.7244 0.96875 24.4777 0.96875 24.2205C0.96875 23.9632 1.07094 23.7165 1.25285 23.5346C1.43475 23.3527 1.68147 23.2505 1.93872 23.2505C2.19598 23.2505 2.44269 23.3527 2.6246 23.5346L2.90747 23.8194L5.12785 21.5971C5.21784 21.5069 5.32474 21.4353 5.44243 21.3865C5.56013 21.3376 5.6863 21.3125 5.81372 21.3125C5.94115 21.3125 6.06732 21.3376 6.18501 21.3865C6.30271 21.4353 6.40961 21.5069 6.4996 21.5971Z"
                    fill="black"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="text-[20px] text-[#9B9B9B] flex items-center justify-center">Showing all XX results</div>
        </div>
        <div className="text-[#8C3333] text-[60px] my-[60px] w-fit border border-t-4 border-b-4 border-x-0 border-[#000000]">
          Search results
        </div>
        <div className="grid grid-cols-3 gap-x-[130px] gap-y-[60px]">
          {dummyData.map((product, index) => {
            return (
              <div className="w-fit h-fit" key={`product${index}`}>
                <img src={product.image} className="rounded-[33px] w-[300px] h-[300px]"></img>
                <p className="text-[32px] font-semibold mt-[60px]">{product.name}</p>
                <p className="text-[32px] font-light">${product.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
