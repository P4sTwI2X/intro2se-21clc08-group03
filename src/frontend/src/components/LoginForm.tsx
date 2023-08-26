import { Form, Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <Form method="POST" className="flex flex-col">
      <label>Username</label>
      <input
        type="text"
        name="username"
        placeholder="Your user name"
        className="mt-2 mb-5 bg-[#C5E57A]/50 p-2 rounded-md focus:outline-none focus:ring focus:ring-lime-900"
      ></input>
      <div className="flex justify-between w-full">
        <label>Password</label>
        <Link to="/forgot-password" className="text-[#000000] opacity-[.45] hover:text-lime-900">
          Forgot Password?
        </Link>
      </div>
      <input
        type="password"
        name="password"
        placeholder="Your password"
        className="mt-2 mb-5 bg-[#C5E57A]/50 p-2 rounded-md focus:outline-none focus:ring focus:ring-lime-900"
      ></input>
      <button
        type="submit"
        className="text-white bg-[#7A9D54] rounded-[23px] mt-5 mb-10 flex justify-center space-x-2 font-bold px-5 py-2 w-[143.346px] mx-auto hover:bg-lime-900"
      >
        <p>LOGIN</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
          <path
            d="M3.84034 10.7272H17.3955L14.1635 7.31155C14.0717 7.21449 14.1546 7.06891 14.3046 7.06891H15.756C15.9755 7.06891 16.1838 7.1529 16.3182 7.29662L19.9915 11.1789C20.361 11.5709 20.0273 12.1458 19.4293 12.1458H3.84034C3.74179 12.1458 3.66116 12.0786 3.66116 11.9964V10.8765C3.66116 10.7944 3.74179 10.7272 3.84034 10.7272Z"
            fill="white"
          />
        </svg>
      </button>
    </Form>
  );
}