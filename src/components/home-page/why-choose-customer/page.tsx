import React from 'react'
import Image from 'next/image'

interface CARD_TYPE {
    id: number
    icon: string
    title: string
    desc: string
}

const WhyChooseCustomer = () => {

    const data: CARD_TYPE[] = [
        {
            id: 1, icon: '/icons/why-cust-cho-1.svg',
            title: 'Best price guarantee',
            desc: `See the same tire at a lower price? We'll match it.`,
        }, {
            id: 2, icon: '/icons/why-cust-cho-2.svg',
            title: 'Shipping across USA',
            desc: 'Nationwide delivery, fast and reliable.',
        }, {
            id: 3, icon: '/icons/why-cust-cho-3.svg',
            title: 'Premium brands',
            desc: 'Top tire brands, all in one.',
        }, {
            id: 4, icon: '/icons/why-cust-cho-4.svg',
            title: 'Get exclusive deals',
            desc: 'Unlock limited-time offers on top tire brands.',
        }
    ]

    const CardItem = ({ item }: { item: CARD_TYPE }) => {
        return <div className='flex flex-col justify-center gap-7 p-10 pb-[89px] bg-[#262626] rounded-[24px] hover:scale-[1.05] ease-in-out duration-500' style={{ "boxShadow": "0px 0px 29px 0px #00000026" }}>
            <Image src={item?.icon} priority className='w-[71px] h-[71px]' width={71} height={71} alt={item.title} />
            <div className='flex flex-col gap-3'>
                <p className='font-[700] text-[#FFF] text-[20px] leading-[107%]'>{item.title}</p>
                <p className='font-inter font-[500] text-[#FFF] text-[20px] leading-[167%]'>{item.desc}</p>
            </div>
        </div>
    }

    return (
        <section id='for-customers' className='bg-[#000000] py-[100px] md:pb-[120px]'>

            <div className="flex flex-col px-[30px] md:px-[50px] xl:px-[80px] w-full max-w-[1440px] mx-auto">
                <div className="flex flex-col md:flex-row gap-10 md:gap-[50px] lg:gap-[150px]">
                    <h1 className='font-jost font-[600] text-[#FFF] text-[40px] leading-[107%]'>
                        Why choose customers<br /> TireNexsus?
                    </h1>

                </div>

                <div className='mt-[70px] md:mt-[100px] grid grid-cols-1 md:grid-cols-2 gap-[34px] md:gap-[64px]'>
                    {data.map((item) => <CardItem key={item.id} item={item} />)}
                </div>

                <div className="mt-[137px] flex flex-col gap-[56px]">
                    <h2 className='font-[700] text-center text-[#FFF] text-[30px] leading-[107%]'>Best price on all tire brands</h2>

                    <div className="flex w-full justify-start lg:justify-center overflow-hidden overflow-scroll">
                        {[1, 2, 3, 4, 5, 6, 7].map((item: number) => <Image key={item} src={`/brands/brand-${item}.png`} priority className='rounded-full hover:scale-[1.2] ease-in-out duration-500' width={150} height={150} alt='' />)}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default WhyChooseCustomer
