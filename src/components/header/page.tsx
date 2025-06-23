"use client"
import { useState, useEffect, } from "react"
import Link from "next/link"
import Image from "next/image"

import MobileHeader from "./headerMobile"

const Header = () => {

    const [isMobile, setIsMobile] = useState(false)
    // const [prevScrollpos, setPrevScrollpos] = useState(0)
    // const [scrollTimeout, setScrollTimeout] = useState<number | null>(null)

    // const handleScroll = () => {
    //     const currentScrollPos = window.scrollY;
    //     const navbar = document.getElementById("navbar")

    //     if (navbar) {
    //         if (currentScrollPos > prevScrollpos && currentScrollPos > 50) {
    //             navbar.style.top = "-90px"
    //         } else {
    //             navbar.style.top = "-90px"
    //         }
    //     }

    //     setPrevScrollpos(currentScrollPos)
    //     if (scrollTimeout) clearTimeout(scrollTimeout)

    //     // When scroll stop
    //     setScrollTimeout(
    //         setTimeout(() => {
    //             const navbar = document.getElementById("navbar")
    //             if (navbar) {
    //                 navbar.style.transition = `all 0.5s ease-in-out`
    //                 navbar.style.top = "0"
    //             }
    //         }, 100) as unknown as number
    //     )
    // }

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768)

        handleResize()
        // window.addEventListener("resize", handleResize)
        // window.addEventListener("scroll", handleScroll)

        return () => {
            // window.removeEventListener("resize", handleResize)
            // window.removeEventListener("scroll", handleScroll)

            // if (scrollTimeout) clearTimeout(scrollTimeout)
        }
    }, [])
    const style = `h-[50px] p-2 text-nowrap no-underline font-inter font-[500] text-[16px] lg:text-[20px] leading-[100%] tracking-[0%] text-[#000]`

    return (
        <header id="navbar" className={`bg-white flex absolute top-[33px] md:top-[43px] left-[30px] right-[30px] md:left-[54px] md:right-[54px] z-[30] h-[70px] md:h-[100px] rounded-[51px]`}>
            <div className="flex justify-between items-center w-full h-[70px] md:h-[100px] px-[30px] lg:px-[105px] mx-auto">

                {isMobile
                    ? <MobileHeader />
                    : <div className="hidden md:flex justify-between flex-1">
                        <Link href="/" className="flex items-center">
                            <Image src={'/logo.svg'} priority={false} className="w-auto h-auto" width={104} height={54} alt="Veritas Nova Inc. logo" />
                        </Link>

                        <nav className="flex items-center gap-x-[10px] lg:gap-x-[20px]">
                            <Link href="#for-suppliers" className={`flex items-center ${style}`}>
                                For Suppliers
                            </Link>
                            <Link href="#for-customers" className={`flex items-center ${style}`}>
                                For Customers
                            </Link>
                            <Link href="#contact" className={`flex items-center ${style}`}>
                                Contact
                            </Link>
                        </nav>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header
