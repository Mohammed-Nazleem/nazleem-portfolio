"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const serv = [
  {
    num: "01",
    title: "Web Development",
    description:
      "lorem Ipsum dolar sit amet, consectetur adipiscing elit. Eaque tenetur.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "lorem Ipsum dolar sit amet, consectetur adipiscing elit. Eaque tenetur.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "lorem Ipsum dolar sit amet, consectetur adipiscing elit. Eaque tenetur.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "lorem Ipsum dolar sit amet, consectetur adipiscing elit. Eaque tenetur.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {serv.map((item, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  {/* top */}
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{item.num}</div>
                  <Link className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45" href={item.href}>
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                  </div>

                  {/* heading */}
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{item.title}</h2>

                  {/* description */}
                  <p className="text-white/60">{item.description}</p>

                  {/* border */}
                  <div className="border-b border-white/20 w-full"></div>
                
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
