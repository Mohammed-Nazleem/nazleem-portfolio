"use client";

import { FaHtml5, FaCss3, FaReact, FaFigma, FaJs, FaDocker, FaNodeJs, FaLaravel } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress, SiMysql } from "react-icons/si";

import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

// about data
const about = {
  title: "About Me",
  description: `Driven, creative, and eager to make an impact. That's me in a nutshell.  A highly motivated individual with 3+ years of experience in the field.
    I'm passionate about using my skills to bring fresh ideas to life and create meaningful solutions. Whether it's tackling a complex project or contributing to a collaborative team effort, I'm always ready to roll up my sleeves and get to work.`,
  info: [
    {
      fieldName: "Name",
      fieldvalue: "Mohammed Nazleem",
    },
    {
      fieldName: "Phone",
      fieldvalue: "(+94) 776 840 404",
    },
    {
      fieldName: "Experience",
      fieldvalue: "3+ Years",
    },
    {
      fieldName: "Email",
      fieldvalue: "nazleem18@gmail.com",
    },
    {
      fieldName: "Full Time Work",
      fieldvalue: "Available",
    },
    {
      fieldName: "Freelance",
      fieldvalue: "Available",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I am a passionate and experienced Full Stack Developer with a proven track record of building high-quality software solutions. My expertise lies in creating user-friendly interfaces, efficient back-end systems, and seamless integrations.",
  items: [
    {
      company: "BitMatrix Solutions Inc",
      position: "Full Stack Developer",
      duration: "2023 - Present",
      spec: [
        {
          desc: "Developed SaaS solution for 9Rounds gym management.",
        },
        {
          desc: "Implemented custom portals for client workflow streamlining.",
        },
        {
          desc: "Built robust SaaS application with user-friendly interfaces.",
        },
      ],
    },
    {
      company: "E-Commerce Startup",
      position: "Freelance Developer",
      duration: "2021 - 2023",
      spec: [
        {
          desc: "Built custom Windows POS systems for diverse clients.",
        },
        {
          desc: "Boosted client efficiency via report generation.",
        },
        {
          desc: "Ensured optimal POS performance with ongoing support.",
        },
      ],
    },
  ],
};

// eduaction data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I hold a strong academic background in software engineering, demonstrating my commitment to continuous learning and technical proficiency.",
  items: [
    {
      institution: "London Metropolitan University",
      course: "BEng (hons) in Software Engineering",
      completion: "2019",
    },
    {
      institution: "University Of Wolverhampton UK",
      course: "Higher National Diploma in Computer Science",
      completion: "2015",
    },
    {
      institution: "Zahira College",
      course: "Advanced Level in Combined Mathematics",
      completion: "2013",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "As a skilled Full Stack Developer, I possess a diverse set of technical abilities that enable me to build robust and engaging web applications. My expertise spans from front-end development using HTML, CSS, and JavaScript frameworks like React and Next.js, to back-end development utilizing  ASP.NET CORE.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: ".NET",
      name: "ASP .NET CORE",
    },
    {
      icon: <FaLaravel/>,
      name: "PHP Laravel",
    },
    {
      icon: <FaNodeJs/>,
      name: "NodeJs",
    },
    {
      icon: <SiExpress/>,
      name: "ExpressJs",
    },
    {
      icon: <FaDocker/>,
      name: "Docker",
    },
    {
      icon: <SiMysql/>,
      name: "MySQL",
    },
    {
      icon: <SiMongodb/>,
      name: "MongoDB",
    },
  ],
};

// recognition data
const recognition = {
  title: "My recognitions",
  description:
    "My academic journey has been marked by a dedication to excellence, which has been recognized through several prestigious awards. These accolades reflect my commitment to continuous learning and my passion for pushing boundaries.",
  awardSet: [
    {
      name: "Best academic student of the year",
      year: 2014,
      college: "British College",
    },
    {
      name: "Most outstanding student of the year",
      year: 2015,
      college: "Edexcel",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="recognition">Recognitions</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[300px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[25px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3 min-h-[50px]">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                          <ul className="gap-4 min-h-[100px]">
                            {item.spec.map((item, index) => {
                              return (
                                <li
                                  key={index}
                                  className="py-0 px-2 flex flex-col items-center lg:items-start gap-1"
                                >
                                  <div className="flex gap-3 items-center">
                                    <span className="w-[10px] h-[2px] rounded-full bg-accent"></span>
                                    <h3 className="text-white/80 text-[12px]  text-center lg:text-left">
                                      {item.desc}
                                    </h3>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.completion}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[80px] text-center lg:text-left">
                            {item.course}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((item, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {item.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{item.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* recognitions */}
            <TabsContent value="recognition" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold capitalize">
                  {recognition.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {recognition.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {recognition.awardSet.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.year}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[80px] text-center lg:text-left">
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.college}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0 max-w-[620px]">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          className="flex items-center justify-center xl:justify-start gap-4"
                          key={index}
                        >
                          <span className="text-accent">{item.fieldName}</span>
                          <p className="text-white/60 text-xl">
                            {item.fieldvalue}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
