import { AiOutlineHome } from "react-icons/ai";
import { RiChat1Line, RiCodeLine, RiUserHeartLine } from "react-icons/ri";
import {
  SiFigma,
  SiReact,
  SiJavascript,
  SiJquery,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";


// Align.js
export const Align = {
  Left: "left",
  Right: "right",
};

export const Page ={
  Home: "/",
  About: "/about",
  Projects: "/projects",
  Contact: "/contact",
}


export const menuItems = [
  {
      label: "home",
      icon: <AiOutlineHome />,
      extra: "home",
      url: Page.Home,
      mobileOnly: true,
  },
  {
      label: "about",
      icon: <RiUserHeartLine />,
      extra: "more of me",
      url: Page.About,
  },
  {
      label: "projects",
      icon: <RiCodeLine />,
      extra: "my work",
      url: Page.Projects,
  },
  {
      label: "contact",
      icon: <RiChat1Line />,
      extra: "say hi :)",
      url: Page.Contact,
  }
]

export const color =[
  {
  Red: "#DE5055",
  Pink: "#B84A7E",
  Purple: "#7C528C",
  Orange: "#DF7410",
  Teal: "#2F4858",
  Beige: "#D9D9D9",
}
]

export const tech =[
  {
    name: "React",
    icon: <SiReact />,
  },
  {
    name: "Javascript",
    icon: <SiJavascript />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Figma",
    icon: <SiFigma />,
  },
  {
    name: "Jquery",
    icon: <SiJquery />,
  },
]

export const projects = [
  {
    title: "React Reserve",
    subtitle: "MERN Stack",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./food.svg",
    link: "https://reactbootcamp.com",
  },
  {
    title: "React Tracks",
    subtitle: "React and Python",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./zubren.svg",
    link: "https://reedbarger.com",
  },
]

 

 
