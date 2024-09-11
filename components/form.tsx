import React from "react";

const Form = () => {
  return (
    <div className="w-full  mx-auto mt-10">
      <div className="bg-cardHeader p-4 rounded-t-2xl">
        <h2 className="text-2xl font-bold text-left">Ask us anything</h2>
      </div>
      <form className="bg-white p-6 rounded-b-lg shadow-md space-y-4">
        <div className="flex flex-row justify-between space-x-4">
          <div className="flex flex-col space-y-2 w-1/2">
            <label className="font-semibold text-black">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="p-3 border border-input  text-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:inputFocus w-full"
            />
          </div>
          <div className="flex flex-col space-y-2 w-1/2">
            <label className="font-semibold text-black">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="p-3 border border-input  text-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:inputFocus w-full"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-semibold text-black">Your question</label>
          <textarea
            placeholder="Your app is perfect!!"
            className="p-2 border border-input  text-gray-800 rounded-lg h-24 resize-none focus:outline-none focus:ring-2 focus:inputFocus"
          ></textarea>
        </div>
        <div className="flex flex-col space-y-2 items-center justify-center">
          <button className="w-40 p-4 bg-black text-white rounded-3xl hover:bg-gray-700 transition duration-700">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
