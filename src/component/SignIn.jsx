import React, { useState } from "react";
import Footer from "../common/Footer";
import logo from "../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { checkValidData } from "../utils/Handel";
import { useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { getAuth, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { validateUser } from "../utils/Validate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrormessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInbtn = () => {
    setIsSignIn(!isSignIn);
  };

  const auth = getAuth();
  const handelbtnClick = () => {
    const message = validateUser(email.current.value, password.current.value);
    setErrormessage(message);

    if (message) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          if (errorCode === "auth/email-already-in-use") {
            toast.error("Email already exists");
          }
        });
    } else {
      //sign in logic
      const auth = getAuth();
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // setErrormessage(
          //   errorMessage == "auth/invalid-credential"
          //     ? "invalid email id "
          //     : "invalid password"
          // );
        });
    }
  };
  return (
    <>
      <section className="w-[100%] backgroun-img bg-cover bg-center ">
      <ToastContainer />
        <div className="w-100 bg-[#0000008f]">
          <div className="max-w-[1170px] mx-auto px-[20px]">
            <div className="grid sm:grid-cols-2 grid-cols-[30%,auto] items-center pt-[10px]">
              <div className="lg:max-w-[180px] max-w-[130px]">
                <img alt="" src={logo} className="w-[100%] h-[100%]" />
              </div>
              <div className="flex justify-end gap-[10px] ">
                <div className="relative">
                  <svg
                    className=" absolute top-[10px] left-[10px]  text-white sm:block default-ltr-cache-0 e1mhci4z1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Globe"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 14.5C8.23033 14.5 8.84266 14.2743 9.48679 12.986C9.76293 12.4337 9.99973 11.7621 10.1748 11H5.8252C6.00027 11.7621 6.23707 12.4337 6.51321 12.986C7.15734 14.2743 7.76967 14.5 8 14.5ZM5.57762 9.5C5.52716 9.02077 5.5 8.51911 5.5 8C5.5 7.48089 5.52716 6.97923 5.57762 6.5H10.4224C10.4728 6.97923 10.5 7.48089 10.5 8C10.5 8.51911 10.4728 9.02077 10.4224 9.5H5.57762ZM11.7092 11C11.4822 12.1217 11.1317 13.117 10.6914 13.9184C12.0137 13.3161 13.0987 12.2837 13.7678 11H11.7092ZM14.3261 9.5H11.9298C11.9759 9.01412 12 8.51269 12 8C12 7.48731 11.9759 6.98588 11.9298 6.5H14.3261C14.4398 6.98152 14.5 7.48373 14.5 8C14.5 8.51627 14.4398 9.01848 14.3261 9.5ZM4.0702 9.5H1.67393C1.56019 9.01848 1.5 8.51627 1.5 8C1.5 7.48373 1.56019 6.98152 1.67393 6.5H4.0702C4.02411 6.98588 4 7.48731 4 8C4 8.51269 4.02411 9.01412 4.0702 9.5ZM2.23221 11H4.29076C4.51779 12.1217 4.86832 13.117 5.30864 13.9184C3.98635 13.3161 2.90128 12.2837 2.23221 11ZM5.8252 5H10.1748C9.99973 4.23793 9.76293 3.56626 9.48679 3.01397C8.84266 1.72571 8.23033 1.5 8 1.5C7.76967 1.5 7.15734 1.72571 6.51321 3.01397C6.23707 3.56626 6.00027 4.23793 5.8252 5ZM11.7092 5H13.7678C13.0987 3.71627 12.0137 2.68389 10.6914 2.08162C11.1317 2.88302 11.4822 3.8783 11.7092 5ZM5.30864 2.08162C4.86832 2.88302 4.51779 3.8783 4.29076 5H2.23221C2.90128 3.71628 3.98635 2.68389 5.30864 2.08162ZM8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <select className="w-[140px] text-center text-white bg-black border-[1px] rounded-[5px] py-[4px] ">
                    <option>English</option>
                    {/* <option>English</option> */}
                    <option>Hindi</option>
                  </select>
                </div>
                <button className="bg-[#d9232e]  text-white font-bold rounded-[5px] p-2 px-6">
                  Sign In
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-[570px] mx-auto  md:pt-[80px]  py-[20px] lg:px-[100px]  px-[10px]  ">
            <div className=" text-white  bg-slate-900 px-5 py-5 opacity-90">
              <h1 className="text-xl font-bold pt-5 pb-5">
                {isSignIn ? "Sign In" : "Sign Up"}
              </h1>
              <form className="text-center" onClick={(e) => e.preventDefault()}>
                {!isSignIn && (
                  <input
                    ref={name}
                    className="w-full my-2 p-2 bg-slate-800 rounded "
                    type="text"
                    placeholder="Full Name"
                  />
                )}

                <input
                  ref={email}
                  className="w-full my-2 p-2 rounded bg-slate-800 "
                  type="text"
                  placeholder="Email Address"
                />
                {/* <p className="text-[red] font-bold">{errorMessage}</p> */}
                <input
                  ref={password}
                  className="w-full my-2 p-2 rounded bg-slate-800 "
                  type="password"
                  placeholder="Enter Password"
                />
                <p className="text-[#d9232e] font-bold">{errorMessage}</p>
                <button
                  className="w-full my-2 p-2 text-white bg-red-700 rounded transition-transform duration-200 ease-in-out hover:bg-red-800 active:bg-red-900 active:transform active:translate-y-1"
                  onClick={handelbtnClick}
                >
                  {isSignIn ? "Sign In" : "Sign Up"}
                </button>
              </form>
              {isSignIn ? (
                <p
                  className="text-xs py-3 cursor-pointer"
                  onClick={toggleSignInbtn}
                >
                  not a user ? <Link>sign up now</Link>
                </p>
              ) : (
                <p
                  className="text-xs py-3 cursor-pointer"
                  onClick={toggleSignInbtn}
                >
                  already a user ? <Link>sign in now</Link>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignIn;
