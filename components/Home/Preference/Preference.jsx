import React from 'react';
import SinglePreference from './SinglePreference';

const Preference = () => {
    return (
        <>
            <div className="p-2 rounded-lg shadow-md bg-white my-3">
                <div className="flex justify-between items-center px-3">
                    <div className=""><span>Post Your Preference</span></div>
                    <div className=""><span className='rounded-2xl border border-gray-600 text-pink-600 px-2 '>Add Your Post</span></div>
                </div>


                {Array.from({ length: 4 }).map((_, idx) => (<SinglePreference key={idx} />))}
            </div>

        </>
    );
};

export default Preference;