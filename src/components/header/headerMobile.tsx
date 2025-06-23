import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { Sheet, SheetContent, SheetTrigger, } from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'

const MobileHeader = () => {

    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    const openHandler = () => setOpen(!open)
    const linkStyle = 'flex items-center justify-start gap-x-[10px] w-full h-[40px] px-[15px] rounded-md uppercase text-[0.9rem]'

    return (
        <header className="md:hidden flex items-center w-full h-[90px] z-20 gap-4">
            <div className="flex flex-1 justify-start items-center w-full h-[77px]">
                <Link href='/' className="flex items-center justify-center">
                    <Image src={'/logo.svg'} priority className="w-fit max-w-[200px] h-[45px]" width={103} height={54} alt="logo" />
                </Link>
            </div>

            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant='outline' size='icon' className="md:hidden hover:text-white hover:bg-[#003A6D]">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>

                <SheetContent side="right" className="sm:max-w-xs px-[15px] flex flex-col justify-between">
                    <div className="flex pt-2 mt-2">
                        <Link href='/' className="flex items-center justify-start  w-fit">
                            <Image src={'/logo.svg'} priority className="w-fit max-w-[200px] h-[45px]" width={103} height={54} alt="logo" />
                        </Link>
                    </div>

                    <nav className="flex flex-col h-full gap-1 text-lg font-medium py-4  border-t border-gray-50">
                        <Link onClick={openHandler} href="#for-suppliers" className={`${pathname.endsWith("#feature") ? 'border text-primary' : 'text-dark-300'} ${linkStyle}`}>
                            For Suppliers
                        </Link>
                        <Link onClick={openHandler} href="#for-customers" className={`${(pathname.endsWith("#specifications")) ? 'border text-primary' : 'text-dark-300'} ${linkStyle}`}>
                            For Customers
                        </Link>
                        <Link onClick={openHandler} href="#contact" className={`${pathname.endsWith("#contact") ? 'border text-primary' : 'text-dark-300'} ${linkStyle}`}>
                            Contact
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    )
}

export default MobileHeader
