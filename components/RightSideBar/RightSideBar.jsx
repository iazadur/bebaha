import Image from 'next/image';
import React from 'react';

const RightSideBar = () => {
    return (
        <>
            <div className="pt-2">
                <Image src="/img/skrill.jpeg" alt="" width="275" height={"275"} />
            </div>
            <div className="my-2">
               <h3 className='text-lg text-gray-500 font-semibold'> Chat or Send Message</h3>
                <hr />

                <form >
                    <div className="relative text-gray-600 focus-within:text-gray-400 my-2">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </button>
                        </span>
                        <input type="search" name="q" className="py-2 text-sm text-white bg-gray-200 rounded-lg pl-10 focus:outline-none focus:bg-white focus:text-gray-700 w-full" placeholder="Search ID Name" />
                    </div>
                </form>

                <div className="flex gap-x-3">

                    {Array.from({ length: 4 }).map((_, idx) => (
                        <div className="flex flex-col gap-x-2 justify-center items-center" key={idx}>
                            <div className="">
                                <Image className='rounded-full' src="/img/azad.jpg" alt="" width="50" height={"50"} />
                            </div>
                            <p>{"iazadur"}</p>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            <div className="my-4">

                {Array.from({ length: 10 }).map((_, idx) => (
                    <div className="flex gap-x-6 gap-y-4 justify-center items-center" key={idx}>
                        <div className="">
                            <Image className='rounded-full' src="/img/azad.jpg" alt="" width="50" height={"50"} />
                        </div>
                        <div className="flex flex-col justify-center ">
                            <h6 className='text-normal text-gray-500 font-semibold'>Pinu Shabnur Nahar</h6>
                            <p className='text-normal text-gray-600'> {"You sent a photo. 10:34 PM"}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default RightSideBar;