import Link from 'next/link';
import React, { useState } from 'react';
import { GrFormDown } from 'react-icons/gr'

const Asidebar = () => {
    const [sort,setSort] = useState(true)
    return (
        <>
            <div className="flex flex-col pt-12 text-red-400  font-bold">
                {/* <AiFillHeart /> */}
                <Link href="#">❤️ Premium Product</Link>
                <Link href='/'>❤️ For You</Link>
            </div>
            <div className="flex justify-between pt-3" onClick={()=>setSort(!sort)}>
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
        </>
    );
};

export default Asidebar;