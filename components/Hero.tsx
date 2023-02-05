import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            'Hey! I am Rob',
            'I enjoy building apps, software and platforms that help others',
            'This Full Stack website was built using...',
            'React, TypeScript, NextJS, Tailwind and Sanity'
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src="https://via.placeholder.com/50 "
                alt="placeholder"
            />
            <div className='text-3xl lg:text-4xl font-semibold px-10 z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Full Stack Software Developer</h2>
                <h1>
                    <span>{text}</span>
                    <Cursor cursorColor="#61DAFB" />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero