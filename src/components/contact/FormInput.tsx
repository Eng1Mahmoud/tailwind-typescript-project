import React from "react";

export const FormInput: React.FC = () => {
  return (
    <form>
      <div className="grid grid-cols-1 gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered  w-full "
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input  input-bordered  w-full "
        />
        <input
          type="text"
          placeholder="Your Phone Number"
          className="input input-bordered  w-full "
        />
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Your Message"
        ></textarea>

        <button className="btn btn-secondary w-[200px] text-white">Submit</button>
      </div>
    </form>
  );
};
