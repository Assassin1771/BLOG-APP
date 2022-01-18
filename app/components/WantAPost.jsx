import React from "react";

const WantAPost = () => {
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg mt-10 w-fit h-28 text-center m-auto">
        <div className="px-4 lg:px-0">
          <div className="flex items-center w-full">
            <div className="flex lg:mb-0 lg:w-auto mt-5 mb-5 items-center">
              <h1 className="transition duration-700 text-center cursor-pointer text-3xl font-semibold md:text-xl lg:text-2xl mb-2 mx-1">
                DO YOU ALSO WANT A POST ON THIS WEBSITE??
              </h1>
            </div>
            {/* <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeh27B3laDUMuiEGlM0-ASAoUvH6Dc8I-O9xfOBYj0tt8VxXw/viewform?usp=sf_link"
              target="_blank"
              className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-sm md:text-base lg:text-xl font-medium rounded-full text-white px-8 py-3 cursor-pointer mt-10"
            >
              CLICK HERE
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WantAPost;
