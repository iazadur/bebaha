import React from 'react';
import Asidebar from '../Asidebar/Asidebar';
import Nav from '../Nav/Nav';
import 'antd/dist/antd.css';
import RightSideBar from '../RightSideBar/RightSideBar';
import Image from 'next/image';

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <div style={{ backgroundColor: "#F2F3F7" }} className='mt-14'>
                <div className="container mx-auto py-2">
                    <div className="flex gap-x-10">
                        <div style={{ width: "220px" }} className="md:block hidden relative"><Asidebar /></div>
                        <div style={{ maxWidth: "500px" }} className="w-full"> <main>{children}</main> </div>
                        <div style={{ width: "275px" }} className="md:block hidden relative"><RightSideBar /></div>
                    </div>
                </div>
            </div>
            
                <div className="fixed bottom-0 left-0">
                    <Image className='' width="80" src="/img/top.png" height="50" alt="" />
                </div>
           
        </>
    );
};

export default Layout;