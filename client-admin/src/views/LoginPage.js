import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../stores/actions/userAction";
import { useState } from "react";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    dispatch(loginUser(data));

    setTimeout(() => {
      navigate("/companies");
    }, 300);
  }

  function inputHandler(e) {
    const inputId = e.target.attributes.id.nodeValue;
    const value = e.target.value;

    if (inputId === "email") {
      setEmail(value);
    } else if (inputId === "password") {
      setPassword(value);
    }
  }

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 h-screen flex flex-col justify-center items-center">
      <div className="block p-6 rounded-lg border content-center bg-white bg-opacity-75 w-1/3 ">
        <form onSubmit={submitHandler}>
          <div className="form-group mb-3 text-center">
            <h1>Sign in</h1>
          </div>

          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Email address
            </label>
            <input
              type="text"
              className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-stone-100 focus:border-blue-600 focus:outline-none
            hover:bg-stone-100"
              id="email"
              aria-describedby="email"
              placeholder="Enter email"
              value={email}
              onChange={inputHandler}
            ></input>
          </div>

          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-stone-100 focus:border-blue-600 focus:outline-none hover:bg-stone-100"
              id="password"
              placeholder="Password"
              value={password}
              onChange={inputHandler}
            ></input>
          </div>

          {/* <div className="text-center mb-4">
            <p>
              Don't have an account?{" "}
              <Link
                to={"/register"}
                className="
          font-medium
          leading-tight
          text-sky-600
          hover:text-sky-900
          transition
          duration-150
          ease-in-out
          w-1/2"
              >
                Sign Up
              </Link>
            </p>
          </div> */}

          <div className="text-center">
            <button
              type="submit"
              className="
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out
          w-1/2"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
