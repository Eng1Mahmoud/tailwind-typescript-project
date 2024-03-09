import React from 'react'
import aboutImage from "../assets/about-img.jpg"
export const About:React.FC = () => {
  return (
    <div className='about mb-[50px]'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 '>
            <div className='about__left pr-3'>
                <h1 className='about__left-title text-mainColorText text-[30px] font-bold'>About Us</h1>
                <p className='about__left-desc text-secoundColorText'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
            </p>
            <button className="btn btn-secondary text-white mt-3 px-8 capitalize">read more</button>
            </div>
            <div className='about__right'>
                <div className='image h-[300px]'>
                <img src={aboutImage} alt='' className='about__right-img h-full w-full' loading='lazy'/>
                </div>
               
            </div>
        </div>
      </div>
    </div>
  )
}
