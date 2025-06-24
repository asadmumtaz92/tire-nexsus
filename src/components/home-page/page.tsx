import React from 'react'

import HeroSection from './hero-section/page'
import WhyChooseTireNexsus from './why-choose-tirenexsus/page'
import WhyChooseCustomer from './why-choose-customer/page'
import GuidedShopping from './guided-shopping/page'
import Contact from './contact-section/page'

const HomePage = () => {

    return (
        <>
            <HeroSection />
            <WhyChooseTireNexsus />
            <WhyChooseCustomer />
            <GuidedShopping />
            <Contact />
        </>
    )
}

export default HomePage
