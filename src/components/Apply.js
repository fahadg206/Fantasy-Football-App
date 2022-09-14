import React from "react";

const Apply = () => {
  return (
    <div className="flex justify-center mt-20">
      <form
        action="https://getform.io/f/e1a95e3a-55f7-48bc-8315-29ce4c5ebf68"
        method="POST"
        className="flex flex-col max-w-[600px] w-full bg-white text-center shadow-lg shadow-black rounded-[10px] p-5"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            Apply!
          </p>
          <p className="text-black py-4 mt-5 font-bold">
            // No buy in required. $500 Prize Pool! <br />
            // Submit the form below to apply for the RainCity Fantasy League!
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="bg-[#D1D5DB] text-black p-1"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          name="tel"
          className="my-4 p-2 bg-[#D1D5DB] text-black"
        />
        <textarea
          placeholder="Message"
          name="message"
          rows="10"
          className="bg-[#D1D5DB] p-2"
        ></textarea>
        <button className="text-black border-2 hover:bg-[black] hover:border-[#D1D5DB] hover:text-[#D1D5DB] duration-500 hover:scale-110 font-bold px-4 py-3 my-8 mx-auto flex items-center rounded-[10px] border-black">
          Let's Play!
        </button>
      </form>
    </div>
  );
};

export default Apply;
