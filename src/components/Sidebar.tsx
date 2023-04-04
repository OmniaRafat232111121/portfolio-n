import Image from 'next/image'
import React from 'react';
import {GoLocation} from 'react-icons/go';
import {ImWhatsapp} from 'react-icons/im'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram,AiOutlineDownload} from "react-icons/ai";
const Sidebar = () => {
  return (
    <div>
     <Image 
     src="/img.jpeg"
      alt="avatar"
      width={128}
      height={128}
      className=" mx-auto  border rounded-full "
       />
       <h3 className="my-4 text-3xl font-medium tracking-wider font-Kaushan">
        <span className="text-green ">Omnia</span> Rafat
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p>
      {/* Resume */}
      <a
        href="/omniarafatfrontenddeveloper.pdf"
        download="omniarafatfrontenddeveloper.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <AiOutlineDownload className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <a href="https://github.com/OmniaRafat232111121">
            <AiFillGithub className="w-8 h-8 cursor-pointer"/>
        </a>
        <a href="https://www.linkedin.com/in/omnia-rafat-0125191b8/" >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/omniarafat33/">
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />{" "}
        </a>
        
         
          <a href="https://wa.me/201111794465?text=Code%20Egypt">
             <ImWhatsapp className="w-8 h-8 cursor-pointer" />{" "}
            </a>

          
        
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Egypt,Cairo</span>
        </div>
        <p className="my-2 "> omniarafat2321@gmail.com</p>
        <p className="my-2"> 01111794465</p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:omniarafat2321@gmail.com")}
      >
        Email me
      </button>
      <button
        
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    
    </div>
  )
}

export default Sidebar
