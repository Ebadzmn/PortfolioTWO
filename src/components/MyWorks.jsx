import React from 'react';
import MY1 from '../assets/MY1.jpeg';
import MY2 from '../assets/MY2.jpeg';
import MY3 from '../assets/MY3.jpeg';
import MY4 from '../assets/MY4.jpeg';
import MY5 from '../assets/MY5.jpeg';
import MY6 from '../assets/MY-6.jpeg';
import MY7 from '../assets/MY7.png';
import MY8 from '../assets/MY8.jpeg';

const MyWorks = () => {
    return (
        <div className='w-full h-[100%] bg-[#1A1A1A] py-10'>

            <div className='mx-auto max-w-7xl'>

                <div>
                    <h1 className='text-7xl font-bold font-[Syne] text-white my-6'> My Works </h1>
                    <p>Showcase About Works</p>
                </div>

                <div className='w-full h-0 border border-[#FF9142] rounded-full mt-16 opacity-75'>
                </div>

                <div className='grid grid-cols-3 gap-10 mt-20'>

                    <div className='w-full h-[439px] rounded-3xl'>
                        <img src={MY1} className='w-full h-[82%] object-cover rounded-xl'/>
                        <p className='text-white text-sm font-medium text-center mt-6 font-[Inter] tracking-widest mb-2GIT '>Blue</p>
                        <h1 className='text-white text-center text-2xl font-[Inter] font-bold tracking-wider'>Orvillebury</h1>
                    </div>

                    <div className='w-full h-[439px] rounded-3xl'>
                        <img src={MY2} className='w-full h-[82%] object-cover rounded-xl'/>
                        <p className='text-white text-sm font-medium text-center mt-6 font-[Inter] tracking-widest mb-2'>GREEN</p>
                        <h1 className='text-white text-center text-2xl font-[Inter] font-bold tracking-wider'>West Lavada</h1>
                    </div>

                    <div className='w-full h-[439px] rounded-3xl'>
                        <img src={MY3} className='w-full h-[82%] object-cover rounded-xl'/>
                        <p className='text-white text-sm font-medium text-center mt-6 font-[Inter] tracking-widest mb-2'>AQUA</p>
                        <h1 className='text-white text-center text-2xl font-[Inter] font-bold tracking-wider'>Rempelshire</h1>
                    </div>
                </div>


                <div className='grid grid-cols-2 gap-10 mt-20 mx-20'>

                    <div className='w-full h-[439px] rounded-3xl'>
                        <img src={MY4} className='w-full h-[82%] object-cover rounded-xl'/>
                        <p className='text-white text-sm font-medium text-center mt-6 font-[Inter] tracking-widest mb-2'>LIME</p>
                        <h1 className='text-white text-center text-2xl font-[Inter] font-bold tracking-wider'>Delfinaland</h1>
                    </div>
                    <div className='w-full h-[439px] rounded-3xl'>
                        <img src={MY5} className='w-full h-[82%] object-cover rounded-xl'/>
                        <p className='text-white text-sm font-medium text-center mt-6 font-[Inter] tracking-widest mb-2'>FUCHSIA</p>
                        <h1 className='text-white text-center text-2xl font-[Inter] font-bold tracking-wider'>Buckridgeburgh</h1>
                    </div>
                </div>



                <div className='grid grid-cols-3 gap-10 mt-20'>

                    <div className='w-full h-[439px] rounded-3xl'>
                        <img src={MY6} className='w-full h-[82%] object-cover rounded-xl'/>
                        <p className='text-white text-sm font-medium text-center mt-6 font-[Inter] tracking-widest mb-2'>BLACK</p>
                        <h1 className='text-white text-center text-2xl font-[Inter] font-bold tracking-wider'>Pfefferstad</h1>
                    </div>

                    <div className='w-full h-[439px] rounded-3xl'>
                        <img src={MY7} className='w-full h-[82%] object-cover rounded-xl'/>
                        <p className='text-white text-sm font-medium text-center mt-6 font-[Inter] tracking-widest mb-2'>PURPLE</p>
                        <h1 className='text-white text-center text-2xl font-[Inter] font-bold tracking-wider'> South Adrienne</h1>
                    </div>

                    <div className='w-full h-[439px] rounded-3xl'>
                        <img src={MY8} className='w-full h-[82%] object-cover rounded-xl'/>
                        <p className='text-white text-sm font-medium text-center mt-6 font-[Inter] tracking-widest mb-2'>MAROON</p>
                        <h1 className='text-white text-center text-2xl font-[Inter] font-bold tracking-wider'>Lake Trevor</h1>
                    </div>
                </div>




            </div>
            
        </div>
    );
};

export default MyWorks;