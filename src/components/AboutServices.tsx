import React from 'react'
import aboutServicesImage from "../assets/professional-img.png"
export const AboutServices:React.FC = () => {
  return (
    <div className='about-services  bg-primary py-[30px]'>
        <div className='container'>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
             
                    <div className='image h-[400px]'>
                        <img src={aboutServicesImage} alt='' className='about-services__left-img h-full w-full' loading='lazy'/>
                    </div>

                    <div className='about-services_content'>
                        <h1 className='about-services__left-title text-mainColorText text-[30px] font-bold'>Our Services</h1>
                        <p className='about-services__left-desc text-secoundColorText'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
                        </p>
                        <button className="btn btn-secondary text-white mt-3 px-8 capitalize">read more</button>
                    </div>
                    </div>
            </div>
        </div>

  )
}
