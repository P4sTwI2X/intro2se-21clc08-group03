import HorizontalListCard from "./HorizontalListCard";

export default function HomePage() {
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
  ];

  return (
    <div className="flex flex-col py-10  px-10 w-full ">
      {/* Banner */}
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-1 flex-col">
          <hr className=" h-0.5 bg-black " />
          <h3 className="text-5xl font-medium py-4 text-left border-b-2 border-solid border-black pb-4">
            Let's find your
          </h3>
          <div className="flex py-6">
            <div className=" text-5xl font-medium text-left text-amber-800  border-b-2 border-solid border-black pb-7">
              <span className="text-blue-500 ">"</span>Boss<span className="text-blue-500">"</span>
            </div>
          </div>

          <div className="flex flex-row mt-12">
            <button className="px-6 py-4 bg-black text-white text-lg mr-6 border border-solid border-black rounded-md hover:bg-gray-800">
              SHOP NOW
            </button>
            <button className="px-6 py-4 bg-white text-black text-lg  border border-solid border-black rounded-md hover:bg-amber-50">
              Read news
            </button>
          </div>
        </div>
        <div className="flex-[2_2_0%] flex items-center justify-center">
          <img width={500} height={500} src="./cat.png" alt="Cat image" className="text-center" />
        </div>
      </div>

      {/* Horizontal */}
      <HorizontalListCard title={"Boss"} data={dummyData} />

      <HorizontalListCard title={"Boss service"} data={dummyData} />
    </div>
  );
}