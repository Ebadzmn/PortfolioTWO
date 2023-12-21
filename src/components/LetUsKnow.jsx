import React from 'react';
import Man from '../assets/Man.png';

const LetUsKnow = () => {
    return (
        <div className='w-full h-[70vh] bg-[#1A1A1A]'>

            <div className='w-60 h-60 bg-white opacity-20 rounded-full blur-2xl absolute top-[85%] left-[10%]'>
            </div>

            <div className='mx-auto'>


                <div className='flex justify-center items-center gap-32 relative'>

                    <section>
                        <h1 className='text-7xl font-bold text-white' style={{ fontFamily: 'Syne', }}>
                            Let’s get know <br/> about me closer
                        </h1>
                        <p className='text-gray-400 text-lg mt-10' style={ { fontFamily: 'Rubik' } }>
                            Aaronn is a New York-based visual designer focusing on branding <br/>and visual identity. Her portfolio showcases her wide range of <br/> work, spanning books, posters and web design.
                        </p>

                        <button className='btn bg-[#FF9142] w-52 h-12 text-white mt-10 rounded-full'> Let’s get know</button>
                    </section>


                    <section>
                        <div className='w-96 h-[50vh] '>

                            <img src={Man} className='w-full h-[50vh] object-cover p-2 border border-[#FF9142] rounded-3xl ' />

                        </div>
                    </section>


                </div>

            </div>

        </div>
    );
};

export default LetUsKnow;