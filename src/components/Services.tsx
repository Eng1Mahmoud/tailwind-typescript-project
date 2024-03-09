import React from "react";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
export const Services: React.FC = () => {
  return (
    <div className="services my-[50px]">
      <div className="container">
        <h1 className="services__title text-mainColorText text-[30px] font-bold text-center my-10">
          Our Services
        </h1>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* <!-- card  1--> */}
          <div className="services__card bg-backgroundElement text-center shadow-2xl card p-5 group hover:bg-primary">
            <div className="services__card-icon w-[70px] h-[70px] mx-auto mb-4">
              <img src={s1} alt="s1" />
            </div>
            <h1 className="services__card-title text-mainColorText text-[20px] font-bold pb-2">
              Maintenance
            </h1>
            <p className="services__card-desc text-secoundColorText">
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal
            </p>
          </div>
          {/* <!-- card  2--> */}
          <div className="services__card bg-backgroundElement text-center shadow-2xl card p-5 group hover:bg-primary">
            <div className="services__card-icon w-[70px] h-[70px] mx-auto mb-4">
              <img src={s2} alt="s2" />
            </div>
            <h1 className="services__card-title text-mainColorText text-[20px] font-bold pb-2">
              Electrical
            </h1>
            <p className="services__card-desc text-secoundColorText">
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal
            </p>
          </div>
          {/* <!-- card  3--> */}
          <div className="services__card bg-backgroundElement text-center shadow-2xl card p-5 group hover:bg-primary">
            <div className="services__card-icon w-[70px] h-[70px] mx-auto mb-4" >
              <img src={s3} alt="s3" className="w-full h-full" />
            </div>
            <h1 className="services__card-title text-mainColorText text-[20px] font-bold pb-2">
              Plumbing
            </h1>
            <p className="services__card-desc text-secoundColorText">
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal
            </p>
          </div>
        </div>

        {/* set button in center */}
        <div className="text-center mt-[80px]">
          <button className="btn btn-secondary text-white px-8 capitalize">
            read more
          </button>
        </div>
      </div>
    </div>
  );
};
