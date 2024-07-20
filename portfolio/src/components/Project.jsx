import React from 'react';
import Section from './Section';
import { Align } from '../constants';
import SubHeading from './SubHeading';
import SplitText from './SplitText';
import Heading from './Heading'



// Assuming 'projects' is defined somewhere in the scope
// import projects from '../data/projects';

const Project = () => {
    return (
        <Section className="w-full items-start">
            <div className="md:max-w-2/3 flex w-full flex-col items-start space-y-11">
                <SubHeading dark align={Align.Left}>
                    projects
                </SubHeading>

                <div>
                    <Heading size="sm" dark className="font-extrabold">
                        <SplitText text="It's in the works!" />
                    </Heading>

                    <p>Check back soon.</p>
                </div>

                <p className="whitespace-pre-line text-xs font-bold">
                    Meanwhile, this site is being built & designed with React.js, Tailwind CSS, GSAP & Figma
                </p>
            </div>

        </Section>
    )
}

export default Project;
