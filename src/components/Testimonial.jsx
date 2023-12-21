import React from 'react';
import Tts from '../assets/Tets.png';

const Testimonial = () => {
    return (
        <div className='w-full h-[100%] bg-[#1A1A1A] py-10'>

            <div className='mx-auto max-w-7xl flex gap-14 '>

                <div className='w-60 h-60 bg-white opacity-20 rounded-full blur-2xl absolute top-[538%] left-[10%]'>
                </div>

               <div>
                   <h1 className='text-7xl font-bold font-[Syne] text-white py-14'>
                       Testimonial
                   </h1>

                   <p className='text-gray-400 text-md py-5'>
                       “Aaronn was fantastic to work with from start to finish. We were looking for a simple, stand-out logo and he delivered. I tried designing the logo myself thinking I wouldn’t need to pay the money for a professional graphic designer but I was very wrong. Working with Aaronn was worth every penny and was surprisingly affordable! I remember him saying simplicity is key to a successful logo and boy he was right. I can’t thank Aaronn enough for his effort and professionalism. I would recommend him to anyone looking for a design!”
                   </p>

                   <h1 className=' text-3xl font-bold font-[Syne] text-white py-5 '>
                       -Martin lee
                   </h1>
               </div>

                <div className='py-12'>
                    <img  src={Tts} className='w-[900px] ' />
                </div>

            </div>
            
        </div>
    );
};

export default Testimonial;