import Datepicker from "react-tailwindcss-datepicker";
import React, { useState, useEffect } from "react";
import { RiParentFill } from "react-icons/ri";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

import { Button } from "@material-tailwind/react";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Navinpu() {
  /************************************************************************************************************ */
  const [isactiv3, setIsactiv3] = useState(false);

  const showbav = () => {
    if (window.scrollY >= 500 && window.innerWidth >= 950) {
      setIsactiv3(true);
    } else {
      setIsactiv3(false);
    }
  };
  window.addEventListener("scroll", showbav);

  useEffect(() => {
    showbav();
    Aos.init({ duration: 2000 });
  }, []);
  /***************************************************************************************************** */
  const [isactiv, setIsactiv] = useState(false);

  const [counterpr, setCounterpr] = useState(2);
  const [counterprchld, setCounterprchld] = useState(0);

  //increase counter
  const increase = () => {
    setCounterpr((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    if (counterpr > 0) {
      setCounterpr((count) => count - 1);
    }
  };
  const increasechld = () => {
    setCounterprchld((count) => count + 1);
  };

  //decrease counter
  const decreasechld = () => {
    if (counterprchld > 0) {
      setCounterprchld((count) => count - 1);
    }
  };
  /************************************************************************************************************ */
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const handleValueChange = (newValue) => {
    setValue(newValue);
  };
  /*************************************************************************** */
  return (
    <header>
      {isactiv3 && (
        <nav
          className="w-full h-20 bg-[#20274d]/90 backdrop-blur-md fixed top-0 z-40 flex justify-center md:hidden  "
          data-aos="fade-down"
        >
          <div className="w-1/4 ">
            <Datepicker
              inputId="id"
              inputClassName="  mt-3 md:w-[100%] h-1/2 w-[300px] text-centre rounded-md focus:ring-0 font-normal bg-byd p-5 text-black shadow-black shadow-sm font-bold placeholder:text-black placeholder:font-bold "
              toggleClassName="absolute rounded-r-lg  hidden h-full px-3 text-gray-900 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
              separator={"/"}
              value={value}
              asSingle={false}
              useRange={false}
              showFooter={true}
              onChange={handleValueChange}
              minDate={new Date()}
            />
          </div>
          <div>
            <div className=" h-1/2">
              <div
                className=" mt-3 flex bg-byd w-[312px]  md:w-auto md:my-2.5 rounded-md justify-center items-center relative p-[18px] cursor-pointer shadow-black shadow-sm "
                onClick={(e) => {
                  setIsactiv(!isactiv);
                }}
              >
                <span className="absolute left-0 ml-4 text-xl">
                  <RiParentFill />
                </span>

                <div className="flex   items-center space-x-2 text-center font-bold">
                  <span className="capitalize ">{counterpr} parent ,</span>
                  <span className="capitalize">{counterprchld} Child</span>
                </div>
              </div>

              {isactiv && (
                <div className="z-10 absolute bg-byd md:h-full md:w-full md:left-0 md:top-0 h-[200px] w-[312px] mt-2.5 rounded-2xl p-4 shadow-black shadow-sm    ">
                  <div className="flex mt-2 justify-between">
                    <div>
                      <p className="mr-10 capitalize font-semibold text-xl mt-1">
                        Adults
                      </p>
                      <span className="text-[11px]">Ages 18 or above</span>
                    </div>
                    <div className="flex items-start justify-end">
                      <span
                        className="text-xl mt-1.5 text-blue-400 cursor-pointer"
                        onClick={decrease}
                      >
                        <FiMinusCircle />
                      </span>
                      <span className="text-xl text-black mt-1 px-2.5">
                        {counterpr}
                      </span>
                      <span
                        className="text-xl mt-1.5 text-blue-400 cursor-pointer"
                        onClick={increase}
                      >
                        <FiPlusCircle />
                      </span>
                    </div>
                  </div>
                  <div className="flex mt-2 justify-between">
                    <div>
                      <p className="mr-10 capitalize font-semibold text-xl mt-1">
                        Child
                      </p>
                      <span className="text-[11px]">Ages 0-17</span>
                    </div>
                    <div className="flex items-start justify-end">
                      <span
                        className="text-xl mt-1.5 text-blue-400 cursor-pointer"
                        onClick={decreasechld}
                      >
                        <FiMinusCircle />
                      </span>
                      <span className="text-xl text-black mt-1 px-2.5">
                        {counterprchld}
                      </span>
                      <span
                        className="text-xl mt-1.5 text-blue-400 cursor-pointer"
                        onClick={increasechld}
                      >
                        <FiPlusCircle />
                      </span>
                    </div>
                  </div>

                  <button
                    className="md:block hidden md:uppercase md:mt-32 md:ml-[35%] md:p-5 md:border-2 md:rounded-full md:text-amber-50 md:bg-gradient-to-r md:from-indigo-500 md:via-purple-500 md:to-pink-500 md:w-32  "
                    onClick={(e) => {
                      setIsactiv(false);
                    }}
                  >
                    apply
                  </button>
                </div>
              )}
            </div>
          </div>
          <Button className="text-black bg-blue-500/50 p-6  h-[64px] mt-3 ml-20  text-center rounded-full md:w-16 md:mx-auto    ">
            <FaSearch />
          </Button>
        </nav>
      )}
    </header>
  );
}
