import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "Admin",
    phoneNumber: "",
    address: "",
  });

  const navigate = useNavigate();

  function inputHandler(e) {
    const inputForm = {
      ...registerForm,
    };

    const { name, value } = e.target;

    inputForm[name] = value;

    setRegisterForm(inputForm);
  }

  async function registerSubmit(e) {
    try {
      e.preventDefault();

      console.log(registerForm);

      let response = await fetch("http://localhost:3001/users", {
        method: "post",
        body: JSON.stringify(registerForm),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("wrong input");
      }

      let logged = await response.json();

      localStorage.access_token = "true";
      toast.success("successfully registering!", { autoClose: 500 });

      navigate("/");

      toast.success("logged in!", { autoClose: 500 });
    } catch (err) {
      toast.error(err.message, {
        autoClose: 700,
      });
    }
  }
  return (
    <div className="container">
      <div className="container m-8 flex justify-center ">
        <form
          onSubmit={registerSubmit}
          className="p-8 border-2 shadow-sm border-black w-1/3"
        >
          <h1 className="text-3xl my-4">Register</h1>
          <label className="">Username</label>
          <div className="container my-2 flex w-full">
            <input
              className=" border-[1px] flex w-full p-2 border-red-500 border-opacity-50 hover:border-opacity-100 focus:border-opacity-100 focus:border-red-500"
              type="text"
              name="username"
              value={registerForm.username}
              onChange={inputHandler}
            />
          </div>
          <label className="">Email</label>
          <div className="container my-2 flex w-full">
            <input
              className=" border-[1px] flex w-full p-2 border-red-500 border-opacity-50 hover:border-opacity-100 focus:border-opacity-100 focus:border-red-500"
              type="text"
              name="email"
              value={registerForm.email}
              onChange={inputHandler}
            />
          </div>
          <label className="">Password</label>
          <div className="container my-2 flex w-full ">
            <input
              className=" border-[1px] flex w-full p-2 border-red-500 border-opacity-50 hover:border-opacity-100 focus:border-opacity-100 focus:border-red-500"
              type="password"
              name="password"
              value={registerForm.password}
              onChange={inputHandler}
            />
          </div>
          <label className="">Phone Number</label>
          <div className="container my-2 flex w-full ">
            <input
              className=" border-[1px] flex w-full p-2 border-red-500 border-opacity-50 hover:border-opacity-100 focus:border-opacity-100 focus:border-red-500"
              type="text"
              name="phoneNumber"
              value={registerForm.phoneNumber}
              onChange={inputHandler}
            />
          </div>
          <label className="">Address</label>
          <div className="container my-2 flex w-full ">
            <input
              className=" border-[1px] flex w-full p-2 border-red-500 border-opacity-50 hover:border-opacity-100 focus:border-opacity-100 focus:border-red-500"
              type="text"
              name="address"
              value={registerForm.address}
              onChange={inputHandler}
            />
          </div>
          <button
            type="submit"
            className="my-4 py-2 px-4 rounded border-2 hover:bg-red-600 ease-linear duration-100 hover:text-white"
          >
            Register
          </button>
          <Link to="/auth" className="font-semibold">
            <p>already have an account? login here!</p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
