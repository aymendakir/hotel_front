import Datepicker from "react-tailwindcss-datepicker";
import React, { useState } from "react";
import { RiParentFill } from "react-icons/ri";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Button } from "@material-tailwind/react";

export default function Inputs() {
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

  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  /* console.log(value.startDate);
  const date1 = new Date(value.startDate);
  const date2 = new Date(value.endDate);
  const oneday = 24 * 60 * 60 * 1000;
  const date11 = Math.round(Math.abs((date1 - date2) / oneday));
  console.log(date11);/*/

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  const [isactiv, setIsactiv] = useState(false);

  return (
    <div className=" md:flex-col flex justify-around font_home   rounded-3xl  w-[80%] mx-auto p-7 bg-gray-500/10 backdrop-blur-3xl shadow-sm shadow-black -mt-16 md:-mt-32  ">
      <div>
        <span className=" font-bold uppercase ml-3">check in & check out</span>
        <Datepicker
          inputId="id"
          inputClassName="mt-3 md:w-[100%] w-[312px] text-centre rounded-md focus:ring-0 font-normal bg-byd p-5 text-black shadow-black shadow-sm font-bold placeholder:text-black placeholder:font-bold "
          toggleClassName="absolute rounded-r-lg  right-0 h-full px-3 text-gray-900 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
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
        <span className=" font-bold uppercase ml-3">voyageurs</span>
        <div
          className=" mt-3 flex bg-byd w-[312px]  md:w-auto md:my-2.5 rounded-md justify-center items-center relative p-5 cursor-pointer shadow-black shadow-sm "
          onClick={() => {
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
      <Link to="/Afchamber">
        <Button className="text-black bg-blue-500/50 p-[30px]  mt-7 text-center rounded-full md:w-16 md:mx-auto    ">
          <FaSearch />
        </Button>
      </Link>
    </div>
  );
}
