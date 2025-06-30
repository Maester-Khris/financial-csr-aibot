// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import DjangoBackgr from '../assets/django_background.jpg'
import ReactBackgr from '../assets/react_back.png'
import DjangoReactBackgr from '../assets/react_django.png'
import BotImg from '../assets/bot.png'
import CustomerImg from '../assets/customer.png'


//import UserImg from '../assets/user-removebg-preview.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PaperPlaneRight } from "@phosphor-icons/react";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx"

interface Message {
    content: string;
    createdAt: string;
    user: string;
}

function Home() {
    const useruuid = useRef(crypto.randomUUID());
    const systemuuid = useRef(`bot-${crypto.randomUUID()}`);
    const botanswers = [
        "I'm still learning and can't answer that just yet.",
        "Apologies — I'm not equipped to assist with that at the moment.",
        "That’s beyond my current capabilities, but I’m improving every day.",
        "I’m here to help, but I don't have the right answer for this right now.",
        "Thanks for your question — I’m still learning how to respond to it properly."
    ];
    const [messages, setMessages] = useState<Message[]>([]);
    const [messagedraft, setMessageDraft] = useState("");
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const prevLenRef = useRef(0) //used to detect if a new message has been added
    useEffect(() => {
        audioRef.current = new Audio("/sounds/notify.wav");
        audioRef.current.load();
    }, []);



     /**======= feature new message ==============
     * 1- new message 
     * 2- enterkeyhandler
     * 3- messages changes: audio sound
     * 4- static bot response
     */
    // 
    const addMessage = (message: string, user_msg: string) => {
        console.log(user_msg);
        if (!message.trim()) return;
        setMessages(prev => [
            ...prev, { content: message, createdAt: new Date().toISOString(), user: user_msg }
        ]);
        setMessageDraft("");
        if (user_msg == useruuid.current) {
            botresponder();
        }
    }
    // ---
    const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter" && !e.shiftKey) {
            e.preventDefault();
            addMessage(messagedraft, useruuid.current);
        }
    }
    // ---
    useEffect(() => {
        const added = messages.length - prevLenRef.current;
        if (added > 0) {
            const sound = audioRef.current;
            if (sound) {
                sound.currentTime = 0;
                sound.play().catch(() => {
                    console.log("something went wrong when playing audio")
                })
            }
        }
        prevLenRef.current = messages.length;
    }, [messages]);
    // ---
    const botresponder = () => {
        const index = Math.floor(Math.random() * botanswers.length)
        const selectedanswer = botanswers[index];
        const id = setTimeout(() => {
            addMessage(selectedanswer, systemuuid.current);
        }, 2000);
        return () => clearTimeout(id);
    };


    /** ======================== utils =================================
     * 1- ISO to locale String date parsing
     * 2- conversation starter
    */
    const dateFormatter = (datestring: string) => {
        return new Date(datestring).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    };
    // ---
    useEffect(() => {
        const id = setTimeout(() => {
            addMessage("Hello Dear Customer, how may I serve you", systemuuid.current);
        }, 3000);
        return () => clearTimeout(id);
    }, []);
    // ---
   




    return (
        <div className="w-full h-full max-h-[820px] rounded-[10px] flex flex-col justify-center items-center">
            <div className="h-full w-[400px] flex flex-col justify-end items-center" style={{}}>
                <img
                    src={BotImg}
                    className="h-[210px] w-[210px] mt-2 animate-floating filter drop-shadow-[0_10px_8px_rgba(0,0,0,0.4)]"
                    alt=""
                />

                {/*message list component */}
                <div className="messages flex h-[480px] overflow-x-hidden overflow-y-scroll no-scrollbar flex-col justify-end w-full flex- px-2 py-2 mb-2 ">
                    {messages.map((m, i) => {
                        const isCustomer = m.user === useruuid.current;
                        const wrapperClass = clsx("mb-2 w-full flex items-start", isCustomer && "flex-row-reverse");
                        const bubbleClass = clsx("w-full p-4 rounded-md text-base", isCustomer ? "bg-blue-200" : "bg-gray-300");
                        const avatarSrc = isCustomer ? CustomerImg : BotImg;
                        const avatarAlt = isCustomer ? "Customer avatar" : "FinBot avatar";
                        return (
                            <div key={i} className={wrapperClass}>
                                <div className="h-14 w-14 border-2 p-0.5 ml-1 bg-gray-400 border-[#dedede] rounded-md">
                                    <img
                                        src={avatarSrc} alt={avatarAlt}
                                        className="h-full w-full"
                                    />
                                </div>
                                <div className="flex-1 ml-1">
                                    <div className={bubbleClass}>
                                        {m.content}
                                    </div>
                                    <small className="w-full text-gray-400 px-1 transform -translate-y-1 inline-block text-left">
                                        {dateFormatter(m.createdAt)}
                                    </small>
                                </div>
                            </div>
                        )
                    })}
                </div>


                {/* new message component */}
                <div className="flex flex-row w-full justify-start items-start py-2 " style={{}}>
                    <div className="ml-2 flex-1 flex-col " style={{}}>
                        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-500">
                            <input
                                value={messagedraft}
                                onChange={e => setMessageDraft(e.target.value)}
                                onKeyDown={handleEnterKeyDown}
                                placeholder="Hey, passe moi réré"
                                type="text" name="price" id="price"
                                style={{ lineHeight: '20px', fontSize: '17px' }}
                                className="px-2 py-3 block min-w-0 grow text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                            <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                <button
                                    className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-2 mx-1 my-1 rounded"
                                    onClick={() => addMessage(messagedraft, useruuid.current)}
                                >
                                    <PaperPlaneRight size={32} weight="bold" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home


// caroussel code
// var carouselSsettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrow: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
// };
{/* <Slider className="h-[95%]" {...carouselSsettings}>
    {[ReactBackgr, DjangoBackgr, DjangoReactBackgr].map((imgPath, index) => (
        <div key={index} className="h-full flex items-center justify-center">
            <img src={imgPath} className="w-full h-full scale-80 transform" />
        </div>
    ))}
</Slider> */}
//typing indicator
{/* <div className="mb-2 w-full flex items-start">
<div className="flex-1 ml-1">
    <div className="w-full p-4 rounded-md text-base bg-gray-300">
        //loader for incoming message
    </div>
</div>
</div> */}