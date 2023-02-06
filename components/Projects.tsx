import React from 'react'
import { motion } from 'framer-motion';

type Props = {};

function Projects({ }: Props) {
    const projects = [1, 2, 3, 4, 5];

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1 }}
                className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
            >
                <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                    Projects
                </h3>

                <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-madatory z-20'>
                    {projects.map((project, i) =>
                        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                            <motion.img
                                initial={{ y: -300, opacity: 0 }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                src='https://via.placeholder.com/300'
                                alt=''
                            />

                            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                <h4 className='text-4xl font-semibold text-center'>
                                    <span className='underline decoration-[white]/50'>
                                        Case Study {i + 1} of {projects.length}:
                                    </span>{" "}
                                    UPS Clone
                                </h4>

                                <p className='text-md text-center md:text-left'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, debitis? Mollitia voluptate
                                    libero nobis, eaque voluptatem optio ipsa quidem at, sapiente est fugit. Maiores labore perspiciatis
                                    vitae? Rem cupiditate tempore, nihil dolores nulla quas amet harum labore quasi maiores obcaecati
                                    pariatur aliquid iure quo inventore totam ipsum accusantium illo corrupti?
                                </p>
                            </div>
                        </div>
                    )}}
                </div>

                <div className='w-full absolute top-[30%] bg-[#61DAFB]/10 left-0 h-[500px] -skew-y-12' />
            </motion.div>
        </>
    );
}

export default Projects;