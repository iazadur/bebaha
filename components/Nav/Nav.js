import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import logo from '/img/logo.png'
import { MdEmail } from 'react-icons/md'
import { AiFillCaretDown } from 'react-icons/ai'
import Styles from '../../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className=''>
            <div className="border border-b-gray-400 py-2">
                <div className="container mx-auto flex justify-between">
                    <div className="flex">
                        <Image src="/img/logo.png" width="132px" height="29px" alt='' />
                    </div>
                    {/* <div className="flex text-2xl font-bold text-gray-400 gap-x-2 justify-center items-center">
                    <Link href='/'>All Ads</Link>
                    <Link href='/'>Loan</Link>
                    <Link href='/'>Offer</Link>
                    <Link href='/'>Bid</Link>

                </div> */}
                    <div className="flex justify-center items-center gap-2">
                        <div className="">
                            <MdEmail className='bg-gray-300 rounded-full p-2 text-4xl' />
                        </div>
                        <div className="">
                            <MdEmail className='bg-gray-300 rounded-full p-2 text-4xl' />
                        </div>
                        <div className="">
                            <MdEmail className='bg-gray-300 rounded-full p-2 text-4xl' />
                        </div>
                        <div className="">
                            <MdEmail className='bg-gray-300 rounded-full p-2 text-4xl' />
                        </div>
                        <div className="">
                            <MdEmail className='bg-gray-300 rounded-full p-2 text-4xl' />
                        </div>
                        {/* <div className="">
                        <button type="button" className="btn relative p-4">
                            <MdEmail className='bg-gray-300 p-2 rounded-full  text-4xl' />
                            <span className="absolute right-1 top-1 rounded-full px-2 py-0 text-center text-white text-sm font-semibold" style={{ backgroundColor: "#ff7519" }}>99</span>
                        </button>
                    </div> */}


                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-7 gap-4 py-1">
                    <div className="col-span-2"></div>
                    <div className="col-span-5 flex gap-2">
                        <p className='rounded-lg bg-gray-300 py-1 px-2'>New Match (445)</p>
                        <p className="rounded-lg bg-gray-300 py-1 px-2">All (978)</p>

                        <p className="rounded-lg bg-gray-300 py-1 px-2">My Match (190</p>

                        <p className="rounded-lg bg-gray-300 py-1 px-2">Near Me (458)</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;