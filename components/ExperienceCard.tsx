import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 
        flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] 
        p-10 opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{ y: -100, opacity: 0, }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[-200px] object-cover object-center"
                src="https://via.placeholder.com/100"
                alt=""
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Software Devloper</h4>
                <p className='font-bold text-2xl mt-1'>Perfectly Posh</p>
                <div className='flex space-x-2 my-2'>
                    {/* thech used */}
                    {/* <img className='h-10 w-10 rounded-full'
                        src="https://via.placeholder.com/50"
                        alt=""
                    />
                    <img className='h-10 w-10 rounded-full'
                        src="https://via.placeholder.com/50"
                        alt=""
                    />
                    <img className='h-10 w-10 rounded-full'
                        src="https://via.placeholder.com/50"
                        alt=""
                    /> */}
                </div>
                <p className='uppercase py-5 text-gray-300'>Started... Ended...</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Summary</li>
                    <li>Summary</li>
                    <li>Summary</li>
                    <li>Summary</li>
                    <li>Summary</li>
                </ul>
            </div>
        </article>
    );
}
export default ExperienceCard;