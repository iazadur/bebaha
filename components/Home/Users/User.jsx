import React from 'react';
import { ArrowDownOutlined, CheckOutlined, MessageOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';


const User = () => {
    return (
        // <div className='bg-cover bg-center w-full rounded-3xl relative' style={{ backgroundImage: `url("/img/azad.jpg")`, height: "550px", width: "445px" , backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className='bg-cover bg-center rounded-3xl relative mx-2' style={{ backgroundImage: `url("/img/azad.jpg")`, height: "550px", width: "auto", backgroundSize: "cover", backgroundPosition: "center", maxHeight: "550px", maxWidth: "445px", }}>
            <div className="top-80 absolute bg-gradient-to-b from-transparent to-gray-600 w-full pb-3 rounded-b-3xl" style={{}}>
                <div className="text-white mx-4">
                    <h3 className='leading-none font text-white font-semibold text-2xl '>Md Azadur Rahman</h3>
                    <p>{"created by self  |  id: 20394"}</p>

                    <div className="grid grid-cols-2 my-2">
                        <div className="leading-none">
                            <h3 className='font text-white font-semibold text-xl '>{"22 yrs, 5`8``"}</h3>
                            <p>{"Dhaka Bangladesh"}</p>
                            <p>{"Private Job"}</p>
                            <p>{"Muslim, Sunni"}</p>
                        </div>
                        <div className="leading-none">
                            <h3 className='font text-white font-semibold text-xl '>{"Masters in Arts"}</h3>
                            <p>{"Never Married"}</p>
                            <p>{"Lecturer"}</p>
                            <p>{"3-5 lacs income/yr, Sunni"}</p>
                        </div>
                    </div>
                    <hr />
                    <p>{"Like this? Connect"}</p>
                    <div className=" flex justify-between">
                        <div className="flex gap-x-1 text-xl ">
                            <div className="flex flex-col justify-center items-center">
                                <div className="">
                                    <CheckOutlined className='rounded-full bg-white text-gray-400 p-3 text-center hover:bg-green-400 hover:text-black' />
                                </div>
                                <p className='text-sm uppercase font-semibold mt-1'>Contact</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="">
                                    <MessageOutlined className='rounded-full bg-white text-gray-400 p-3 text-center hover:bg-green-400 hover:text-black' />
                                </div><p className='text-sm uppercase font-semibold mt-1'>chat</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="">
                                    <PhoneOutlined className='rounded-full bg-white text-gray-400 p-3 text-center hover:bg-green-400 hover:text-black' />
                                </div>
                                <p className='text-sm uppercase font-semibold mt-1'>Call</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="">
                                    <MailOutlined className='rounded-full bg-white text-gray-400 p-3 text-center hover:bg-green-400 hover:text-black' />
                                </div>
                                <p className='text-sm uppercase font-semibold mt-1'>Message</p>
                            </div>


                        </div>
                        <div className="">
                            <div className="flex flex-col justify-center items-center md:ml-5 ml-3">
                                <div className="">
                                    <ArrowDownOutlined className='rounded-full bg-white text-gray-400 p-3 text-center hover:bg-green-400 hover:text-black' />
                                </div>
                                <p className='text-sm uppercase font-semibold mt-1'>See Detail</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default User;