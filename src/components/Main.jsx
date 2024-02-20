import React from 'react'
import hey from "../assets/hey.svg";
import notify from "../assets/notify.svg";
import growth from "../assets/growth.svg";
import right_icon from "../assets/right_icon.svg";
import watch from "../assets/watch.svg";
import elipse2 from "../assets/Ellipse2.svg";
import elipse24 from "../assets/Ellipse_24.svg";
import elipse39 from "../assets/Ellipse_39.svg";
import elipse29 from "../assets/Ellipse_29.svg";
import avatar2 from "../assets/avatar-1.svg";
import avatar3 from "../assets/avatar-2.svg";
import avatar4 from "../assets/avatar-2.svg";
import avatar5 from "../assets/avatar-3.svg";
import graph from "../assets/graph.svg";
import lg from "../assets/lg.svg";
import vir from "../assets/Line_9.svg";
import notification from "../assets/notification.svg";
import avatar from "../assets/avatar-5.svg";


function Main() {
  return (
    <div className=" h-full w-full sm:w-[60%]  flex items-center justify-center">
    <div className=" h-[90%] flex flex-col gap-6 items-center">
      {/* top */}
      <div className="flex gap-2">
        {/* name */}
        <div>
          <div className="text-white text-xl flex flex-col">
            {" "}
            <span>Hello,</span>
            <div className="flex gap-2 items-center">
              <span className=" font-semibold sm:font-bold">Dr.Colter! </span>
              <img src={hey} className="h-4 w-4  sm:w-6 sm:h-6" alt="" />
            </div>
          </div>
        </div>
        {/* search bar */}
        <div className="flex gap-4">
          {/* search */}
          <div className="relative items-center">
            <div className="absolute top-4 sm:inset-y-0 sm:start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              className=" w-full  px-16 py-3 sm:px-28 sm:py-4 sm:ps-10 text-sm bg-[#2C3A58] rounded-2xl border-[#2C3A58] focus:outline-none"
              placeholder="Search...."
            />
          </div>
          <div class=" hidden cursor-pointer relative sm:flex items-center h-[50px] bg-[#409BEE] rounded-xl  px-4 ">
            <img class="w-5 h-5 rounded" src={notify} alt="" />
            <span class="absolute  left-8 top-4 transform -translate-y-1/2 w-2.5 h-2.5 bg-[#E30000]   rounded-full"></span>
          </div>
        </div>
      </div>

      {/* base */}
      <div className="flex gap-4 w-full justify-around">
        {/* left side of base */}
        <div className="flex flex-col items-center gap-4 w-[50%] sm:w-[40%]">
          <div className="bg-[#1B2C4F] rounded-3xl w-[95%] h-[100px] flex">
            <div className="w-[60%] flex flex-col justify-center  ">
              <div className="text-xl text-white font-bold ml-4 ">
                42
              </div>
              <div className="text-white ml-4">
                <div className="text-xs font-bold">
                  Patients Visited
                </div>
                <div className="text-[8px] ">This Month</div>
              </div>
            </div>
            <div className="w-[40%] bg-[#2C3A58] rounded-r-3xl flex justify-center items-center">
              <div className=" bg-[#409BEE] w-[40%] h-[60%] rounded-full ">
                <div className="h-[30%] bg-[#5a84ab80] rounded-t-3xl"></div>
                <div className="h-[70%] flex flex-col justify-center items-center">
                  <img src={growth} className="w-3 h-3" alt="" />
                  <span className="text-white text-[8px]">+70%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1B2C4F] rounded-3xl w-[95%] h-[100px] flex flex-col gap-2 justify-center ">
            <div className="flex gap-4  ">
              <div className="bg-[#409BEE] ml-4  px-2 flex justify-center items-center rounded-full ">
                <img src={right_icon} className="w-2 h-2" alt="" />
              </div>
              <div className="text-xs text-[#CCCCCC] font-bold">
                Upcoming Events
              </div>
            </div>
        <div className="flex gap-4 justify-center items-center">
        <div className="relative flex items-center justify-center -ml-6 ">
          <img src={elipse2} alt="" className=" w-14 h-14   " />
          <div class="flex items-center justify-center h-10 w-10 rounded-full absolute bg-[#c0cbe7] ">
            <img
              src={avatar}
              className="w-8 h-8 absolute mt-2 rounded-xl "
              alt=""
            />
          </div>
        </div>



              <div className="flex flex-col justify-center items-center">
                <div className="text-sm font-bold">Aliza Shah</div>
                <div className="flex gap-2">
                  <img src={watch} className="w-3 h-3" alt="" />
                  <span className="text-[#CCCCCC] text-[8px]">
                    08:00-09:00 am
                  </span>
                </div>
                <div className="bg-[#2C3A58] w-full mt-2 h-4 rounded-3xl text-[#CCCCCC] text-[8px] flex justify-center items-center ">
                  Visited 7 days ago
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right side of base */}
        <div className="bg-[#1B2C4F] w-[50%] sm:w-[60%] h-[210px] flex flex-col gap-4 rounded-3xl">
          <div className="flex items-center justify-around mt-2">
            <div className="flex flex-col ">
              <div className="text-white text-xl font-bold">
                Statistics
              </div>
              <p className="text-[#DCDCDC] text-xs">November 2023</p>
            </div>
            
              <select
                class=" cursor-pointer border bg-[#1B2C4F] border-[#409BEE] text-white text-xs p-2 rounded-full"
              >
                <option selected>Weekly</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select> 
              
            </div>
          
          <div className=" relative flex justify-center items-center">
            <img src={graph} className="w-[80%] h-[80%]  " alt="" />
            <img src={lg} className=" absolute " alt="" />
            <img src={elipse39} className=" absolute h-4 w-4 " alt="" />
            
            <img src={elipse29} className=" h-8 w-8 absolute top-3 " alt="" />
            <p className="text-white text-[8px] absolute top-5">82%</p>
            <img src={vir} className=" absolute h-10 w-10 top-[52px]" alt="" />
          </div>
        </div>
      </div>

      {/* end  */}
      <div className="flex gap-4 w-full">
        {/* left side of base */}
        <div className="flex flex-col gap-4 w-[60%]">
          <div className="text-white text-xl font-bold">
            Active Patients
          </div>
          <div className="bg-[#1B2C4F] h-[300px] rounded-3xl flex flex-col justify-evenly items-center gap-2 ">
            <div className="flex justify-around w-[90%] items-center mt-2  ">
              <div className="w-[30%]">
                <p className="text-[#DCDCDC] text-xs">08:00 am</p>
              </div>
              <div className="w-[70%] relative">
                <div class="border-b w-full border-dashed border-[#686868] border-1"></div>

                <div class="ml-4 px-2 absolute h-10 top-[-20px] flex justify-center items-center gap-2 bg-[#F5E5E5] rounded-2xl text-black">
                  <div className="w-8 h-8 rounded-3xl ring-1 flex justify-center items-center bg-[#E8BBF8] ring-gray-300 dark:ring-[#1B2C4F]">
                    <img
                      src={avatar}
                      alt="User"
                      class="w-6 h-6 rounded-full mt-2.5"
                    />
                  </div>
                  <div>
                    <p class="text-sm font-bold ">Mark jaxon</p>
                    <p class="text-black text-xs">12:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-around w-[90%] items-center  ">
              <div className="w-[30%]">
                <p className="text-[#DCDCDC] text-xs">08:00 am</p>
              </div>
              <div className="w-[70%] relative">
                <div class="border-b w-full border-dashed border-[#686868] border-1"></div>

                <div class="right-0 px-2 absolute h-10 top-[-20px] flex justify-center items-center gap-2 bg-[#E5F5E6] rounded-2xl text-black">
                  <div className="w-8 h-8 bg-[#BBF8F1] rounded-full ring-1 flex justify-center items-center ring-gray-300 dark:ring-[#1B2C4F]">
                    <img
                      src={avatar2}
                      alt="User"
                      class="w-6 h-6 mt-2.5 rounded-full "
                    />
                  </div>
                  <div>
                    <p class="text-sm font-bold ">Mark jaxon</p>
                    <p class="text-black text-xs">12:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-around w-[90%] items-center  ">
              <div className="w-[30%]">
                <p className="text-[#DCDCDC] text-xs">08:00 am</p>
              </div>
              <div className="w-[70%] relative">
                <div class="border-b w-full border-dashed border-[#686868] border-1"></div>

                <div class="left-2 px-2 absolute h-10 top-[-20px] flex justify-center items-center gap-2 bg-[#C9F3EC] rounded-2xl text-black">
                  <div className="w-8 h-8 bg-[#CBF8BB] rounded-full ring-1 flex justify-center items-center ring-gray-300 dark:ring-[#1B2C4F]">
                    <img
                      src={avatar4}
                      alt="User"
                      class="w-6 h-6 mt-2.5 rounded-full "
                    />
                  </div>
                  <div>
                    <p class="text-sm font-bold ">Mark jaxon</p>
                    <p class="text-black text-xs">12:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-around w-[90%] items-center  ">
              <div className="w-[30%]">
                <p className="text-[#DCDCDC] text-xs">11:00 am am</p>
              </div>
              <div className="w-[70%] relative">
                <div class=" border-b w-full border-dashed border-[#686868] border-1"></div>

                <div class=" right-4 px-2 absolute py-1 top-[-13px] flex justify-center items-center gap-2 bg-[#111729] rounded-2xl text-black">
                  <div>
                    <p class="text-xs text-white ">Break Time</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-around w-[90%] items-center  ">
              <div className="w-[30%]">
                <p className="text-[#DCDCDC] text-xs">08:00 am</p>
              </div>
              <div className="w-[70%] relative">
                <div class=" border-b w-full border-dashed border-[#686868] border-1"></div>

                <div class=" right-4 px-2 absolute h-10 top-[-20px] flex justify-center items-center gap-2 bg-[#C1E2F4] rounded-2xl text-black">
                  <div className="w-8 h-8 bg-[#E8F8BB] rounded-full ring-1 flex justify-center items-center ring-gray-300 dark:ring-[#1B2C4F]">
                    <img
                      src={avatar5}
                      alt="User"
                      class="w-6 h-6 mt-2.5 rounded-full "
                    />
                  </div>
                  <div>
                    <p class="text-sm font-bold ">Mark jaxon</p>
                    <p class="text-black text-xs">12:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side of base */}
        <div className="flex flex-col gap-4 w-[40%]">
          <div className="text-white text-xl font-bold">
            Upcoming Events
          </div>
          <div className="flex flex-col items-center gap-4 ">
            {/* upper part */}
            <div className="bg-[#1B2C4F] rounded-3xl w-[95%] h-[140px] flex flex-col  justify-around">
              <div className="flex gap-2 justify-around">
                <div className="flex flex-col ">
                  <div className="text-sm font-bold">Team Meating</div>
                  <div className="flex gap-2">
                    <img src={watch} className="w-3  h-3" alt="" />
                    <span className="text-[#DCDCDC] text-[8px]">
                      08:00-09:00 am
                    </span>
                  </div>
                </div>
                <div className="bg-[#2C3A58] w-10 h-10 rounded-2xl flex justify-center items-center">
                  <img src={notification} className="w-3 h-3" alt="" />
                </div>
              </div>
              <div className="flex gap-3 justify-around">
                <div class="flex -space-x-4 rtl:space-x-reverse">
                  <img
                    class="w-8 h-8 border-2 bg-[#EFABAB] dark:border-gray-800 rounded-full "
                    src={avatar}
                    alt=""
                  />
                  <img
                    class="w-8 h-8 border-2 bg-[#c0cbe7] dark:border-gray-800 rounded-full "
                    src={avatar2}
                    alt=""
                  />
                  <img
                    class="w-8 h-8 border-2 bg-[#E8F8BB] dark:border-gray-800 rounded-full"
                    src={avatar3}
                    alt=""
                  />
                  <a
                    class="flex items-center justify-center w-8 h-8 text-xs font-medium text-black bg-white border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                    href="#"
                  >
                    +99
                  </a>
                </div>
                <div className="bg-[#409BEE] ml-4  px-4 flex justify-center items-center rounded-xl ">
                  <img src={right_icon} className="w-3 h-3" alt="" />
                </div>
              </div>
            </div>
            {/* lower part */}
            <div className="bg-[#1B2C4F] rounded-3xl w-[95%] h-[140px] flex justify-center items-center gap-2">
              <div className="flex flex-col gap-6 items-center w-[60%]">
                <div className="flex flex-col items-center">
                  <p className="text-[#DCDCDC] text-xs">Consultation</p>
                  <div className="text-xl font-bold">82/100</div>
                </div>
                <div className="bg-[#2C3A58] flex gap-2 items-center px-4 py-1 rounded-xl">
                  <p className="text-[#DCDCDC] text-xs">82%</p>
                  <img src={growth} alt="" className="w-3 h-3" />
                </div>
              </div>
              <div className="flex flex-col items-center w-[40%]">
                {/* dotted button */}
                <button className="">Dot</button>
                <div class="relative h-20 w-20">
                  <div class="absolute inset-0 flex items-center ">
                    <div class="h-12 w-12 rounded-full border-[9px] border-white"></div>
                  </div>
                  <div class="absolute inset-0 left-[-32px] flex items-center justify-center overflow-hidden">
                    <img src={elipse24} className="w-12 h-12" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Main