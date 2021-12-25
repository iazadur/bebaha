import Link from 'next/link';
import React, { useState } from 'react';
import { GrFormDown } from 'react-icons/gr'
import { Badge } from 'antd';
import { HomeFilled, UsergroupAddOutlined, SearchOutlined, SendOutlined } from '@ant-design/icons';

const Asidebar = () => {
    const [sort, setSort] = useState(true)
    const [cat, setCat] = useState(true)
    const [location, setLocation] = useState(true)
    const [inbox, setInbox] = useState(true)
    const [home, setHome] = useState(false)
    const [user, setUser] = useState(false)
    const [search, setSearch] = useState(false)
    const [more, setMore] = useState(false)
    return (
        <>
            <div className="fixed top-8 w-52 ">
                <div className="overflow-y-scroll h-screen">


                    <div className="flex flex-col pt-12 text-red-400  font-bold">
                        {/* <AiFillHeart /> */}
                        <Link href="#">❤️ Premium Product</Link>
                        <Link href='/'>❤️ For You</Link>
                    </div>


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


                    {/* Sorting section */}

                    {/* <div className="flex justify-between pt-3" onClick={() => setSort(!sort)}>
                    <span className="font-semibold">Sorting</span> <span><GrFormDown /></span>
                </div>
                {sort && <form className='py-2'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="vehicle1" className='pl-2'>Urgent</label><br />
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="vehicle1" className='pl-2'>Cheap Rate</label><br />
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="vehicle1" className='pl-2'>Home Delivery</label><br />
                    <label htmlFor="vehicle1" className='pl-5'>see more</label><br />
                </form>} */}




                    {/* // Categories section*/}

                    {/* <div className="flex justify-between pt-3" onClick={() => setCat(!cat)}>
                <span className="font-semibold">All Categories</span> <span><GrFormDown /></span>
            </div>


         

            {cat && <div className="py-1">
                <ul>
                    <li className=' text-sky-500 hover:text-indigo-500  font-medium cursor-pointer'>Electronics</li>
                    <li className=' text-sky-500 hover:text-indigo-500  font-medium cursor-pointer'>Mobiles</li>
                    <li className=' text-sky-500 hover:text-indigo-500  font-medium cursor-pointer'>Home and Living
                        <ul className='pl-8 list-disc'>
                            <li className=' text-sky-500 hover:text-indigo-500  font-medium cursor-pointer'>Vehicles</li>
                            <li className=' text-sky-500 hover:text-indigo-500  font-medium cursor-pointer'>Property</li>
                            <li className=' text-sky-500 hover:text-indigo-500  font-medium cursor-pointer'>Pets & Animals</li>
                            <li className=' text-sky-500 hover:text-indigo-500  font-medium cursor-pointer'>Fashion & Beauty</li>
                            <li className=' text-sky-500 hover:text-indigo-500  font-medium cursor-pointer'>Hobbies, Sports & Kids</li>
                        </ul>
                    </li>
                    <li className=' text-sky-500 hover:text-indigo-500  font-medium cursor-pointer'>Education</li>
                    <li className=' text-sky-500 hover:text-indigo-500  font-medium cursor-pointer'>Essentials</li>
                    <li className=' text-sky-500 hover:text-indigo-500  font-medium cursor-pointer'>Business & Industry</li>
                    <li className=' text-sky-500 hover:text-indigo-500  font-medium cursor-pointer'>Jobs</li>
                    <li className=' text-sky-500 hover:text-indigo-500  font-medium cursor-pointer'>Services</li>
                    <li className=' text-sky-500 hover:text-indigo-500  font-medium cursor-pointer'>Agriculture</li>
                    <li className=' text-sky-500 hover:text-indigo-500  font-medium cursor-pointer'>Overseas Jobs</li>
                </ul>
            </div>} */}



                    {/* Location  */}
                    <div className="flex justify-between pt-3" onClick={() => setLocation(!location)}>
                        <span className="font-semibold">Location</span> <span><GrFormDown /></span>
                    </div>
                    {location && <div className="py-1 px-2">
                        <ul>
                            <li className=' text-sky-500 hover:text-indigo-500  font-medium cursor-pointer'>Urgent</li>
                            <li className=' text-sky-500 hover:text-indigo-500  font-medium cursor-pointer'>Cheap Rate</li>
                            <li className=' text-sky-500 hover:text-indigo-500  font-medium cursor-pointer'>Home Delivery</li>
                        </ul>
                    </div>}
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