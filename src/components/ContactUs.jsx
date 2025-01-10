import React from "react";
import image from "../assets/slide3.jpg";

const ContactUs = () => {
  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row items-center justify-center my-10 mt-16"
    >
      {/* Left side with image */}
      <div
        className="relative bg-cover bg-center w-full md:w-1/2 h-[500px] "
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-6xl font-bold">Contact Us</h2>
        </div>
      </div>

      {/* Right side with form */}
      <div className="w-full md:w-1/2 h-[500px] bg-gray-100 p-10">
        <form className="space-y-6">
          {/* Email and Name */}
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter a valid email address"
              className="input input-bordered w-1/2 rounded-none"
              required
            />
            <input
              type="text"
              placeholder="Enter your Name"
              className="input input-bordered w-1/2 rounded-none"
              required
            />
          </div>

          {/* Date */}
          <input
            type="date"
            placeholder="mm/dd/yyyy"
            className="input input-bordered w-full rounded-none"
            required
          />

          {/* Message */}
          <textarea
            placeholder="Enter your message"
            className="textarea textarea-bordered w-full h-32 rounded-none"
            required
          ></textarea>

          {/* Submit Button */}
          <button className="btn btn-neutral rounded-none w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
// justify-center h-[500px] max-w-xl rounded-lg shadow-2xl bg-cover bg-center"

export default ContactUs;
