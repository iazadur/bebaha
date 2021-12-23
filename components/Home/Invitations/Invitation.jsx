import React from 'react';
import Image from 'next/image'

import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';



const Invitation = () => {
    return (
        <>
            <div className="shadow-lg bg-white rounded-xl w-60" >
                <Image src="/img/azad.jpg" width="240" height="240" className=' rounded-t-xl' alt='' />
                <div className="my-1">
                    <h4 className='font-semibold text-lg text-center text-gray-600'>Md Azadur</h4>
                    <p className='font-semibold text-sm text-center text-gray-400'>{"22 yr's, 5`7``, Dhaka, Unmmared"}</p>
                </div>

                <div className="flex justify-center gap-x-2 items-center py-2">
                    <div className="flex flex-col gap-x-2 justify-center items-center text-gray-400 hover:text-red-400" key="reject">
                        <div className="rounded-full border-2 p-2   hover:border-red-500 border-gray-400 ">
                            <AiOutlineClose className="text-3xl font-extrabold" />
                        </div>
                        <p>Decline</p>
                    </div>
                    <div className="flex flex-col gap-x-2 justify-center items-center text-green-400  hover:text-green-600" key="reject">
                        <div className="rounded-full border-2 hover:border-green-600 border-green-500 p-2">
                            <AiOutlineCheck className="text-3xl font-extrabold" />
                        </div>
                        <p>Accept</p>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Invitation;