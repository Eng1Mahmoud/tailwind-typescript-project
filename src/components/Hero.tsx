import React from "react";
import manImage from "../assets/slider-img.png";
export const Hero: React.FC = () => {
  return (
    <div className="hero bg-primary">
      <div className="container">
        <div className="flex justify-center flex-wrap md:flex-nowrap">
          <div className="py-5 flex items-start sm:items-center justify-center   ">
            <div className="max-w-md content">
              <h1 className="mb-5 text-5xl font-bold text-mainColorText">
                Repair and Maintenance Services
              </h1>
              <p className="mb-5 text-secoundColorText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                harum voluptatem adipisci. Quos molestiae saepe dicta nobis
                pariatur, tempora iusto, ad possimus soluta hic praesentium
                mollitia consequatur beatae, aspernatur culpa.
              </p>
              <button className="btn btn-secondary text-white">Get Started</button>
            </div>
          </div>
          <div className="min-h-screen bg-primary dark:bg-backgroundColor flex justify-center  ">
            <img src={manImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
