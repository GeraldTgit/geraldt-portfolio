"use client";
import { useState } from "react";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Created two personal projects to showcase my web development skills: this portfolio site and Auli's Playground, an interactive web app designed for my daughter.",
    href: "",
  },
  {
    num: "02",
    title: "Backend Development",
    description:
      "With my existing knowledge in Data Engineering and specialty in Python Programming, I can easily adapt Backend development, in fact Auli's Playground comes with backend which setup in Supabase and deploy in RailwayWith a strong foundation in Data Engineering and a focus on Python programming, I’ve been able to transition smoothly into backend development. In fact, **Auli's Playground** features a custom backend built with Supabase and deployed via Railway.",
    href: "",
  },
  {
    num: "03",
    title: "Tech Savvy",
    description:
      "Thanks to the diverse work setups and evolving project needs I’ve experienced, I’ve developed the ability to quickly adapt to different technologies while consistently delivering high-quality results.",
    href: "",
  },
  {
    num: "04",
    title: "Leadership",
    description:
      "My work background has also given me opportunities to train and coach team members, allowing me to develop strong people skills and soft skills—essential for effective collaboration and communication in any development team.",
    href: "",
  },
];

const Services = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            const isExpanded = expanded[index];
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/*top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-accent transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-accent group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/*title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/*description */}
                <div
                  className={`transition-all duration-500 ${
                    isExpanded ? "h-auto" : "h-[60px] overflow-hidden"
                  }`}
                >
                  <p className="text-white/60">{service.description}</p>
                  {/* Read More/Read Less Button */}
                </div>
                {/*border */}
                <div className="border-b border-white/20 w-full"></div>
                <div className="flex justify-end">
                  <button
                    className="text-accent group-hover:border-b-2 hover:font-extrabold hover:border-accent"
                    onClick={() => toggleExpand(index)}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
