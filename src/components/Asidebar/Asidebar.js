import Link from 'next/link';
import React from 'react';
import {AiFillHeart} from 'react-icons/ai'

const Asidebar = () => {
    return (
        <>
        <div className="">
        <AiFillHeart />
            <Link href="#"> Premium Product</Link>
            <Link href='/'> For You</Link>
        </div>
            <ul>
                <li><a href=""><span>sdf</span></a></li>
                <li><a href=""><span>asdf</span></a></li>
                <li><a href=""><span>asdf</span></a></li>
                <li><a href=""><span>asdf</span></a></li>
                <li><a href=""><span>asdf</span></a></li>
                <li><a href=""><span>asdf</span></a></li>

            </ul>
        </>
    );
};

export default Asidebar;