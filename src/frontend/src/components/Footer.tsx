export default function Footer() {
  return (
    <nav className="bg-[#7A9D54] border-none dark:bg-gray-900 grid grid-cols-3 gap-0 px-10 py-5">
      <div className="flex flex-col space-y-5">
        <h1 className="text-2xl drop-shadow-2xl text-rose-900 font-bold">Get In Touch</h1>
        <p className="text-white">the quick fox jumps over the lazy dog</p>
        <div className="flex justify between text-white text-2xl space-x-4">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-twitter"></i>
        </div>
      </div>
      <div className="flex flex-col space-y-5">
        <h1 className="text-2xl drop-shadow-2xl text-rose-900 font-bold">Team Info</h1>
        <div className="flex flex-col text-white space-y-2">
          <p>Nguyễn Thế Thiện - 21127170 </p>
          <p>Đinh Hoàng Duy - 21127027</p>
          <p>Phan Lý Bảo Hạnh - 21127039</p>
          <p>Lâm Thiều Huy - 21127059</p>
        </div>
      </div>
      <div className="flex flex-col space-y-5">
        <h1 className="text-2xl drop-shadow-xl text-rose-900 font-bold">About BuyMee</h1>
        <p className="text-white">
          This project is the final term project of <br></br> Introduction to Software Enginering in HCMUS
        </p>
      </div>
    </nav>
  );
}
