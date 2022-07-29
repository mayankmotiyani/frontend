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
// import axios from 'axios';
import NotFound from '../components/pages/NotFound';
import UnityGame from '../components/pages/games/unityGame/UnityGame';


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
                    <Route path="/" exact element={<Home demo={scrollSmoothTo} />} />
                    <Route path="/blockchain/:slug" element={<Web3 demo={scrollSmoothTo} />} />
                    <Route path='/blog' element={<BlogMain demo={scrollSmoothTo} />} />
                    <Route path='/blog/demo' element={<SingleBlog demo={scrollSmoothTo} />} />
                    <Route path="/aboutUs" element={<AboutUs demo={scrollSmoothTo} />} />
                    <Route path="/contactUs" element={<ContactUs demo={scrollSmoothTo} />} />
                    <Route path="/team" element={<OurTeam demo={scrollSmoothTo} />} />
                    <Route path="/games" element={<UnityGame demo={scrollSmoothTo} />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default Index