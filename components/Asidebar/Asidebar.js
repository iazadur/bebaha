import Link from 'next/link';
import React, { useState } from 'react';
import { GrFormDown } from 'react-icons/gr'
import { Badge } from 'antd';
import { HomeFilled, UsergroupAddOutlined, SearchOutlined, SendOutlined } from '@ant-design/icons';
import { MdOutlineVerified } from 'react-icons/md';
import Image from 'next/image';

const Asidebar = () => {
    const [sort, setSort] = useState(true)
    const [invite, setInvite] = useState(true)
    const [febouritr, setFebouritr] = useState(true)
    const [inbox, setInbox] = useState(true)
    const [home, setHome] = useState(false)
    const [user, setUser] = useState(false)
    const [search, setSearch] = useState(false)
    const [more, setMore] = useState(false)
    return (
        <>
            <div className="fixed top-16 w-60 ">
                <div className="overflow-y-scroll h-screen">





                    <div className="flex justify-between items-center pt-3 hover:text-red-500" onClick={() => setInbox(!inbox)}>
                        <div className="flex items-start gap-x-2">
                            <SendOutlined className='text-xl ' />
                            <div className=" indicator">
                                <Badge count="677" className='indicator-item' />
                                <p className="capitalize text-xl font-medium pb-1">inbox</p>
                            </div>
                        </div>
                        <span><GrFormDown /></span>
                    </div>
                    {inbox && <ul className='ml-8 list-disc'>
                        <li>Invitation(67)</li>
                        <li>Message(56)</li>
                        <li>Accept(34)</li>
                        <li>Sent(23)</li>
                        <li>Delete(4)</li>
                    </ul>
                    }

                    <div className="flex justify-between items-center pt-3 hover:text-red-500" onClick={() => setHome(!home)}>
                        <div className="flex items-start  gap-x-2">
                            <HomeFilled className='text-xl -mt-1' />

                            <p className="capitalize text-xl font-medium pb-1">For You</p>

                        </div>
                        <span><GrFormDown /></span>
                    </div>
                    {home && <ul className='ml-8 list-disc'>
                        <li>Invitation(67)</li>
                        <li>Message(56)</li>
                        <li>Accept(34)</li>
                        <li>Sent(23)</li>
                        <li>Delete(4)</li>
                    </ul>
                    }

                    <div className="flex justify-between items-center pt-3 hover:text-red-500" onClick={() => setUser(!user)}>
                        <div className="flex items-start gap-x-2">
                            <UsergroupAddOutlined className='text-xl -mt-1' />

                            <p className="capitalize text-xl font-medium pb-1">Invite</p>

                        </div>
                        <span><GrFormDown /></span>
                    </div>
                    {user && <ul className='ml-8 list-disc'>
                        <li>Invitation(67)</li>
                        <li>Message(56)</li>
                        <li>Accept(34)</li>
                        <li>Sent(23)</li>
                        <li>Delete(4)</li>
                    </ul>
                    }

                    <div className="flex justify-between items-center pt-3 hover:text-red-500" onClick={() => setSearch(!search)}>
                        <div className="flex items-center gap-x-2">
                            <SearchOutlined className='text-xl -mt-1' />

                            <p className="capitalize text-xl font-medium pb-1">Search</p>

                        </div>
                        <span><GrFormDown /></span>
                    </div>
                    {search && <ul className='ml-8 list-disc'>
                        <li>Invitation(67)</li>
                        <li>Message(56)</li>
                        <li>Accept(34)</li>
                        <li>Sent(23)</li>
                        <li>Delete(4)</li>
                    </ul>
                    }

                    <hr className='my-5' />

                    {/* My Febouritr List */}

                    <div className="flex justify-between items-center  hover:text-red-500" onClick={() => setFebouritr(!febouritr)}>
                        <div className="flex items-center">
                            <p className="capitalize text-black font-normal pb-1">My Febouritr List</p>
                        </div>
                        <span><GrFormDown /></span>
                    </div>

                    {febouritr &&
                        Array.from({ length: 5 }).map((_, idx) =>

                            <div className="flex gap-x-2" key={idx}>
                                <div className="">
                                    <Image src="/img/azad.jpg" className='rounded-full ' alt="" width="50" height="50" />
                                </div>
                                <div className="my-1">
                                    <h4 className='font-semibold text-gray-500 flex'>Md Azadur Rahman<span className='ml-0'><MdOutlineVerified className=' text-sky-600 text-lg -mt-1' /></span></h4>
                                    <p className='text-xs'>{"id:123434"}</p>
                                </div>
                            </div>

                        )
                    }
                    {/* People invite you */}
                    <div className="flex justify-between items-center pt-3 hover:text-red-500" onClick={() => setInvite(!invite)}>
                        <div className="flex items-center">
                            <p className="capitalize text-black font-normal pb-1">People invite you</p>
                        </div>
                        <span><GrFormDown /></span>
                    </div>

                    {invite &&
                        Array.from({ length: 5 }).map((_, idx) =>

                            <div className="flex gap-x-2" key={idx}>
                                <div className="">
                                    <Image src="/img/azad.jpg" className='rounded-full ' alt="" width="50" height="50" />
                                </div>
                                <div className="my-1">
                                    <h4 className='font-semibold text-gray-500 flex'>Md Azadur Rahman<span className='ml-0'><MdOutlineVerified className=' text-sky-600 text-lg -mt-1' /></span></h4>
                                    <p className='text-xs'>{"iazadur"}</p>
                                </div>
                            </div>

                        )
                    }






                    <hr className='my-5' />






                    <ul className='flex gap-5 text-gray-400 font-normal flex-wrap text-sm'>
                        <li className=''>Privacy</li>
                        <li>Terms</li>
                        <li>Promote</li>
                        <li onClick={() => setMore(!more)} className='font-medium'>More</li>
                    </ul>

                    {more && <>
                        <ul className='flex gap-x-8 gap-y-1 my-2 text-gray-400 font-normal flex-wrap text-sm' style={{ width: "200px" }}>
                            <li>App</li>
                            <li>Add to home Screen</li>
                            <li>Follow Facebook</li>
                            <li>Youtube</li>
                            <li>Helpline</li>
                            <li>HelpChat</li>
                            <li>Blog</li>
                            <li>Tips & Tricks</li>
                            <li>About Us</li>
                        </ul>
                    </>}


                </div>
            </div>
        </>
    );
};

export default Asidebar;