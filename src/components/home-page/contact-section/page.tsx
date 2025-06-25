import React, { JSX, } from 'react'
import Image from 'next/image'

import ContactForm from './form'

interface Option_Props {
    iocn: string
    title: string
    desc: string | JSX.Element
    desc2?: string | JSX.Element
}

const Contact = () => {

    const cardData: string[] = [
        'Mon - Fri: 8am - 7pm ET',
        'Sat: 9am - 5pm ET',
        'Sun: Closed',
        'We are closed for holiday New Year’s Day.',
    ]
    const options: Option_Props[] = [
        {
            iocn: '/icons/chat.svg',
            title: 'Chat',
            desc: 'Fastest option!',
        }, {
            iocn: '/icons/sms.svg',
            title: 'SMS',
            desc: '+1 (267) 0000000',
            desc2: `Terms & conditions apply.`,
        }, {
            iocn: '/icons/phone.svg',
            title: 'Call',
            desc: '+1 (267) 0000000',
        }, {
            iocn: '/icons/email.svg',
            title: 'Email',
            desc: 'info@tirenexsus.com',
        },
    ]
    const TimeCard = () => {
        return <div className='mx-auto sm:ml-0 max-w-[340px] bg-white sm:border-r lg:pr-16 xl:pb-5'>
            <div className="flex items-center gap-[18px]">
                <Image src={'/icons/timing.svg'} priority className='w-[40px] h-[40px] md:w-[60px] md:h-[60px]' width={60} height={60} alt={'timing icon'} />
                <h2 className='font-[500] text-[#000] text-[25px] leading-[107%]'>
                    {`Timing`}
                </h2>
            </div>

            <div className="flex flex-col mt-5">
                {cardData?.map((item: string) => <div key={item} className='flex items-start gap-[23px] mb-[5px]'>
                    <div className='h-2 w-2 min-h-2 min-w-2 rounded-full mt-3 bg-black' />

                    <p className='font-[500] text-[#000] text-[18px] leading-[167%]'>
                        {item}
                    </p>
                </div>)}
            </div>
        </div>
    }

    return (
        <section id='contact' className='bg-white pt-[100px] md:pt-[130px] pb-[50px] md:pb-[100px] px-[30px] md:px-[50px] xl:px-[80px] w-full max-w-[1440px] mx-auto'>
            <div className="flex flex-col md:max-w-3xl">
                <h1 className='font-jost font-[600] text-[#000000] text-[40px] leading-[107%]'>
                    Contact Tire Nexsus for live support on your online tire order?
                </h1>
            </div>

            <div className='mt-16 mb-[100px] md:mb-[146px] flex flex-wrap lg:flex-row lg:flex-nowrap gap-9 lg:gap-12'>
                <TimeCard />
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
                    {options?.map((item: Option_Props) => <div key={item?.title} className='mx-auto w-full max-w-[350px] min-h-[120px] md:min-h-[160px] py-5 md:py-0'>
                        <div className="flex items-center gap-[18px]">
                            <Image src={item?.iocn} priority className='w-[40px] h-[40px] md:w-[60px] md:h-[60px]' width={60} height={60} alt={item?.title} />
                            <h2 className='font-[500] text-[#000] text-[25px] leading-[107%]'>
                                {item?.title}
                            </h2>
                        </div>

                        <p className='mt-6 font-[500] text-[#000] text-[18px] leading-[167%]'>
                            {item.desc}<br />
                            {item.desc2}
                        </p>
                    </div>)}
                </div>
            </div>

            <ContactForm />
        </section>
    )
}

export default Contact
