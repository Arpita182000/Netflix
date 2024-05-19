import React from "react";
import GptSearchBar from "./GptSearchBar";
import SuggestionGpt from "./SuggestionGpt";
const GptContainer = () => {
  return (
    <div>
      <section className="w-[100%]  backgroun-img bg-cover bg-center min-h-[100vh] ">
        <div className="bg-[#0000008f]  min-h-[100vh] pb-[10%] ">
          <div className="max-w-[1170px] mx-auto text-center md:pt-[80px]  py-[20px] lg:px-[100px]  px-[10px] ">
            
            <GptSearchBar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GptContainer;
