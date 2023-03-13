import { useEffect, useState } from "react";

function Login({ setPage }) {
  const [loginForm, setloginForm] = useState({
    email: "",
    password: "",
  });

  async function loginSubmit(e) {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:3000/users");
      let data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  function emailHandler(e) {
    const filledLogin = {
      email: e.target.value,
      password: loginForm.password,
    };
    setloginForm(filledLogin);
  }

  function passwordHandler(e) {
    const filledLogin = {
      email: loginForm.email,
      password: e.target.value,
    };
    setloginForm(filledLogin);
  }

  return (
    <div className="container">
      <form onSubmit={loginSubmit}>
        <label>Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={loginForm.email}
          onChange={emailHandler}
        />
        <label>Password</label>
        <input
          type="text"
          name="password"
          id="password"
          value={loginForm.password}
          onChange={passwordHandler}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
