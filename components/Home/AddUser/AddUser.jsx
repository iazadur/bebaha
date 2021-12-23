import Image from 'next/image';
import React from 'react';
import {CloseOutlined} from '@ant-design/icons'

const AddUser = () => {
    return (
        <>
            <div className="flex flex-col w-60 relative">
                <div className="">
                    <Image className='rounded-3xl' src="/img/azad.jpg" alt="" height={"300"} width={"240"}/>
                </div>
                <div className="text-center">
                    <h4 className='text-lg font-semibold '>{"Md Azadur Rahman"}</h4>
                    <p className='text-gray-400'>{"22 yrs 5`8`` Dhaka Unmarred"}</p>
                </div>
                <div className="text-center">
                    <button className='bg-blue-100 py-1 px-14 font-bold my-3 rounded-lg text-cyan-600 text-lg'>Say Hi</button>
                </div>
                <CloseOutlined className='absolute right-4 top-4 font-extrabold text-white p-2 rounded-full p-e bg-slate-500' />
            </div>
        </>
    );
};

export default AddUser;