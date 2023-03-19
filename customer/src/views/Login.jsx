import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/actionCreator";
import Swal from "sweetalert2";

export default function Login() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setOpen(true);

    return () => {
      setOpen(false);
    };
  }, []);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    const newInput = {
      ...input,
      [name]: value,
    };

    setInput(newInput);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      await dispatch(login(input));

      Swal.fire("Logged In!", "", "success");
      setOpen(false);
      navigate(-1);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Something is wrong",
        html: err,
      });
    }
  };

  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => {
          setOpen(false);
          navigate(-1);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden justify-center rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[40vw] sm:max-h-[50vh]">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:justify-center">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="font-semibold leading-6 text-gray-900 text-2xl"
                      >
                        Login
                      </Dialog.Title>
                      <div className="mt-2">
                        <form
                          onSubmit={handleLogin}
                          className="flex flex-col gap-4"
                        >
                          <div className="container flex flex-row gap-2 rounded ring-2 my-4 ring-black">
                            <label className="border-r-2 p-2">Email</label>
                            <input
                              onChange={inputHandler}
                              className="outline-none w-full"
                              type="text"
                              name="email"
                              placeholder="put your email here"
                            />
                          </div>
                          <div className="container flex flex-row gap-2 rounded ring-2 ring-black">
                            <label className="border-r-2 p-2">Password</label>
                            <input
                              onChange={inputHandler}
                              className="outline-none w-full"
                              type="password"
                              name="password"
                              placeholder="put your password here"
                            />
                          </div>

                          <div className="container gap-4 flex">
                            <button
                              type="button"
                              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                              onClick={() => navigate(-1)}
                              ref={cancelButtonRef}
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            >
                              Login
                            </button>
                          </div>
                          <Link to="/register">
                            doens't have any account? register here
                          </Link>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
