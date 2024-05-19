import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email,password } = user;
        dispatch(addUser({ uid: uid, email: email ,password:password}));
        // ...
      } else {
        dispatch(removeUser());
        // User is signed out
        // ...
      }
    });
  }, []);
  // useEffect(() => {
  //     const auth = getAuth();
  //   const unSubscribe = onAuthStateChanged(auth, (user) => {
  //     console.log(user)
  //       if (user) {
  //         const{ uid,email,displayName }= user;
  //         dispatch(addUser({uid:uid,email:email,displayName:displayName}))

  //       } else {
  //         dispatch(removeUser())

  //       }
  //     });

  //     return()=>unSubscribe();

  //   }, []);
  return (
    <section className="w-[100%] backgroun-img bg-cover bg-center ">
      <div className="w-100 bg-[#0000008f]">
        <div className="max-w-[1170px] mx-auto px-[20px]">
          <div className="grid sm:grid-cols-2 grid-cols-[30%,auto] items-center pt-[10px]">
            <div className="lg:max-w-[180px] max-w-[130px]">
              <img alt="" src={logo} className="w-[100%] h-[100%]" />
            </div>
            <div className="flex justify-end gap-[10px] ">
              <div className="relative">
                {/* <svg className=" absolute top-[10px] left-[10px]  text-white sm:block default-ltr-cache-0 e1mhci4z1" width="16" height="16"
                            viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                             data-name="Globe" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8 14.5C8.23033 14.5 8.84266 14.2743 9.48679 12.986C9.76293 12.4337 9.99973 11.7621 10.1748 11H5.8252C6.00027 11.7621 6.23707 12.4337 6.51321 12.986C7.15734 14.2743 7.76967 14.5 8 14.5ZM5.57762 9.5C5.52716 9.02077 5.5 8.51911 5.5 8C5.5 7.48089 5.52716 6.97923 5.57762 6.5H10.4224C10.4728 6.97923 10.5 7.48089 10.5 8C10.5 8.51911 10.4728 9.02077 10.4224 9.5H5.57762ZM11.7092 11C11.4822 12.1217 11.1317 13.117 10.6914 13.9184C12.0137 13.3161 13.0987 12.2837 13.7678 11H11.7092ZM14.3261 9.5H11.9298C11.9759 9.01412 12 8.51269 12 8C12 7.48731 11.9759 6.98588 11.9298 6.5H14.3261C14.4398 6.98152 14.5 7.48373 14.5 8C14.5 8.51627 14.4398 9.01848 14.3261 9.5ZM4.0702 9.5H1.67393C1.56019 9.01848 1.5 8.51627 1.5 8C1.5 7.48373 1.56019 6.98152 1.67393 6.5H4.0702C4.02411 6.98588 4 7.48731 4 8C4 8.51269 4.02411 9.01412 4.0702 9.5ZM2.23221 11H4.29076C4.51779 12.1217 4.86832 13.117 5.30864 13.9184C3.98635 13.3161 2.90128 12.2837 2.23221 11ZM5.8252 5H10.1748C9.99973 4.23793 9.76293 3.56626 9.48679 3.01397C8.84266 1.72571 8.23033 1.5 8 1.5C7.76967 1.5 7.15734 1.72571 6.51321 3.01397C6.23707 3.56626 6.00027 4.23793 5.8252 5ZM11.7092 5H13.7678C13.0987 3.71627 12.0137 2.68389 10.6914 2.08162C11.1317 2.88302 11.4822 3.8783 11.7092 5ZM5.30864 2.08162C4.86832 2.88302 4.51779 3.8783 4.29076 5H2.23221C2.90128 3.71628 3.98635 2.68389 5.30864 2.08162ZM8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0Z"
                                fill="currentColor"></path>
                        </svg> */}
              </div>
              <button className="bg-[#d9232e]  text-white font-bold rounded-[5px] p-2 px-6">
                <Link to={"/signin"}>SignIn</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-[1170px] mx-auto text-center md:pt-[80px]  py-[20px] lg:px-[100px]  px-[10px] ">
          <h1 className="text-white lg:text-[50px] text-[32px] font-bold mt-[12%] lg:mt[0]  ">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-center text-white lg:text-[24px] text-[18px] py-[15px]  ">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-center text-white lg:text-[20px] text-[18px] py-[15px]  ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="max-w-[700px] gap-[10px] justify-center items-center flex flex-col sm:flex sm:flex-row mx-auto sm:my-[0] my-[15px] sm:mb-[14.8%]  ">
            <input
              className="w-[60%]  bg-transparent border-[1px] sm:p-3 p-[8px] rounded-[5px]"
              placeholder="Email Address"
            />
            <button className="bg-[#d9232e] sm:p-[10px] py-[8px] text-white text-[12px] w-[30%] font-bold sm:text-2xl flex justify-center gap-[5px] items-center">
              Get Started
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
