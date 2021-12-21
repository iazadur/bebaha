import Image from 'next/image';
import React from 'react';

const SinglePreference = () => {
    return (
        <div className='flex items-center justify-start gap-4 my-2'>
            <div className="">
            <Image src="/img/azad.jpg" className='rounded-full' width="80" height="80" alt='' />
            </div>
            <div className="flex flex-col">
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                
            </div>
        </div>
    );
};

export default SinglePreference;