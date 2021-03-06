import Image from 'next/image';
import React from 'react';
import AddUser from './AddUser';

const AddUsers = () => {
    return (
        <div className='w-full p-2 rounded-lg shadow-md bg-white my-3'>
           
                <div className="flex justify-between items-center px-3 my-2">
                    <div className=""><span className='flex items-center gap-x-2'><Image src="/img/invite.png" alt="" width="16" height={"16"} />Say Hi, Free</span></div>
                    
                </div>
                <div className="px-2 flex gap-x-4">

                    {Array.from({ length: 2 }).map((_, idx) => (<AddUser key={idx} />))}
                </div>
            </div>
            );
};

            export default AddUsers;