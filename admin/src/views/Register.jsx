import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { postUser } from "../store/actions/actionCreator";

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
  const dispatch = useDispatch();

  function inputHandler(e) {
    const inputForm = {
      ...registerForm,
    };

    const { name, value } = e.target;

    inputForm[name] = value;

    setRegisterForm(inputForm);
  }

  async function registerSubmit() {
    try {
      const loading = toast.loading("Registering...");
      await dispatch(postUser(registerForm));

      localStorage.access_token = "true";
      toast.update(loading, {
        render: "Registered!",
        type: "success",
        isLoading: false,
      });
      navigate("/");
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
        </form>
      </div>
    </div>
  );
}

export default Register;
