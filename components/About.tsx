import React from 'react';
import { motion } from 'framer-motion';


type Props = {};

export default function About({ }: Props) {
    return (
        <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src="https://via.placeholder.com/350"
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
                md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-3xl font-semibold'>
                    Thanks for being <span className=''>curious</span> about my life!
                </h4>
                <p>I am a Full Stack Software Developer by day and a Teaching Assistant
                    for a Full Stack Code Camp by night.</p>
                <p>Prior to switching my career to tech and programming, I helped create a startup company
                    from the ground up, turning it into one of the top performing oil service companies
                    in the Rocky Mountain Region, securing contracts with top oil producers in North America.</p>
                <p>In my free time I enjoy drumming, skating, archery, concerts, learning
                    martial arts and traveling. Let me bring my zest for life, passion for
                    programming, desire to help others and a determination to see business
                    thrive to your team!</p>
            </div>
        </div>
    );
}

