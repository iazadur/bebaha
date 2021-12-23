import Image from 'next/image';
import React from 'react';
import SinglePreference from './SinglePreference';

const Preference = () => {
    return (
        <>
            <div className="p-2 rounded-lg shadow-md bg-white my-3">
                <div className="flex justify-between items-center px-2">
                    <div className=""><span className='flex items-center gap-x-2'><Image src="/img/invite.png" alt="" width="16" height={"16"} />Post Your Preference</span></div>
                    <div className=""><span className='rounded-2xl border border-gray-600 text-pink-600 px-2 '>Add Your Post</span></div>
                </div>

                <div className="px-3">

                    {Array.from({ length: 2 }).map((_, idx) => (<SinglePreference key={idx} />))}
                </div>
            </div>

        </>
    );
};

export default Preference;