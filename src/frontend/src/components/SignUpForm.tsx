import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["token", "fullname"]);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    username: "",
    password: "",
    fullname: "",
    //address: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (cookies?.token != null) navigate("/");
  }, [cookies]);

  function onChange(e: any) {
    var target = e.target;
    setInput({
      ...input,
      [target.name]: target.value,
    });
  }

  async function handleRegister() {
    setMessage("");
    if (
      input.fullname == "" ||
      input.username == "" ||
      input.password == "" ||
      input.confirmPassword == ""
    ) {
      setMessage("Please fill out all information before submitting registration");
      return;
    }

    if (input.password != input.confirmPassword) {
      setMessage("Confirm password does not match password, please type again");
      return;
    }

    const res = await fetch("http://localhost:3000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });

    const data = await res.json();
    if (data.token != null) {
      setCookie("token", data.token);
      setCookie("fullname", data?.data?.fullname);
      setMessage("");
      navigate("/");
      return;
    }
    if (data.message != null) {
      setMessage(data.message);
    }
  }

  return (
    <div className="flex flex-col">
      <label>Fullname</label>
      <input
        type="text"
        name="fullname"
        placeholder="Your user name"
        onChange={onChange}
        required
        className="mt-2 mb-5 bg-[#C5E57A]/50 p-2 rounded-md focus:outline-none focus:ring focus:ring-lime-900"
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        placeholder="Your user name"
        onChange={onChange}
        required
        className="mt-2 mb-5 bg-[#C5E57A]/50 p-2 rounded-md focus:outline-none focus:ring focus:ring-lime-900"
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Your password"
        onChange={onChange}
        required
        className="mt-2 mb-5 bg-[#C5E57A]/50 p-2 rounded-md focus:outline-none focus:ring focus:ring-lime-900"
      />
      <label>Confirm password</label>
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm your password"
        onChange={onChange}
        required
        className="mt-2 mb-5 bg-[#C5E57A]/50 p-2 rounded-md focus:outline-none focus:ring focus:ring-lime-900"
      />
      {message != "" ? (
        <div className="flex items-center justify-center text-center text-red-600 py-4">{message}</div>
      ) : (
        <></>
      )}

      <button
        type="submit"
        onClick={handleRegister}
        className="text-white bg-[#7A9D54] rounded-[23px] mt-5 mb-10 flex justify-center space-x-2 font-bold px-5 py-2 w-[143.346px] mx-auto hover:bg-lime-900"
      >
        <p>SIGN UP</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
          <path
            d="M3.84034 10.7272H17.3955L14.1635 7.31155C14.0717 7.21449 14.1546 7.06891 14.3046 7.06891H15.756C15.9755 7.06891 16.1838 7.1529 16.3182 7.29662L19.9915 11.1789C20.361 11.5709 20.0273 12.1458 19.4293 12.1458H3.84034C3.74179 12.1458 3.66116 12.0786 3.66116 11.9964V10.8765C3.66116 10.7944 3.74179 10.7272 3.84034 10.7272Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
