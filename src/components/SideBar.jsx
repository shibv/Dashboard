import React from 'react'
import logo from "../assets/logo.svg";
import home from "../assets/Icon_hh.svg";
import file from "../assets/Icon_f.svg";
import avatar from "../assets/avatar-5.svg";

import time from "../assets/time.svg";
import message from "../assets/msg.svg";
import setting from "../assets/setting.svg";
import ext from "../assets/exit.svg";

function SideBar() {
  return (
    <div className="hidden sm:flex flex-col w-[10%]  items-center gap-8  ">
        {/* main Logo */}
        <div className="flex flex-col cursor-pointer justify-center mt-16 items-center  ">
          <img src={logo} className="w-6 h-6" alt="" />
        </div>
        {/* sub pages */}
        <div className=" flex flex-col gap-8 justify-center items-center mt-16 ">
          <div className=" h-10 w-10 flex justify-center items-center cursor-pointer rounded-2xl  hover:bg-[#2C3A58] transition duration-300 ease-in-out">
            <img src={home} className="w-6 h-6  " alt="" />
          </div>
          <div className=" h-10 w-10  flex justify-center items-center cursor-pointer rounded-2xl  hover:bg-[#2C3A58] transition duration-300 ease-in-out">
            <img src={file} className="w-6 h-6  " alt="" />
          </div>
          <div className=" h-10 w-10  flex justify-center items-center cursor-pointer rounded-2xl  hover:bg-[#2C3A58] transition duration-300 ease-in-out">
            <img src={time} className="w-6 h-6  " alt="" />
          </div>
          <div className="h-10 w-10  flex justify-center items-center cursor-pointer rounded-2xl  hover:bg-[#2C3A58] transition duration-300 ease-in-out">
            <img src={message} className="w-6 h-6  " alt="" />
          </div>
          <div className=" h-10 w-10  flex justify-center items-center cursor-pointer rounded-2xl  hover:bg-[#2C3A58] transition duration-300 ease-in-out">
            <img src={setting} className="w-6 h-6  " alt="" />
          </div>
        </div>
        {/* profile */}
        <div className="flex flex-col items-center justify-around mt-24 gap-8">
          <div className=" flex flex-col items-center justify-center ">
            <div class="flex items-center cursor-pointer justify-center h-10 w-10 rounded-full bg-[#c0cbe7] ">
              <img
                src={avatar}
                className="w-6 h-6 absolute mt-4 rounded "
                alt=""
              />
            </div>
          </div>
          <div className=" h-10 w-10  flex justify-center items-center cursor-pointer rounded-2xl  hover:bg-[#2C3A58] transition duration-300 ease-in-out">
            <img src={ext} className="w-6 h-6" alt="" />
          </div>
        </div>
      </div>
  )
}

export default SideBar