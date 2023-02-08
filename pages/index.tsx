import { GetStaticProps } from "next";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";
import Link from "next/link";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ projects, skills, pageInfo, experiences, socials }: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#61DAFB]/80'>

      <Header socials={socials} />

      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>

      <section id="experience" className='snap-center'>
        <WorkExperience />
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  };
};