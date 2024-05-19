import React from "react";

const VideoTitle = ({ title, overview, id }) => {
  // console.log(id);
  return (
    <div className="w-full aspect-video  absolute bg-gradient-to-r from-black text-white ">
      <div className="md:w-10/12 lg:w-6/12  pt-[18%] pl-[4rem] pr-[7rem]">
        <h1 className="md:text-4xl  text-xl font-bold my-5 ">{title}</h1>
        <p className="text-lg mb-3 text-justify hidden md:block">
          {overview}
        </p>
        <div className="flex gap-5">
          <button className="bg-white hover:bg-opacity-80 px-12 py-2 text-lg font-semibold rounded-lg flex items-center justify-center gap-2">
            <img
              alt=""
              className="w-[12px]"
              src="https://toppng.com/uploads/thumbnail/video-play-comments-play-button-vhs-11562922969uh8eeheght.png"
            />
            <span className="text-black">Play</span>
          </button>

          <button className="bg-gray-500 px-10 p-2  bg-opacity-50  text-white text-lg font-semibold rounded-lg  hidden md:block">
            <div className="flex items-center justify-center gap-[15px]">
              <img
                alt=""
                className="w-6"
                src="https://nihalresidency.com/wp-content/plugins/nd-booking/templates/icon-info-grey.svg"
              />
              <span>More Info</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
