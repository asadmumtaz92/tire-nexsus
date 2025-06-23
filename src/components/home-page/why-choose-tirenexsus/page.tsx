import React from 'react'
import Image from 'next/image'

interface CARD_TYPE {
    id: number
    icon: string
    title: string
}

const WhyChooseTireNexsus = () => {

    const data: CARD_TYPE[] = [
        {
            id: 1, icon: '/icons/why-choose-1.svg',
            title: '1. Make your inventory available',
        }, {
            id: 2, icon: '/icons/why-choose-2.svg',
            title: '2. Receive orders from TireNexsus',
        }, {
            id: 3, icon: '/icons/why-choose-3.svg',
            title: '3. Ready to ship',
        }, {
            id: 4, icon: '/icons/why-choose-4.svg',
            title: '4. On-time Payment guarentee from TireNexsus',
        }
    ]

    const CardItem = ({ item }: { item: CARD_TYPE }) => {
        return <div className='flex md:flex-col lg:flex-row items-center gap-9 p-10 bg-white rounded-[24px] hover:scale-[1.05] ease-in-out duration-500' style={{ "boxShadow": "0px 0px 29px 0px #00000026" }}>
            <Image src={item?.icon} priority className='w-[71px] h-[71px]' width={71} height={71} alt={item.title} />
            <p className='font-inter font-[600] text-[#000] text-[20px] leading-[167%]'>{item.title}</p>
        </div>
    }

    return (
        <section id='for-suppliers' className='bg-white pt-[50px] md:pt-[134px] pb-[100px] md:pb-[168px] px-[30px] md:px-[50px] xl:px-[80px] w-full max-w-[1440px] mx-auto'>
            <div className="flex flex-col md:flex-row gap-10 md:gap-[50px] lg:gap-[150px]">
                <h1 className='font-jost font-[600] text-[#003A6D] text-[40px] leading-[107%]'>
                    Why choose TireNexsus?
                </h1>
                <p className='font-[500] text-[#000] text-[16px] md:text-[20px] leading-[107%]'>
                    Join a growing network of suppliers. Reach more customers, streamline orders, and grow your sales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae laoreet arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam pharetra imperdiet erat, vitae faucibus justo feugiat vitae. Mauris vel molestie nisi. Aliquam quis risus neque. Etiam luctus quis turpis vitae dapibus. Aliquam erat volutpat. Donec gravida ex ac justo ullamcorper tempus. Pellentesque et magna tortor.
                </p>
            </div>

            <div className='mt-[70px] md:mt-[100px] grid grid-cols-1 md:grid-cols-2 gap-[34px] md:gap-[64px]'>
                {data.map((item) => <CardItem key={item.id} item={item} />)}
            </div>

        </section>
    )
}

export default WhyChooseTireNexsus
