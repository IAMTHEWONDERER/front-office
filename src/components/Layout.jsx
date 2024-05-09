import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './HeaderMain';
import Routers from '../routes/Routes';
import FooterGlobal from './Footer';

const Layout = ({ children }) => {
    const location = useLocation();
    const isNotFoundPage = location.pathname === '*';

    return (
        <div className="relative">
            {/* Sticky container */}
            <div className="sticky top-0 z-20">
                {/* Absolute container */}
                <div className="absolute w-full z-20">
                    {!isNotFoundPage && <Header />}
                </div>
            </div>
            <main>{children}</main>
            <Routers />
            {!isNotFoundPage && (
                <div className='mt-auto'>
                    <FooterGlobal />
                </div>
            )}
        </div>
    );
};

export default Layout;
