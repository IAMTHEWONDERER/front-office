import Header from './HeaderMain';
import Routers from '../routes/Routes';
import FooterGlobal from './Footer';

const Layout = ({ children }) => {
    return (
             <div className="relative">
            {/* Sticky container */}
            <div className="sticky top-0 z-20">
                {/* Absolute container */}
                <div className="absolute w-full z-20">
                    <Header />
                </div>
            </div>
           <main>
               {children}
           </main>
           <Routers />
           <div className='mt-auto'>
           <FooterGlobal />
           </div>
        </div>
    );
}

export default Layout;