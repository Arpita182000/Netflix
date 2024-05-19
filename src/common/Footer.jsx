import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
<>
<footer className="lg:w-100 bg-black p-5  border-t-[10px] border-[rgb(35,35,35)] pt-[5%]">
        <div className="max-w-[1170px]  mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                <div className=" p-5 ">
                    <ul className="text-white ">
                        <li>Questions? Call 000-800-919-1694</li>
                       <li>FAQ</li>
                       <li>Media Centre</li>
                       <li>Ways to Watch</li>
                       <li>Cookie Preferences</li>
                       <li>Speed Test</li>
                       <li>  <select
                        className="max-w-[250px] text-center text-white bg-black border-[1px] rounded-[5px] py-[4px]">
                        <option>English</option>
                        <option>Hindi</option>
                    </select></li>
                       <li>Netflix India</li>
                    </ul>
    
                </div>
                <div className=" p-5 ">
                    <ul className="text-white ">
                       <li><Link to={'/signin'}>FAQ</Link></li>
                       <li>Media Centre</li>
                       <li>Ways to Watch</li>
                       <li>Cookie Preferences</li>
                       <li>Speed Test</li>
                       <li>Netflix India</li>
                    </ul>
                </div>
                <div className=" p-5 ">
                    <ul className="text-white ">
                       <li>FAQ</li>
                       <li>Media Centre</li>
                       <li>Ways to Watch</li>
                       <li>Cookie Preferences</li>
                       <li>Speed Test</li>
                      
                       <li>Netflix India</li>
                    </ul>
                </div>
            </div>
    </footer> 
</>
    )
}

export default Footer;
