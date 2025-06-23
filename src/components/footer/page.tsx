import React from 'react'
import Image from 'next/image'

const Footer = () => {

    return (
        <footer className={`mt-[88px] flex items-center justify-center w-full mx-auto btn-grad h-[272px] bg-white rounded-t-[30px]`} style={{ boxShadow: "0px 0px 29px 0px #00000026" }}>
            <div className="flex flex-col w-full px-[30px] md:px-[50px] xl:px-[80px] max-w-[1440px] mx-auto">
                <Image src={'/logo.svg'} priority={false} className="w-auto h-auto mx-auto sm:ml-0" width={130} height={60} alt="Veritas Nova Inc. logo" />
                <hr className='bg-[#AFAFAF55] h-[2px] w-full my-[46px]' />
                <p className='text-[14px] leading-[100%] xl:text-[16px] font-inter text-[#797B78] font-[500]'>
                    {`© ${new Date().getFullYear()} Tire Nexsus, All right reserved.`}
                </p>
            </div>
        </footer>
    )
}

export default Footer
