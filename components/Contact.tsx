import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    firstName: string,
    lastName: string,
    email: string,
    subject: string,
    message: string,
  };

  type Props = {};

  function Contact({ }: Props) {
    const { 
        register, 
        handleSubmit, 
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto: robertcjohnson1984@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.firstName} ${formData.lastName}. ${formData.message}. My email is ${formData.email}`
    };
    
    return (
        <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 pt-20 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>
            <div className='flex flex-col space-y-10 pt-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I want to hear from you! {" "}
                    <span className='decoration-[#61DAFB]/50 underline'>
                        Lets talk!
                    </span>
                </h4>
                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#61DAFB] h-7 w-7 animate-bounce' />
                        <p className='text-2xl'>+123456789</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#61DAFB] h-7 w-7 animate-bounce' />
                        <p className='text-2xl'>devdork@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#61DAFB] h-7 w-7 animate-bounce' />
                        <p className='text-2xl'>Denver, Colorado USA</p>
                    </div>
                </div>

                <form className='flex flex-col space-y-2 w-fit mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex space-x-2'>
                        <input className='contactInput' type="text" placeholder="First Name" {...register('firstName')} />
                        <input className='contactInput' type="text" placeholder="Last Name" {...register('lastName')} />
                    </div>

                    <input className='contactInput' type="email" placeholder="Email" {...register('email')} />
                    <input className='contactInput' type="text" placeholder="Subject" {...register('subject')} />
                    <textarea className='contactInput' rows="3" placeholder="Message" {...register('message')} ></textarea>

                    <button className='bg-[#61DAFB] py-5 px-10 rounded-md text-black font-bold' typeof='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Contact;