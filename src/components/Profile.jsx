import React from 'react'
import elipse2 from "../assets/Ellipse2.svg";
import mic from "../assets/mic.svg";
import phone from "../assets/Vector.svg";
import avatar from "../assets/avatar-5.svg";
import avatar2 from "../assets/avatar-1.svg";
import avatar3 from "../assets/avatar-2.svg";


function Profile() {
  return (
    <div className=" h-full w-full sm:w-[40%] flex items-center justify-center ">
            <div className=" bg-[#111729] w-[90%] h-[95%] rounded-3xl flex flex-col   gap-8 ">
              {/* profile */}
              <div className="flex flex-col items-center  gap-2 mt-4 ">
                <div className="relative flex items-center justify-center">
                  <img src={elipse2} alt="" className=" w-28 h-28" />
                  <div class="flex items-center justify-center h-20 w-20 rounded-full absolute bg-[#c0cbe7] ">
                    <img
                      src={avatar}
                      className="w-16 h-16 absolute mt-6 rounded-3xl "
                      alt=""
                    />
                  </div>
                </div>
                <div className="text-white text-xl font-bold">ALIAM COLTER</div>
                <p className="text-[#CCCCCC]">Physician</p>
              </div>
              {/* content */}
              <div className="flex flex-col items-center gap-4">
                {/* upper part */}
                <div className="bg-[#1C2A4E] w-[80%] h-[60px] rounded-3xl items-center flex justify-around">
                  <div className="text-white text-xl">Active Patients</div>
                  <div class="flex -space-x-4 rtl:space-x-reverse">
                    <img
                      class="w-10 h-10 border-2 bg-[#EFABAB] dark:border-gray-800 rounded-full "
                      src={avatar}
                      alt=""
                    />
                    <img
                      class="w-10 h-10 border-2 bg-[#c0cbe7] dark:border-gray-800 rounded-full "
                      src={avatar2}
                      alt=""
                    />
                    <img
                      class="w-10 h-10 border-2 bg-[#E8F8BB] dark:border-gray-800 rounded-full"
                      src={avatar3}
                      alt=""
                    />
                    <a
                      class="flex items-center justify-center w-10 h-10 text-xs font-medium text-black bg-white border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                      href="#"
                    >
                      +99
                    </a>
                  </div>
                </div>
                {/* bottom part */}
                <div className="bg-[#1C2A4E] w-[80%] h-[300px] text-black rounded-3xl flex flex-col">
                  <div className="flex flex-col w-full flex-auto gap-2 flex-shrink-0 mt-2">
                    <div className="flex justify-around items-center gap-2">
                      <div class="flex items-center cursor-pointer justify-center h-10 w-10 rounded-full bg-[#E8F8BB] flex-shrink-0">
                        <img
                          src={avatar3}
                          className="w-9 h-9 rounded-full mt-2"
                          alt=""
                        />
                      </div>
                      <div className="flex text-white flex-col ">
                        <div className="text-xl ">Alexa Max</div>
                        <p className="text-[#CCCCCC] text-xs">
                          Active 5 min ago
                        </p>
                      </div>
                      <div className="flex cursor-pointer justify-center items-center w-8 h-8 rounded-full bg-[#2C3A58]">
                        <img src={phone} className="w-3 h-3" alt="" />
                      </div>
                    </div>

                    <div className="flex justify-center ">
                      <div className="bg-[#ffffff33] w-[80%] h-[1px]"></div>
                    </div>
                  </div>

                  <div class="flex flex-col w-full flex-auto flex-shrink-0 rounded-2xl bg-[#1C2A4E] h-full p-4">
                    <div class="flex flex-col w-full h-full overflow-x-auto mb-4">
                      <div class="flex flex-col gap-2 h-full">
                        <div class="flex flex-row items-center">
                          <div class="flex items-center justify-center h-10 w-10 rounded-full bg-[#E8F8BB] flex-shrink-0">
                            <img
                              src={avatar3}
                              className="w-9 h-9 rounded-full mt-2"
                              alt=""
                            />
                          </div>
                          <div class="relative ml-3 text-sm bg-[#F1F1F1] py-1 px-2 shadow rounded-xl">
                            Hi, Doctor.
                          </div>
                        </div>

                        <div class="flex flex-row items-center">
                          <div class="flex items-center justify-center h-10 w-10 rounded-full bg-[#E8F8BB] flex-shrink-0">
                            <img
                              src={avatar3}
                              className="w-9 h-9 rounded-full mt-2"
                              alt=""
                            />
                          </div>
                          <div class="relative ml-3 text-sm bg-[#F1F1F1] py-1 px-2 shadow rounded-xl">
                            I got knee jerk. What should i do right now?
                          </div>
                        </div>

                        <div class="flex items-center justify-start flex-row-reverse">
                          <div class="flex items-center justify-center h-10 w-10 rounded-full bg-[#E8F8BB] flex-shrink-0">
                            <img
                              src={avatar2}
                              className="w-9 h-9 rounded-full mt-2"
                              alt=""
                            />
                          </div>
                          <div class="relative mr-3 text-sm bg-[#BDD8F0] py-1 px-2 shadow rounded-xl">
                            Hi, Alexa.
                          </div>
                        </div>

                        <div class="flex items-center justify-start flex-row-reverse">
                          <div class="flex items-center justify-center h-10 w-10 rounded-full bg-[#E8F8BB] flex-shrink-0">
                            <img
                              src={avatar2}
                              className="w-9 h-9 rounded-full mt-2"
                              alt=""
                            />
                          </div>
                          <div class="relative mr-3 text-sm bg-[#BDD8F0] py-1 px-2 shadow rounded-xl">
                            This help maintain balance and posture. dont worry.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-center items-center h-16 rounded-xl bg-[#2C3A58] w-full px-4">
                      <div className="flex items-center justify-center" >
                        <img
                          src={mic}
                          className="w-5 h-5 rounded-full mt-2"
                          alt=""
                        />
                      </div>
                      <div class="flex-grow ml-4">
                        <div class="relative w-full">
                          <input
                            type="text"
                            class="flex w-full bg-[#2C3A58] rounded-xl  pl-4 h-10"
                          />
                        </div>
                      </div>
                      <div class="ml-4">
                        <button class="flex  items-center justify-center bg-[#409BEE] hover:bg-[#5695d0] rounded-xl text-white p-3 flex-shrink-0">
                          <span class="ml-2">
                            <svg
                              class="w-4 h-4 transform rotate-45 -mt-px"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Profile