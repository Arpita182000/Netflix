import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

function Dropdown() {
    const [isOpen, setIsOpen] = useState({});

    const faqData = [
        {
            title: "What is Netflix?",
            text: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
        },
        {
            title: "How much does Netflix cost?",
            text: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
        },
        {
            title: "Where can I watch?",
            text: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        },
        {
            title: "How do I cancel?",
            text: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        },
        {
            title: "Is Netflix good for kids?",
            text: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
        },
        {
            title: "What can I watch on Netflix?",
            text: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        }
    ];

    const handelClick = (currentIndex) => {
        setIsOpen(prevState => {
            const newState = {};
    
            // Close all other dropdowns
            for (let i = 0; i < faqData.length; i++) {
                if (i !== currentIndex) {
                    newState[i] = false;
                }
            }
    
            // Toggle the clicked dropdown
            newState[currentIndex] = !prevState[currentIndex];
    
            return newState;
        });
    }
    

    return (
        <section className="w-100 bg-black p-5 border-t-[10px] border-[rgb(35,35,35)]">
            <div className="max-w-[1170px] mx-auto mt-[5%]">
                <h1 className="text-white text-center font-black mb-[38px] lg:text-5xl text-[32px]">Frequently Asked Questions</h1>

                {faqData.map((faq, index) => (
                    <div key={index} className="faqitems">
                        <h4 className="sm:text-2xl text-[16px] flex items-center justify-between" onClick={() => handelClick(index)}>
                            {faq.title} {isOpen[index] ? <FontAwesomeIcon icon={faMinus} className="ml-auto" /> : <FontAwesomeIcon icon={faPlus} className="ml-auto" />}
                        </h4>
                        <p style={{ display: isOpen[index] ? 'block' : 'none',transition: 'opacity 0.5s ease' }} >{faq.text}</p>
                    </div>
                ))}

                <div className="mx-auto my-[30px] text-center">
                    <p className="text-white mb-[20px] sm:text-[22px] text-[15px]">Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="max-w-[700px] gap-[10px] justify-center items-center flex flex-col sm:flex sm:flex-row mx-auto sm:my-[0] my-[15px] sm:mb-[15%]">
                        <input className="w-[60%] bg-transparent border-[1px] p-3 rounded-[5px]" placeholder="Email Address" />
                        <button className="bg-[red] p-[10px] text-white text-[14px] w-[30%] font-bold md:text-2xl flex justify-center gap-[5px] items-center">Get Started
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dropdown;
