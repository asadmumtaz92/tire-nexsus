import React from 'react'
import Image from 'next/image'

const HeroSection = () => {

    return (
        <div className="relative min-h-[95vh] md:min-h-screen w-full overflow-hidden py-10">
            <div className='px-[15px] lg:px-[34px]'>
                <Image
                    src="/bg/hero-section.svg" priority
                    layout="fill" objectFit="cover" alt="Car Background image"
                    className="z-0 sm:object-top mt-5 mx-auto w-full max-w-[calc(100vw-30px)] md:max-w-[calc(100vw-68px)] max-h-[calc(95%))] rounded-[37px] md:rounded-[57px]"
                />

                <div className="absolute z-20 bottom-28 lg:bottom-[140px] left-16 lg:left-[170px] sm:max-w-2xl lg:max-w-5xl">
                    <h1 className="text-white text-[50px] md:text-[77.42px] leading-[91.7px] font-[700] font-jost leading-tight ease-in-out duration-500">
                        Expand Your Tire Business <br />
                        with <span className="text-[#3076B2]">TireNexus</span>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
