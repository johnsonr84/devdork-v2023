import { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
// import Education from '@/components/Education';
import Contact from '../components/Contact';
import Link from 'next/link';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#61DAFB]/80'>
      <Head>
        <title>DevDork</title>
      </Head>

      <Header />

      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>

      <section id="experience" className='snap-center'>
        <Experience />
      </section>

      <section id="skills" className='snap-start'>
        <Skills />
      </section>

      <section id="projects" className='snap-center'>
        <Projects />
      </section>

      <section id="contact" className='snap-center'>
        <Contact />
      </section>
      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer pt-10'>
          <div className='flex items-center justify-center'>
            <ArrowUpCircleIcon 
            className='h-10 w-10 rounded-full filter grayscale hover:bg-[#61DAFB] cursor-pointer'
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}
export default Home;