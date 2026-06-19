import React from "react";

const Loader = () => {

  return (

    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[9999]">

      <div className="flex flex-col items-center">

        {/* SPINNER */}

        <div className="w-20 h-20 border-4 border-gray-700 border-t-white rounded-full animate-spin">

        </div>

        {/* TEXT */}

        <h1 className="text-white text-2xl font-bold mt-5 tracking-wider">

          Loading...

        </h1>

        <p className="text-gray-400 mt-2 text-sm">

          Please wait a moment

        </p>

      </div>

    </div>
  );
};

export default Loader;