"use client";

import { Button } from "@/components/ui/button";
import { input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+63)9458821349",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "geralddavetrajano@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Manila, Philippines",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:mb-8 gap-[30px]">
          {/*form */}
          <div className="xl:h-[54%] order-2 xl:order-none"></div>
          <form className="flex flex-col gap-6 p-10 bg-[#e3c5e2] rounded-xl ">
            <h3 className="text-4xl text-accent">Let's work together</h3>
            <p className="text-white/60">
              Have a project in mind or need help with your current work? I’m
              here to collaborate and bring your ideas to life. Whether you need
              web development, UI/UX design, business analysis, or SEO services,
              let's connect and discuss how we can achieve your goals together.
            </p>
          </form>
        </div>
        {/*info */}
        <div className="flex-1 flex items-center  order-1 xl:order-none mb-8 ">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#e3c5e2] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};
export default Contact;
