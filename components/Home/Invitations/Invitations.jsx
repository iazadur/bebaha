import { Badge } from 'antd';
import Image from 'next/image';
import React from 'react';
import Invitation from './Invitation';


const Invitations = () => {
    return (
        <>
            <div className="flex justify-between items-center py-1 px-2 md:px-1">
                <div className="my-2"><span className='text-md flex items-center gap-x-2'><Image src="/img/invite.png" alt="" width="16" height={"16"} />Invitation <Badge count="677" className='' /></span></div>
                <div className="flex gap-x-3">
                    <span className="text-indigo-500 cursor-pointer">Accept All invitation</span> |
                    <span className="text-indigo-500 cursor-pointer">View All</span>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-2 grid-cols-1 gap-y-4 ">
                {Array.from({ length: 2 }).map((_, idx) => (<Invitation key={idx} />))}
            </div>
        </>
    );
};

export default Invitations;


