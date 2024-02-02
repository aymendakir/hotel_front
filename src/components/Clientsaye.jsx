

import React from "react";


const applicants = [
  {
    text: "waw is incroyable hotrl the best in maroc",
    from: "Michael from Australia",
    chamber: "chamber family",

    id: 0,
  },
  {
    text: "waw is incroyable hotrl the best in maroc",
    from: "Michael from Australia",
    chamber: "chamber family",
    id: 1,
  },
  {
    text: '"We booked Hotel Eucalyptus through Agoda after reading a handful of reviews, and it was easily the best decision we made for our trip to Santorini."',
    from: "Michael from Australia",
    chamber: "chamber family",
    id: 2,
  },
];
export default function Clientsaye() {
  return (
    <div className="mt-20 min-h-[80vh]  font_home rounded-2xl ">
      <div className="mt-10">
        <h1
          className=" mb-16 pt-10 capitalize text-2xl font-bold text-center "
          data-aos="fade-down"
        >
          what our clients say
        </h1>
        <div className="flex w-[90%] justify-center mx-auto space-x-20">
          {applicants.map((applicant) => {
            return (
              <article
                key={applicant.id}
                className=" flex flex-col items-center justify-center h-[350px] w-[350px] bg-white border-2 border-gray-100 shadow-gray-200 shadow-lg relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-blue-700 "
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p className="text-xl text-blue-400 font-medium capitalize text-center absolute top-5 font-face italic ">
                  {applicant.chamber}
                </p>
                <p className="w-[80%] text-center mt-4 font-bold break-words">
                  {applicant.text}
                </p>
                <h3 className="mt-8 font-bold text-lg absolute bottom-5">
                  - {applicant.from}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
