import React, { useState } from "react";
import logo from "./logo.png";
import { FaLocationArrow, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const footerLinkes = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "about",
    link: "/#about",
  },
  {
    title: "contact",
    link: "/#contact",
  },
  {
    title: "blog",
    link: "/#blog",
  },
];

const Footer = () => {
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    window.location.href = `mailto:lym106680@gmail.com?subject=Message from Website&body=${message}`;
  };

  const sendWhatsApp = () => {
    const phoneNumber = "+201102687520"; 
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="bg-xn">
      <div className="container">
        <div className="grid md:grid-cols-3 sm:px-12 px-4 py-7">
          <div className="py-4 px-4">
            <h1 className="sm:text-3xl text-2xl sm:text-left text-justify mb-3 flex items-center gap-4">
              <img src={logo} alt="" className="max-w-[100px]" />
              Qaree
            </h1>
            <p>
              Qaree Publishing Platform is a digital initiative that aims to
              promote diversity in publishing vessels and enrich literary
              content. The platform provides multiple pathways to reach all
              segments of society, while achieving intellectual property
              protection.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 mt-12">
            <div className="py-8  px-4">
              <h1 className="text-3xl sm:text-left text-justify mb-3">
                Linkes
              </h1>
              <ul className="flex flex-col gap-3">
                {footerLinkes.map((link) => (
                  <li
                    className="cursor-pointer hover:text-wrap 
                    hover:translate-x-1 duration-300 text-gray-200 "
                    key={link.title}
                  >
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h1 className="text-3xl mt-8">Contact Us</h1>
              <div className="flex items-center gap-3 mt-6 ">
                <a href="#">
                  <FiInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FiFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedinIn className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>sohag , egypt</p>
                </div>
                <div className="flex mt-3 items-center gap-3">
                  <FaPhone />
                  <p>+201055488778878</p>
                </div>
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Your Message"
                className="mt-9 text-center text-xl rounded-lg h-10 text-xf"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="flex space-x-16">
                <MdOutlineEmail
                  className="mt-4 text-4xl ml-10"
                  onClick={sendEmail}
                />
                <FaWhatsapp className="mt-4 text-4xl" onClick={sendWhatsApp} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-36 ml-16 mt-4">
          <span className="mb-4">© 2024 Appy. All rights reserved.</span>
          <span>Terms · Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
