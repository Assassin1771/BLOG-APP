import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg p-3 md:p-4 lg:p-8 mt-7 w-fit m-auto">
        <div className="px-4 ">
          <div className="flex w-full">
            <div className="flex lg:mb-0 w-auto mb-5">
              <h1 className="transition duration-700 cursor-pointer hover:text-pink-600 font-semibold text-sm md:text-xl lg:text-2xl pl-7 md:pl-3 lg:pd-0">
                CONTACT ME
              </h1>
            </div>
          </div>
          <div className="flex items-center lg:mb-0 lg:w-auto mr-8 items-center mt-none md:mt-1 lg:mt-2">
            <a
              href="https://www.linkedin.com/in/tushar-garg-65663b190/"
              target="_blank"
            >
              <img
                height="40px"
                width="40px"
                className="align-middle rounded-full ml-8 lg:ml-10 hover:h-12 hover:w-12 hover:border-red-900 hover:border-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png"
              ></img>
            </a>
            <a href="https://github.com/Assassin1771" target="_blank">
              <img
                height="40px"
                width="40px"
                className="align-middle rounded-full ml-4 lg:ml-6 hover:h-12 hover:w-12 hover:border-red-900 hover:border-2"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
