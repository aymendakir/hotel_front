"use client";
import Navbar from "../Navbar";
import Fotter from "../fotter";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { TbMapStar } from "react-icons/tb";


export default function Contact_us()
{
  return (
    <>
      <Navbar />
      <div className="flex  justify-between h-[90vh]  items-center  font_home ">
        <div className=" w-[50%] h-[90vh] flex flex-col justify-center items-center ">
          <h1 className="text-center mt-5 text-[60px] font-bold">Contact Us</h1>
          <p className=" font-light w-[80%] text-center my-10">
            feel free to contact us any time. we will get back to you as soon as
            we can!
          </p>
          <form
            className="flex flex-col  justify-start "
            action="#"
            method="post"
            id="contactForm"
            name="contact
            name"
          >
            <input
              className=" my-5 relative border-b-2  border-gray-400/80 p-3 placeholder:font-semibold placeholder:capitalize placeholder:text-gray-500     "
              type="text"
              id="name"
              name="name"
              placeholder="name"
              required
            />

            <br />

            <input
              className=" my-5 relative border-b-2  border-gray-400/80 p-3 placeholder:font-semibold placeholder:capitalize placeholder:text-gray-500     "
              type="email"
              id="email"
              name="email"
              placeholder="email"
              required
            />
            <br />

            <textarea
              className=" my-5  relative border-b-2 border-2  border-slate-400/25 border-b-gray-400/80 p-3 placeholder:font-semibold placeholder:capitalize placeholder:text-gray-500     "
              id="message"
              name="message"
              rows="2"
              cols="40"
              placeholder="message"
              required
            ></textarea>
            <br />
            <input
              className="p-4 w-52 bg-black/90 text-white uppercase"
              type="submit"
              value="send"
            />
          </form>
        </div>
        <div className="bg-black/95 h-[400px] w-[500px] text-white relative  before:absolute before:w-10 before:h-10 before:-top-2 before:-left-2 before:bg-blue-600 ">
          <div className="ml-12 mt-10">
            <h1 className="text-[50px] font-bold uppercase mb-8">info</h1>
            <p className="text-xl font-medium mb-5 capitalize flex">
              <span className="text-4xl mr-4">
                <MdOutlineMail />
              </span>
              aymendakr@yahoo.com
            </p>
            <p className="text-xl font-medium mb-5 flex ">
              <span className="text-4xl mr-4">
                <BsTelephone />
              </span>
              +212636331867
            </p>
            <p className="text-xl font-medium mb-5 flex">
              <span className="text-4xl mr-4">
                <TbMapStar />
              </span>
              hay erraha berrchid
            </p>
          </div>
        </div>
      </div>
      <Fotter />
    </>
  );
}
