import React from 'react';
import Section from './Section';
import { Align } from '../constants';
import SubHeading from './SubHeading';
import SplitText from './SplitText';
import Heading from './Heading';

// Dummy project data for demonstration
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of Project One that highlights its main features.",
    link: "#",
    image: "https://via.placeholder.com/600x400",
    tags: ["React", "Tailwind"],
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of Project Two that explains its purpose.",
    link: "#",
    image: "https://via.placeholder.com/600x400",
    tags: ["JavaScript", "CSS"],
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of Project Three showcasing its unique aspects.",
    link: "#",
    image: "https://via.placeholder.com/600x400",
    tags: ["Design", "Figma"],
  },
];

const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-lg
        bg-white
        shadow-lg
        transition
        duration-300
        hover:scale-105
        hover:shadow-xl
        dark:bg-gray-800
      "
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm text-gray-700 dark:text-gray-300">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                bg-gray-200
                px-2
                py-1
                text-xs
                font-medium
                text-gray-800
                dark:bg-gray-700
                dark:text-gray-200
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

const Project = () => {
  return (
    <Section className="w-full items-start py-12">
      <div className="mx-auto max-w-6xl px-4">
        <SubHeading dark align={Align.Left}>
          projects
        </SubHeading>
        <Heading size="sm" dark className="font-extrabold mt-2">
          <SplitText text="Latest Projects" />
        </Heading>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Check out some of our recent work below.
        </p>

        {/* Horizontal scroll on mobile, grid on larger screens */}
        <div
          className="
            mt-8
            flex flex-nowrap space-x-4 overflow-x-auto
            sm:grid sm:grid-cols-2 lg:grid-cols-3
            sm:space-x-0 sm:gap-8
          "
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="
                w-72 flex-shrink-0
                sm:w-auto sm:flex-shrink
              "
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <p className="mt-12 whitespace-pre-line text-xs font-bold text-gray-500 dark:text-gray-400">
          Meanwhile, this site is being built & designed with React.js, Tailwind CSS, GSAP & Figma
        </p>
      </div>
    </Section>
  );
};

export default Project;
