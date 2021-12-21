import React from 'react';
import Asidebar from '../Asidebar/Asidebar';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <div className="container mx-auto">
                <div className="grid grid-cols-7 gap-4">
                    <div className="col-span-2"><Asidebar /></div>
                    <div className="col-span-5">
                        <main>{children}</main>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Layout;