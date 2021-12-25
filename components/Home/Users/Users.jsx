import React from 'react';
import User from './User';

const Users = () => {
    return (
        <>
            <div className="my-3">
                <div className="flex justify-between items-center px-4">
                    <div className=""><span>Top 200 profiles</span></div>
                    
                </div>

                <div className="md:px-4 ">

                    {Array.from({ length: 1 }).map((_, idx) => (<User key={idx} />))}
                </div>
            </div>

        </>
    );
};

export default Users;