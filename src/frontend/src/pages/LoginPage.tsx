import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[url(/assets/images/bg-login.png)] bg-cover w-full h-full bg-center relative flex">
      <div className="w-1/2 flex justify-center items-center">
        <div className="bg-white rounded-xl px-[50px] py-[70px] my-[90px] mx-[75px] w-full">
          <h1 className="text-[#557A46] opacity-[.8353] font-extrabold text-4xl">BuyMee</h1>
          <h2 className="text-3xl font-bold my-10">Log in</h2>
          <LoginForm />
          <div className="flex justify-center text-md space-x-2">
            <p className="opacity-[.2]">I don’t have an account ?</p>
            <Link className="text-[#8C3333]" to="/sign-up">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center relative">
        <button
          className="absolute z-10 top-0 right-0 mx-[20px] my-[20px] hover:stroke-yellow-600"
          onClick={() => {
            navigate("/");
          }}
        >
          <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_17_705)">
              <path
                d="M52.0228 20.405L34.9565 3.33651C32.8443 1.23049 29.9833 0.0478516 27.0005 0.0478516C24.0178 0.0478516 21.1567 1.23049 19.0445 3.33651L1.97827 20.405C1.34922 21.03 0.850498 21.7737 0.511001 22.5929C0.171505 23.4121 -0.00201012 24.2905 0.00051546 25.1773V47.2655C0.00051546 49.0557 0.711674 50.7726 1.97754 52.0385C3.24342 53.3044 4.9603 54.0155 6.75052 54.0155H47.2505C49.0407 54.0155 50.7576 53.3044 52.0235 52.0385C53.2894 50.7726 54.0005 49.0557 54.0005 47.2655V25.1773C54.003 24.2905 53.8295 23.4121 53.49 22.5929C53.1505 21.7737 52.6518 21.03 52.0228 20.405ZM33.7505 49.5155H20.2505V40.664C20.2505 38.8738 20.9617 37.1569 22.2275 35.891C23.4934 34.6252 25.2103 33.914 27.0005 33.914C28.7907 33.914 30.5076 34.6252 31.7735 35.891C33.0394 37.1569 33.7505 38.8738 33.7505 40.664V49.5155ZM49.5005 47.2655C49.5005 47.8622 49.2635 48.4345 48.8415 48.8565C48.4196 49.2785 47.8473 49.5155 47.2505 49.5155H38.2505V40.664C38.2505 37.6803 37.0653 34.8188 34.9555 32.7091C32.8457 30.5993 29.9842 29.414 27.0005 29.414C24.0168 29.414 21.1554 30.5993 19.0456 32.7091C16.9358 34.8188 15.7505 37.6803 15.7505 40.664V49.5155H6.75052C6.15378 49.5155 5.58148 49.2785 5.15953 48.8565C4.73757 48.4345 4.50052 47.8622 4.50052 47.2655V25.1773C4.5026 24.581 4.73944 24.0095 5.15977 23.5865L22.226 6.52476C23.4943 5.26235 25.211 4.55363 27.0005 4.55363C28.79 4.55363 30.5067 5.26235 31.775 6.52476L48.8413 23.5933C49.26 24.0146 49.4967 24.5833 49.5005 25.1773V47.2655Z"
                fill="white"
                fill-opacity="0.8"
              />
            </g>
            <defs>
              <clipPath id="clip0_17_705">
                <rect width="54" height="54" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <img src="/assets/images/Dog.png"></img>
      </div>
    </div>
  );
}
