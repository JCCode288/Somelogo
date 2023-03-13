import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login({ setPage }) {
  const [loginForm, setloginForm] = useState({
    email: "",
    password: "",
  });

  async function loginSubmit(e) {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:3001/users");

      if (response.ok) {
        let data = await response.json();
        let user = data.find((el) => {
          return (
            el.email === loginForm.email && el.password === loginForm.password
          );
        });

        if (user) {
          toast("logged in!", {
            pauseOnFocusLoss: false,
            pauseOnHover: false,
            autoClose: 500,
          });
          localStorage.logged = "true";
          setPage("dashboard");
        } else {
          toast.error("wrong email/password", {
            pauseOnFocusLoss: false,
            pauseOnHover: false,
            autoClose: 500,
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  function inputHandler(e) {
    const filledLogin = { ...loginForm };
    const { value, name } = e.target;
    filledLogin[name] = value;

    setloginForm(filledLogin);
  }

  return (
    <div className="container">
      <ToastContainer />
      <form onSubmit={loginSubmit}>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={loginForm.email}
          onChange={inputHandler}
        />
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={loginForm.password}
          onChange={inputHandler}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
