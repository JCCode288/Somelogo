import { useState } from "react";

export default function LoginModal() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  function inputHandler(e) {
    const { name, value } = e.target;
    let inputForm = {
      ...loginForm,
    };

    inputForm[name] = value;

    setLoginForm(inputForm);
  }

  function submitLogin(e) {
    e.preventDefault();
    console.log("sumbitted", loginForm);
  }

  return (
    <>
      <div class="fixed pin flex items-center">
        <div class="fixed pin bg-black opacity-75 z-10"></div>

        <div class="relative mx-6 md:mx-auto w-full md:w-1/2 lg:w-1/3 z-20 m-8">
          <div class="shadow-lg bg-white rounded-lg p-8">
            <div class="flex justify-end mb-6">
              <button>
                <span class="mr-2">Close</span>
                <span>
                  <i class="fa fa-times"></i>
                </span>
              </button>
            </div>

            <h1 class="text-center text-2xl text-green-dark">Login</h1>

            <form class="pt-6 pb-2 my-2" onSubmit={submitLogin}>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2" for="email">
                  Email Address
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  onChange={inputHandler}
                />
              </div>
              <div class="mb-6">
                <label class="block text-sm font-bold mb-2" for="password">
                  Password
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
                  id="password"
                  name="password"
                  type="password"
                  onChange={inputHandler}
                  placeholder="Password"
                />
              </div>
              <div class="block md:flex items-center justify-between">
                <div>
                  <button
                    class="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded border-b-4 border-green-darkest"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
