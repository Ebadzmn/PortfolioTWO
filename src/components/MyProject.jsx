import React from 'react';
import PRO1 from '../assets/PRO1.jpeg';
import PRO2 from '../assets/Pro2.jpeg';
import PRO3 from '../assets/Pro3.jpeg';
import PRO4 from '../assets/Pro4.jpeg';

const MyProject = () => {
    return (
        <div className='w-full h-[100%] bg-[#1A1A1A]'>

            <div className='mx-auto max-w-7xl'>

                <div className=' text-center text-white mb-24'>
                    <h1 className='text-6xl font-bold mb-10' style={{ fontFamily: 'Syne', }}>My Projects Highlight</h1>
                    <button className='btn border border-[#FF9142] w-52 h-12 text-white rounded-full'>Explore More</button>
                </div>

                <div className='grid grid-cols-2 gap-10 ml-8'>

                    <div className='w-[60vh] h-[80vh] hover:scale-105 transition duration-300 '>
                        <img src={PRO1} className='w-full h-[60vh] object-cover rounded-2xl' />
                        <div className='my-5 flex items-center justify-between'>
                            <h1 className='text-2xl font-bold font-[Syne] text-white'>Brand Journey Improvements</h1>
                            <div className='w-20 h-0 border border-[#FF9142] rounded-full mr-8 opacity-50'></div>
                        </div>

                        <div className='my-3 flex items-center gap-5'>
                            <p className='text-gray-400 text-sm'>Client : </p>
                            <p className='text-white text-sm'>Organc</p>
                        </div>

                        <div className='my-2 flex items-center gap-5'>
                            <p className='text-gray-400 text-sm'>Work : </p>
                            <p className='text-white text-sm'>Branding</p>
                            <p className='text-white text-sm'>Logo design</p>
                        </div>
                    </div>



                    <div className='w-[60vh] h-[80vh] hover:scale-105 transition duration-300 '>
                        <img src={PRO2} className='w-full h-[60vh] object-cover rounded-2xl' />
                        <div className='my-5 flex items-center justify-between'>
                            <h1 className='text-2xl font-bold font-[Syne] text-white'>Brand Grouping</h1>
                            <div className='w-20 h-0 border border-[#FF9142] rounded-full mr-8 opacity-50'></div>
                        </div>

                        <div className='my-3 flex items-center gap-5'>
                            <p className='text-gray-400 text-sm'>Client : </p>
                            <p className='text-white text-sm'>FR</p>
                        </div>

                        <div className='my-2 flex items-center gap-5'>
                            <p className='text-gray-400 text-sm'>Work : </p>
                            <p className='text-white text-sm'>Branding</p>
                            <p className='text-white text-sm'>Logo design</p>
                        </div>
                    </div>


                    <div className='w-[60vh] h-[80vh] hover:scale-105 transition duration-300 '>
                        <img src={PRO3} className='w-full h-[60vh] object-cover rounded-2xl' />
                        <div className='my-5 flex items-center justify-between'>
                            <h1 className='text-2xl font-bold font-[Syne] text-white'>NFT Glimps</h1>
                            <div className='w-20 h-0 border border-[#FF9142] rounded-full mr-8 opacity-50'></div>
                        </div>

                        <div className='my-3 flex items-center gap-5'>
                            <p className='text-gray-400 text-sm'>Client : </p>
                            <p className='text-white text-sm'>Rumanda</p>
                        </div>

                        <div className='my-2 flex items-center gap-5'>
                            <p className='text-gray-400 text-sm'>Work : </p>
                            <p className='text-white text-sm'>NFT Design</p>
                            <p className='text-white text-sm'>Logo design</p>
                        </div>
                    </div>


                    <div className='w-[60vh] h-[80vh] hover:scale-105 transition duration-300 '>
                        <img src={PRO4} className='w-full h-[60vh] object-cover rounded-2xl' />
                        <div className='my-5 flex items-center justify-between'>
                            <h1 className='text-2xl font-bold font-[Syne] text-white'>Brand Suggestions</h1>
                            <div className='w-20 h-0 border border-[#FF9142] rounded-full mr-8 opacity-50'></div>
                        </div>

                        <div className='my-3 flex items-center gap-5'>
                            <p className='text-gray-400 text-sm'>Client : </p>
                            <p className='text-white text-sm'>T3d</p>
                        </div>

                        <div className='my-2 flex items-center gap-5'>
                            <p className='text-gray-400 text-sm'>Work : </p>
                            <p className='text-white text-sm'>NFT logo</p>
                            <p className='text-white text-sm'>Logo design</p>
                        </div>
                    </div>



                </div>

            </div>
            
        </div>
    );
};

export default MyProject;