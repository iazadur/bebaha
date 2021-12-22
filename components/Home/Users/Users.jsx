import React from 'react';
import User from './User';

const Users = () => {
    return (
        <>
            <div className="my-3">
                <div className="flex justify-between items-center px-3">
                    <div className=""><span>Top 200 profiles</span></div>
                    
                </div>

                <div className="md:px-0 mx-2 grid grid-cols-1 my-2 gap-x-2 gap-y-2 ">

                    {Array.from({ length: 1 }).map((_, idx) => (<User key={idx} />))}
                </div>
            </div>

        </>
    );
};

export default Users;