'use client'
import React, { useState, } from 'react'

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [errors, setErrors] = useState<Record<string, string>>({
        name: '',
        email: '',
        message: '',
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: name == 'email' ? value.replace(' ', '') : value, }))
        setErrors(prev => ({ ...prev, [name]: '', }))
    }
    const validateField = (name: string, value: string) => {
        let error = ''
        switch (name) {
            case 'name':
                if (!value) {
                    error = "Name is required"
                }
                break
            case 'email':
                if (!value) {
                    error = "Please enter valid email"
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    error = "Please enter valid email."
                }
                break
            case 'message':
                if (!value) {
                    error = "Message is required"
                }
                break
            default:
                break
        }
        return error
    }

    const validateForm = () => {
        const errors: Record<string, string> = {}
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key as keyof typeof formData])
            if (error) {
                errors[key] = error
            }
        })
        return errors
    }

    const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const errors = validateForm()
        if (Object.keys(errors).length === 0) {
            setLoading(true)
            setErrorMessage('')
            try {
                const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                })

                const result = await res.json()
                if (res.ok) {
                    setSuccessMessage('Contact form submitted successfully!')
                    setLoading(false)
                    setFormData({
                        name: '',
                        email: '',
                        message: '',
                    })
                    setTimeout(() => {
                        setSuccessMessage('')
                    }, 3000)
                } else {
                    setLoading(false)
                    console.log(`Error: ${result.message}`)
                    setErrorMessage(result.message)
                }
            } catch (error) {
                if (error instanceof Error) {
                    setErrorMessage(error.message)
                    console.log(`Error: ${error.message}`)
                } else {
                    setErrorMessage('An unexpected error occurred.')
                    console.log('Unknown error:', error)
                }
                setLoading(false)
            }
        } else {
            setErrors(errors)
            setSuccessMessage('')
        }
    }

    return (
        <div className="flex bg-[url('/bg/contact.png')] bg-cover bg-center bg-no-repeat py-16 px-5 sm:px-8 lg:p-20 rounded-[57px] min-h-[694px] drop-shadow-xl">
            <div className="flex flex-col items-start justify-center gap-y-12 xl:gap-10 w-full max-w-[856px]">
                <div className="flex flex-col items-start text-white w-full xl:w-fit">
                    <h2 className='font-jost font-[500] text-[40px] leading-[107%] xl:text-nowrap'>
                        Send us a Message
                    </h2>
                    <p className='mt-3 font-[500] text-[18px] leading-[167%]'>
                        Reach out to us with any query and let our team of experts handle it for you.
                    </p>
                </div>

                <form onSubmit={formHandler} className="flex flex-col items-start sm:justify-center gap-[42px] w-full mx-auto">
                    <div className="flex flex-wrap sm:flex-row sm:flex-nowrap w-full gap-5 max-w-[737px]">
                        <input
                            type='text'
                            id='name'
                            name='name'
                            placeholder='Full name'
                            required
                            value={formData?.name}
                            onChange={handleChange}
                            className='w-full sm:max-w-[400px] h-[64px] bg-[#AFAFAF33] text-white font-[400] text-[18px] leading-[100%] border rounded-[20px] py-5 px-4'
                        />
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Email'
                            required
                            value={formData?.email}
                            onChange={handleChange}
                            className='w-full sm:max-w-[400px] h-[64px] bg-[#AFAFAF33] text-white font-[400] text-[18px] leading-[100%] border rounded-[20px] py-5 px-4'
                        />
                    </div>

                    <div className='w-full'>
                        <textarea
                            id='message'
                            name='message'
                            placeholder='Your message'
                            rows={5}
                            value={formData?.message}
                            onChange={handleChange}
                            className='w-full max-w-[737px] bg-[#AFAFAF33] text-white font-[400] text-[18px] leading-[130%] border rounded-[20px] py-5 px-4'
                        ></textarea>
                    </div>

                    {/* ERRORS MESSAGE */}
                    {(errors?.name || errors?.email || errors?.message) && <div className="flex flex-col pl-3 -my-7 text-red-600">
                        {errors?.name && <p>{errors?.name}</p>}
                        {errors?.email && <p>{errors?.email}</p>}
                        {errors?.message && <p>{errors?.message}</p>}
                    </div>}
                    {errorMessage && <p className='pl-3 -my-7 text-red-600'>{errorMessage}</p>}

                    <button disabled={loading} type="submit" className='cursor-pointer w-full max-w-[254px] bg-[#3076B2] font-[500] text-white text-[20px] rounded-full h-[64px]'>
                        {loading ? 'Please wait...' : 'Submit'}
                    </button>
                    {/* SUCCESS MESSAGE */}
                    {successMessage && (
                        <div className="bg-green-200 text-green-600 p-3 rounded w-full max-w-[737px] font-[500] text-[1.2rem] text-center">
                            {successMessage}
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}

export default ContactForm
