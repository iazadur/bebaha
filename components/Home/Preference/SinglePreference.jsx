import Image from 'next/image';
import React from 'react';

const SinglePreference = () => {
    return (
        <div className='flex items-center justify-start gap-4 my-2'>
            <div className="">
            <Image src="/img/azad.jpg" className='rounded-full' width="100" height="100" alt='' />
            </div>
            <div className="flex flex-col">
                <p>Md Azadur Rahman</p>
                <p>{"22 yer's,5`8``, Private Job, Unmarried, Dhaka"} </p>
                <p>Seeking educated, serious</p>
                <p>tuitable lifePartner</p>
               <div className=""><span className="rounded-2xl border border-gray-500 p-0 m-0 px-2">See More</span></div>
                
            </div>
        </div>
    );
};

export default SinglePreference;