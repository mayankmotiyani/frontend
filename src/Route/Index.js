import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Home from '../components/pages/landingPages/Home';
import Web3 from '../components/pages/blockchain/web3/Web3';
import BlogMain from '../components/pages/blog/BlogMain';
import SingleBlog from '../components/pages/blog/SingleBlog';
import AboutUs from '../components/pages/aboutUs/AboutUs';
import ContactUs from '../components/pages/contactUs/ContactUs';
import OurTeam from '../components/pages/ourTeam/OurTeam';
import NotFound from '../components/pages/NotFound';
import UnityGame from '../components/pages/games/unityGame/UnityGame';
import Main_nft from '../components/pages/NFT/main_nft';

import ProductWeb from '../components/pages/product/productWeb/ProductWeb';
import Resources from '../components/pages/resources/Resources';

import ProductPage from '../components/pages/product/singleProduct/ProductPage';
import Privacy from '../components/pages/PrivacyPolicy/privacy';
import TermCondition from '../components/pages/Term_and_condition/TermCondition';
import Career from '../components/pages/career/Career';
import CareerApply from '../components/pages/career/CareerApply';
import SiteMap from '../components/pages/SiteMap';
const Index = () => {
    // ===================================== For Route API ============================================
    useEffect(() => {
        scrollSmoothTo('top')
    }, [])
    // ===================================== For Route API ============================================

    function scrollSmoothTo(elementId) {
        var element = document.getElementById(elementId);
        element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }


    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home demo={scrollSmoothTo} />} />
                    <Route path="/blockchain/:slug" element={<Web3 demo={scrollSmoothTo} />} />
                    <Route path='/blog' element={<BlogMain demo={scrollSmoothTo} />} />
                    <Route path='/blog/:blog_slug' element={<SingleBlog demo={scrollSmoothTo} />} />
                    <Route path="/aboutUs" element={<AboutUs demo={scrollSmoothTo} />} />
                    <Route path="/contactUs" element={<ContactUs demo={scrollSmoothTo} />} />
                    {/* <Route path="/team" element={<OurTeam demo={scrollSmoothTo} />} /> */}
                    <Route path="/game/:game_slug" element={<UnityGame demo={scrollSmoothTo} />} />
                    <Route path="/nft/:nft_slug" element={<Main_nft demo={scrollSmoothTo} />} />
                    <Route path="/products" element={<ProductWeb demo={scrollSmoothTo} />} />
                    <Route path="/resource/:res_slug" element={<Resources demo={scrollSmoothTo} />} />
                    <Route path="/career" element={<Career demo={scrollSmoothTo} />} />
                    <Route path="/career/:apl_slug" element={<CareerApply demo={scrollSmoothTo} />} />
                    <Route path='/product/:product_slug' element={<ProductPage demo={scrollSmoothTo}/>}/>
                    <Route path='/privacy' element={<Privacy demo={scrollSmoothTo}/>}/>
                    <Route path='/term_and_condition' element={<TermCondition demo={scrollSmoothTo}/>}/>
                    <Route path='/siteMap' element={<SiteMap demo={scrollSmoothTo}/>}/>
                    <Route path='*' element={<NotFound demo={scrollSmoothTo} />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default Index