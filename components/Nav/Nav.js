import Image from 'next/image';
import React from 'react';
import { MdEmail } from 'react-icons/md'

const Nav = () => {
    return (
        <nav className=''>
            <div className="border border-b-gray-400 py-2">
                <div className="container mx-auto flex justify-between">
                    <div className="flex">
                        <Image src="/img/logo.png" width="132px" height="29px" alt='' />
                    </div>
                    <div className="flex gap-x-2 justify-center items-center">
                        <div className=" md:col-span-5 col-span-7 flex-wrap  flex gap-2">
                            <p className='rounded-2xl hover:bg-pink-700 border border-pink-800 hover:text-white font-medium px-2 cursor-pointer'>New Match (445)</p>
                            <p className="rounded-2xl hover:bg-pink-700 border border-pink-800 hover:text-white font-medium px-2 cursor-pointer">All (978)</p>

                            <p className="rounded-2xl hover:bg-pink-700 border border-pink-800 hover:text-white font-medium px-2 cursor-pointer">My Match (190</p>

                            <p className="rounded-2xl hover:bg-pink-700 border border-pink-800 hover:text-white font-medium px-2 cursor-pointer">Near Me (458)</p>
                        </div>

                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <div className="">
                            <MdEmail className='bg-gray-300 rounded-full p-2 text-4xl cursor-pointer' />
                        </div>
                        <div className="">
                            <MdEmail className='bg-gray-300 rounded-full p-2 text-4xl cursor-pointer' />
                        </div>
                        <div className="">
                            <MdEmail className='bg-gray-300 rounded-full p-2 text-4xl cursor-pointer' />
                        </div>
                        <div className="">
                            <MdEmail className='bg-gray-300 rounded-full p-2 text-4xl cursor-pointer' />
                        </div>
                        <div className="">
                            <MdEmail className='bg-gray-300 rounded-full p-2 text-4xl cursor-pointer' />
                        </div>
                        {/* <div className="">
                        <button type="button" className="btn relative p-4">
                            <MdEmail className='bg-gray-300 p-2 rounded-full  text-4xl' />
                            <span className="absolute right-1 top-1 rounded-full px-2 py-0 text-center text-white text-sm font-semibold" style={{ backgroundColor: "#ff7519" }}>99</span>
                        </button>
                    </div> */}


                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Nav;