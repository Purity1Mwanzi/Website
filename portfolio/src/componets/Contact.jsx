import React from 'react'
import Heading from './Heading'
import SubHeading from './SubHeading'
import { Align } from '../constants'
import Section from './Section'
import SplitText from './SplitText'
import Clipboard from './Clipboard'
import Badge from './Badge'
import { SiLinkedin } from "react-icons/si";
import { openInNewTab } from "./helper"


const Contact = () => {
    return (
        <Section className="w-full items-start">
            <div className="md:max-w-2/3 mb-20 flex w-full flex-col items-start space-y-8 md:pb-0">
                <SubHeading dark align={Align.Left}>
                    Contact
                </SubHeading>

                <div>
                    <Heading size="sm" dark className="font-extrabold">
                        <SplitText text="Let’s keep in touch." />
                    </Heading>

                    <p>
                        If you have an exciting opportunity for me, feel free to reach out!
                    </p>
                </div>

                <Clipboard text="mwanzip89@gmail.com">
                    <p>
                        mwanzip89@gmail.com
                    </p>
                </Clipboard>

                <div>
                    Alternatively, you can also send me a message on
                    <Badge
                        icon={<SiLinkedin />}
                        onClick={() => openInNewTab("https://www.linkedin.com/in/purity-mwanzi-2b2852194")}
                        className="ml-1"
                    >
                        Linkedin
                    </Badge>

                    <p className="whitespace-pre-line text-sm font-bold">
                        {`This site is still in the works, check back often. `}
                        &#9786;
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default Contact
