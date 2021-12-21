import Link from 'next/link';
import React, { useState } from 'react';
import { GrFormDown } from 'react-icons/gr'

const Asidebar = () => {
    const [sort, setSort] = useState(true)
    const [cat, setCat] = useState(true)
    const [location, setLocation] = useState(true)
    const [more, setMore] = useState(false)
    return (
        <>
            <div className="flex flex-col pt-12 text-red-400  font-bold">
                {/* <AiFillHeart /> */}
                <Link href="#">❤️ Premium Product</Link>
                <Link href='/'>❤️ For You</Link>
            </div>
            <div className="flex justify-between pt-3" onClick={() => setSort(!sort)}>
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
            </form>}

            <div className="flex justify-between pt-3" onClick={() => setCat(!cat)}>
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
            </div>}

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
                <ul className='flex gap-x-8 gap-y-1 my-2 text-gray-400 font-normal flex-wrap text-sm'>
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
        </>
    );
};

export default Asidebar;