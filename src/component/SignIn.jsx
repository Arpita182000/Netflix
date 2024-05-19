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
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorMessage);
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
          // console.log(user);
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
                  className="text-xs py-3 cursor-pointer text-[#48a8df] underline"
                  onClick={toggleSignInbtn}
                >
                  not a user ? <Link >sign up now</Link>
                </p>
              ) : (
                <p
                  className="text-xs py-3 cursor-pointer text-[#48a8df] underline"
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
