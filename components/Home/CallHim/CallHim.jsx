import Image from 'next/image';
import React from 'react';

const CallHim = () => {
    return (

        <div className='relative mb-28'>
            <div className="flex justify-between items-center text-sm font-normal px-3 my-2">
                <div className=""><span>You Like this Profile</span></div>

            </div>
            <div className="">
                <Image className='rounded-3xl ' src="/img/azad.jpg" alt="" height={"600"} width={"500"} />

            </div>
            <div className="bg-white shadow-lg rounded-xl px-6 pb-4 text-white w-3/4 mx-auto absolute -bottom-24 left-16">
                <div className="w-full mx-auto">
                    <div className="-mt-5 flex justify-center items-center">
                        <div className="-ml-3">
                            <Image className='rounded-3xl' src="/img/azad.jpg" alt="" height={"50"} width={"50"} />
                        </div>
                        <div className="-ml-3">
                            <Image className='rounded-3xl' src="/img/azad.jpg" alt="" height={"50"} width={"50"} />
                        </div>

                    </div>
                    <div className="text-center">
                        <h4 className='text-lg font-semibold '>{"Md Azadur Rahman"}</h4>
                        <h2>Why wait? Call him</h2>
                        <p className='text-black text-sm'>Directly on +88019xxxxxx Upgrade to see this Number</p>
                        <p className='w-full rounded-md bg-red-500 py-1 font-semibold text-center text-base'>Upgrade Now</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallHim;