import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center text-white bg-gray-700/70 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src={urlFor(experience.companyImage).url()}
            className="w-32 h-32 rounded-full md:rounded-full  xl:w-[150px] xl:h-[150px] object-cover object-center"
          />
    
    <div className="px-8 md:px-10">
        <h4 className="text-lg md:text-2xl lg:text-lg xl:text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-sm md:text-2xl lg:text-lg xl:text-2xl mt-1">{experience.company}</p>
        <div className="flex flex-wrap my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-auto rounded-full m-1"
              src={urlFor(technology.image)?.url()}
            />
          ))}
        </div>
    
            <p className="uppercase py-2 text-gray-300 text-sm md:text-md lg:text-lg xl:text-xl">
              {new Date(experience.dateStarted).toDateString()} -{" "}
              {experience.isCurrentlyWorkingHere
                ? "Present"
                : new Date(experience.dateEnded).toDateString()}
            </p>
    
            <ul className="list-disc space-y-4 text-sm md:text-md lg:text-lg xl:text-xl">
              {experience.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </article>
      );
    }
    
    export default ExperienceCard;