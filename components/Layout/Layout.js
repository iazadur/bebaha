import React from 'react';
import Asidebar from '../Asidebar/Asidebar';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import 'antd/dist/antd.css';
import RightSideBar from '../RightSideBar/RightSideBar';

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <div style={{ backgroundColor: "#F2F3F7" }}>
                <div className="container mx-auto py-2">
                    <div className="flex gap-x-12">
                        <div style={{ width: "200px" }} className=""><Asidebar /></div>
                        <div style={{ width: "500px" }} className=""> <main>{children}</main> </div>
                        <div style={{ width: "275px" }} className=""><RightSideBar /></div>
                    </div>


                </div>
            </div>
            <Footer />
        </>
    );
};

export default Layout;