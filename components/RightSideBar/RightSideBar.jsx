import Image from 'next/image';
import React from 'react';

const RightSideBar = () => {
    return (
        <>
            <div className="pt-2">
                <Image src="/img/skrill.jpeg" alt="" width="275" height={"275"} />
            </div>
            <div className="">
                Chat or Send Message
                <hr />
                <input type="text" />
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
                <hr />
            </div>
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