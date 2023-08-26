import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../models/product";

function HorizontalListCard({ data, title }: { data: Array<Product>; title: String }) {
  const itemPerPage = 5;
  const [current, setCurrent] = useState(0);
  function moveLeft() {
    if (current >= 1) setCurrent(current - 1);
  }
  function moveRight() {
    if (current < data.length - itemPerPage) setCurrent(current + 1);
  }

  return (
    <div className="flex flex-row">
      <div className="flex-1 flex py-8 flex-col w-full">
        <div className=" text-5xl font-medium text-left text-amber-800  pb-8">
          <span className=" border-y-2 border-solid border-black">{title}</span>
        </div>
        <div className="relative flex flex-row justify-between">
          <button
            className="absolute text-5xl -right-7 rounded-full bg-amber-100 p-4 hover:bg-amber-50 self-center"
            onClick={moveRight}
            hidden={data.length < itemPerPage}
          >
            {">"}
          </button>
          <button
            className="absolute text-5xl -left-7 rounded-full bg-amber-100 p-4 hover:bg-amber-50 self-center"
            onClick={moveLeft}
            hidden={data.length < itemPerPage}
          >
            {"<"}
          </button>

          {data.length < itemPerPage ? (
            <>
              {
                (Array.from({ length: itemPerPage }),
                (_: any, index: number) => {
                  if (index < data.length) {
                    return (
                      <Link
                        className="flex-1 flex flex-col items-center"
                        key={index}
                        to={`/product/${data[index].productId}`}
                      >
                        <img
                          src={data?.[index].image.toString()}
                          width={200}
                          height={200}
                          alt="boss"
                          className="rounded-md object-contain"
                        />
                        <div className="text-lg font-semibold mt-8 mb-1 text-center">{data[index].productName}</div>
                        <div className=" mb-4 ">{data[index].price}$</div>
                      </Link>
                    );
                  } else <div></div>;
                })
              }
            </>
          ) : (
            data?.map((e: any, key: number) => {
              if (key >= current && key < current + itemPerPage)
                return (
                  <Link className="flex-1 flex flex-col items-center" key={key} to={`/product/${e.productId}`}>
                    <img src={e.image.toString()} width={200} height={200} alt="boss" className="rounded-md" />
                    <div className="text-lg font-semibold mt-8 mb-1  text-center">{e.productName}</div>
                    <div className=" mb-4 ">{e.price}$</div>
                  </Link>
                );
              else <div></div>;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default HorizontalListCard;
