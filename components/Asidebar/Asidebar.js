import Link from 'next/link';
import React, { useState } from 'react';
import { GrFormDown } from 'react-icons/gr'

const Asidebar = () => {
    const [sort, setSort] = useState(true)
    const [cat, setCat] = useState(true)
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

            {cat &&  <div className="">
                <ul>
                    <li>Electronics</li>
                    <li>Mobiles</li>
                    <li>Home and Living
                        <ul className='pl-8 list-disc'>
                            <li>Vehicles</li>
                            <li>Property</li>
                            <li>Pets & Animals</li>
                            <li>Fashion & Beauty</li>
                            <li>Hobbies, Sports & Kids</li>
                        </ul>
                    </li>
                    <li>Education</li>
                    <li>Essentials</li>
                    <li>Business & Industry</li>
                    <li>Jobs</li>
                    <li>Services</li>
                    <li>Agriculture</li>
                    <li>Overseas Jobs</li>
                </ul>
            </div>}
        </>
    );
};

export default Asidebar;