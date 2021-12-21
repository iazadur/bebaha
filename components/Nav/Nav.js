import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import logo from '/img/logo.png'
import { MdEmail } from 'react-icons/md'
import { AiFillCaretDown } from 'react-icons/ai'
import Styles from '../../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className='border-b-violet-500'>
            <div className="container mx-auto flex justify-between">
                <div className="flex">
                    <Image src="/img/logo.png" width="132px" height="29px" alt='' />
                </div>
                <div className="flex text-2xl font-bold text-gray-400 gap-x-2 justify-center items-center">
                    <Link href='/'>All Ads</Link>
                    <Link href='/'>Loan</Link>
                    <Link href='/'>Offer</Link>
                    <Link href='/'>Bid</Link>

                </div>
                <div className="flex justify-center items-center">
                    <div className="">
                        <div className=''><span className="bg-gray-300 p-2 text-sm rounded-full">EN</span></div>
                    </div>
                    <div className="">
                        <button type="button" className="btn relative p-4">
                            <MdEmail className='bg-gray-300 p-2 rounded-full  text-4xl' />
                            <span className="absolute right-1 top-1 rounded-full px-2 py-0 text-center text-white text-sm font-semibold" style={{ backgroundColor: "#ff7519" }}>99</span>
                        </button>
                    </div>
                    <div className="">
                        <p style={{ backgroundColor: "#ff7519" }} className='rounded-full text-sm font-semibold text-white px-2 py-1'>POST AD</p>
                    </div>

                    <div className=" px-2">
                        <div className=''><AiFillCaretDown className="bg-gray-300 p-2 rounded-full text-3xl" /></div>
                    </div>

                </div>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-7 gap-4 py-3">
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