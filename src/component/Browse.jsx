import React from "react";
import logo from "../img/logo.png";
import useNowPlaying from "../utils/useNowPlaying";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../utils/usePopularMovie";
import useTopratedMovie from "../utils/useTopratedMovie";
import GptContainer from "./GptContainer";
import { useDispatch, useSelector } from "react-redux";
import { addToggleMenu } from "../utils/gtpSlice";
import { Language_Data } from "../utils/Constance";
import { addLangSlice } from "../utils/gptlangSlice";
import Footer from "../common/Footer"
function Browse() {
  const gptStore = useSelector((store) => store.gpt.toggleState);
  // console.log(gptStore);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGPTsearch = () => {
    dispatch(addToggleMenu());
  };
  const changeLang = (e) => {
    dispatch(addLangSlice(e.target.value));
  };

  useNowPlaying();
  usePopularMovie();
  useTopratedMovie();

  return (
    <>
      <section className="w-full">
        <div className=" w-11/12 flex justify-between items-center absolute z-50 mx-[3%]">
          <div className="lg:max-w-[180px] max-w-[130px]">
            <img alt="" src={logo} className="w-full h-full" />
          </div>
          <div className="flex justify-end gap-6">
            {gptStore && (
              <select
                className="w-[140px] text-center text-white bg-black border-[1px] rounded-[5px] py-[3px] lg:px-6 px-3 p-2 lg:text-lg sm:text-xs "
                onChange={changeLang}
              >
                {Language_Data.map((v, i) => (
                  <option key={i} value={v.identifier}>
                    {v.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="bg-purple-800 lg:px-6 px-3 p-2 lg:text-lg sm:text-xs font-semibold rounded-lg text-white shadow-lg "
              onClick={handleGPTsearch}
            >
              {gptStore ? "Home" : "Gpt Search"}
            </button>
            <button
              className="bg-white  text-lg font-semibold rounded-lg shadow-lg lg:px-6 px-3 p-2 lg:text-lg sm:text-xs"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>

        {gptStore ? (
          <GptContainer />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
            <Footer />
          </>
        )}
      </section>
    
    </>
  );
}

export default Browse;
