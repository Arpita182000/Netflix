import React from 'react'
import Dropdown from './Dropdown'
import tv from '../img/tv.png'
import mobile from '../img/mobile-0819.jpg'
import boxshot from '../img/boxshot.png'
import device from '../img/device-pile-in.png'
import aaaa from '../img/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png'
import videotv from '../img/video-tv-in-0819.m4v'
import video from '../img/video-devices-in.m4v'
import Header from '../common/Header'
import Footer from '../common/Footer'
function Body() {
    return (
        <>
        <Header/>
                <section className="w-[100%] bg-[black] border-t-[10px] border-[rgb(35,35,35)]">
        <div className="max-w-[1170px] mx-auto ">
            <div className="grid lg:grid-cols-2 grid-cols-1 ">
                <div className="lg:py-[200px] sm:py-[60px] lg:text-left text-center p-[20px]">
                    <h2 className="text-white lg:text-[48px] text-[32px] font-bold mt-[5px]">Enjoy on your TV
                    </h2>
                    <p className="text-white py-[20px] lg:text-[24px] text-[18px]">Watch on smart TVs, PlayStation, Xbox, Chromecast,<br />
                        Apple TV, Blu-ray players and more.
                    </p>
                </div>
                <div className="relative sm:mt-[50px] sm:mb-[30%] lg:mb-[0%] mb-[20%]">
                    <img alt='image' src={tv} className="z-[999999] mx-auto overflow-hidden relative mt-5"/>
                    <video autoplay controls height="50"
                        className=" mx-auto img-div lg:absolute lg:top-[40%] object-cover">
                        <source src={videotv} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    </section>
       <section className="w-[100%] bg-[black] border-t-[10px] border-[rgb(35,35,35)]">
        <div className="max-w-[1170px] mx-auto">
            <div className="grid lg:grid-cols-2 grid-cols-1">
                <div className="relative sm:order-1 order-2">
                    <img alt='image1' src={mobile} className="relative z-[99999] " />
                    <div className="flex justify-between items-center !border-[0.1px]  rounded-lg mx-[17%] p-3 mb-[10%] ">
                        <div className="w-[50px] h-[70px] "><img src={boxshot} className="img-scr"/></div>
                        <h5 className="text-white text-left">Stranger Things
                            <br/>
                           <span className="text-[blue]"> Downloading...</span>
                        </h5>
                        <div>
                            <i className="fa-solid fa-arrow-down text-white"></i>
                        </div>
                    </div>
                </div>
                <div className="sm:py-[200px] py-[50px] lg:text-left text-center sm:order-2 order-1">
                    <h2 className="text-white sm:text-[55px] text-[30px] font-bold">Download your shows to watch offline
                    </h2>
                    <p className="text-white py-[20px] text-[20px]">Save your favourites easily and always have
                        something<br /> to watch.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section className="w-[100%] bg-[black] border-t-[10px] border-[rgb(35,35,35)]">
        <div className="max-w-[1170px] mx-auto ">
            <div className="grid lg:grid-cols-2 grid-cols-1 ">
                <div className="md:py-[200px] lg:text-left text-center p-[20px] mt-[50px]">
                    <h2 className="text-white lg:text-[48px] text-[32px] font-bold ">Enjoy on your TV
                    </h2>
                    <p className="text-white py-[20px] lg:text-[24px] text-[18px]">Watch on smart TVs, PlayStation, Xbox, Chromecast,<br />
                        Apple TV, Blu-ray players and more.
                    </p>
                </div>
                <div className="relative sm:mt-[50px] sm:mb-[30%] lg:mb-[0%] mb-[20%] ">
                    <img alt='image2' src={device} className="z-[999999] mx-auto overflow-hidden relative"/>
                    <video autoPlay controls height="50"
                        className=" mx-auto img-div2 lg:absolute lg:top-[25%] ">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    </section>
    <section className="w-[100%] bg-[black] border-t-[10px] border-[rgb(35,35,35)]">
        <div className="max-w-[1170px] mx-auto p-[20px]">
            <div className="grid sm:grid-cols-2 grid-cols-1">
                <div className="relative sm:mt-[10%] sm:order-1 order-2">
                    <img alt='image3' src={aaaa}
                        className="relative z-[99999]" />
                </div>
                <div className="sm:py-[200px] py-[50px] sm:order-2 order-1 lg:text-left text-center">
                    <h2 className="text-white sm:text-[53px] text-[30px] font-bold">Create profiles for kids
                    </h2>
                    <p className="text-white py-[20px] lg:text-[20px] text-[16px]">Send children on adventures with their favourite <br />
                        characters in a space made just for them—free with <br /> your membership. to watch.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <Dropdown/>
    <Footer/>
        </>
    )
}

export default Body
