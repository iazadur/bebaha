import React from 'react';
import Asidebar from '../Asidebar/Asidebar';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import 'antd/dist/antd.css';

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <div style={{backgroundColor:"#F2F3F7"}}>
            <div className="container mx-auto">
                <div className="grid grid-cols-7 gap-4">
                    <div className="col-span-2"><Asidebar /></div>
                    <div className="col-span-5">
                        <main>{children}</main>
                    </div>

                </div>
            </div>
            </div>
            <Footer />
        </>
    );
};

export default Layout;