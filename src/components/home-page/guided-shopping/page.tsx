'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const GuidedShopping = () => {

    const [apiResp, setApiResp] = useState({
        email: '',
        loading: false,
        error: '',
        success: '',
    })
    const newsLetterHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (apiResp?.email == '' || apiResp?.email?.length < 10) {
            setApiResp(prev => ({ ...prev, error: 'Please enter valid e-mail address.', }))
        } else {
            try {
                setApiResp(prev => ({ ...prev, error: '', loading: true, }))
                const formData = {
                    email: apiResp?.email
                }
                const res = await fetch('/api/newsletter', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                })

                const result = await res.json()
                if (res.ok) {
                    setApiResp(prev => ({ ...prev, email: '', error: '', loading: false, success: 'Thank you! You’ve successfully subscribed to our newsletter.', }))
                    setTimeout(() => {
                        setApiResp(prev => ({ ...prev, success: '', }))
                    }, 3000)

                } else {
                    setApiResp(prev => ({ ...prev, loading: false, error: result?.message, }))
                }
            } catch (error) {
                console.log("Error:", error)
                setApiResp(prev => ({ ...prev, error: '', loading: false, }))
            }
        }
    }

    const cardData: string[] = [
        'Vehicle information',
        'Personal driving style',
        'Your location',
        'Simple score',
    ]
    const FirstCard = () => {
        return <div className='relative mx-auto w-full max-w-[445px] min-h-[600px] sm:min-h-[580px] rounded-[24.11px] bg-white pt-[38px] px-[22px] hover:scale-[1.06] ease-in-out duration-500' style={{ boxShadow: "0px 0px 39px 0px #00000026" }}>
            <h2 className='font-[500] text-[#3076B2] text-[25px] leading-[107%]'>
                {`Find the tire right for you.`}
            </h2>

            <p className='mt-[45px] mb-6 font-[500] text-[#000] text-[20px] leading-[167%]'>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare, tellus ullamcorper tincidunt molestie, eros urna elementum nibh, quis sagittis mi lectus et augue. `}
            </p>
            <Image src={'/images/guid-card-1.png'} priority className='absolute left-5 right-5 bottom-0 mx-auto object-center cw-auto' width={350} height={350} alt={'tire images'} />
        </div>
    }
    const SecondCard = () => {
        return <div className='mx-auto w-full max-w-[445px] rounded-[24.11px] bg-white pt-[38px] px-[22px] pb-[100px] hover:scale-[1.06] ease-in-out duration-500' style={{ boxShadow: "0px 0px 39px 0px #00000026" }}>
            <h2 className='font-[500] text-[#3076B2] text-[25px] leading-[107%] mb-[55px]'>
                {`We recommend the best tires based on:`}
            </h2>

            {cardData?.map((item: string) => <div key={item} className='flex gap-[23px] mb-[15px]'>
                <Image src={'/icons/circle-tick.svg'} priority className='w-[32px] h-[32px]' width={32} height={32} alt={'tire images'} />

                <p className='font-[500] text-[#000] text-[18px] md:text-[20px] leading-[167%]'>
                    {item}
                </p>
            </div>)}
        </div>
    }
    const ThirdCard = () => {
        return <div className='mx-auto w-full max-w-[445px] rounded-[24.11px] bg-white pt-[38px] px-[22px] pb-[100px] hover:scale-[1.06] ease-in-out duration-500' style={{ boxShadow: "0px 0px 39px 0px #00000026" }}>
            <h2 className='font-[500] text-[#3076B2] text-[25px] leading-[107%] mb-[55px]'>
                {`What we will deliver to you:`}
            </h2>

            <p className='mt-[45px] mb-6 font-[500] text-[#000] text-[20px] leading-[167%]'>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare, tellus ullamcorper tincidunt molestie, eros urna elementum nibh, quis sagittis mi lectus et augue. `}
            </p>

            <div className='mt-[40px] grid grid-cols-2 md:grid-cols-3 items-center gap-[10px] md:gap-[20px]'>
                {[1, 2, 3, 4, 5, 6, 7]?.map((item: number) => <Image key={item} src={`/icons/brands/brand-${item}.svg`} priority className='w-full auto h-auto' width={150} height={102} alt={'tire images'} />)}
            </div>
        </div>
    }

    return (
        <section className='bg-white pt-[50px] md:pt-[113px] pb-[100px]md:pb-[168px] px-[30px] md:px-[50px] xl:px-[80px] w-full max-w-[1440px] mx-auto'>
            <div className="flex flex-col">
                <h1 className='font-jost font-[600] text-[#3076B2] text-[40px] leading-[107%]'>
                    Guided shopping with TireNexus
                </h1>
                <p className='font-[500] text-[#000] text-[16px] md:text-[20px] leading-[107%]'>
                    Get personalized set of tire recommendation
                </p>
            </div>

            <div className='mt-16 mb-[146px] flex flex-wrap xl:flex-row xl:flex-nowrap gap-9'>
                <FirstCard />
                <SecondCard />
                <ThirdCard />
            </div>

            <div className="flex bg-[url('/bg/join-mail.png')] bg-cover bg-center bg-no-repeat py-20 lg:py-24 rounded-[57px] min-h-[300px]">
                <div className="flex flex-col items-center xl:flex-row md:items-center xl:justify-between gap-y-12 xl:gap-10 w-full px-[30px] xl:px-[80px]">
                    <div className="flex flex-col items-center text-white w-full xl:w-fit">
                        <h2 className='font-jost font-[500] text-[40px] leading-[107%] xl:text-nowrap'>Join our mailing list</h2>
                        <p className='mt-3 font-[500] text-[18px] leading-[167%]'>To get exclusive deals when we launch</p>
                    </div>

                    <div className='flex flex-col w-full mx-auto xl:w-3/5'>
                        <form onSubmit={newsLetterHandler} className="flex flex-col sm:flex-row items-center sm:justify-center gap-6 w-full">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder='Your email address'
                                value={apiResp?.email}
                                onChange={(e) => setApiResp(prevState => ({ ...prevState, email: e?.target?.value }))}
                                className='w-full max-w-[400px] h-[64px] bg-[#AFAFAF33] text-white font-[400] text-[18px] leading-[100%] border rounded-[20px] py-5 px-4'
                            />
                            <button disabled={apiResp?.loading} type="submit" className='w-full max-w-[254px] bg-[#3076B2] text-white rounded-full h-[64px]'>
                                {apiResp?.loading ? 'Please wait...' : 'Subscribe'}
                            </button>
                        </form>
                        {apiResp?.error && <p className="max-w-[400px] sm:max-w-full md:max-w-[670px] mx-auto bg-red-100 text-red-600 px-4 py-2 rounded text-center w-full mt-5 first-letter:uppercase">{apiResp?.error}</p>}
                        {apiResp?.success && <p className="max-w-[400px] sm:max-w-full md:max-w-[670px] mx-auto bg-green-100 text-green-600 px-4 py-2 rounded text-center w-full mt-5 first-letter:uppercase">{apiResp?.success}</p>}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default GuidedShopping
