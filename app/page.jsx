import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Link from "next/link";

//components
import Socials from "@/components/Socials";
import MainPhoto from "@/components/MainPhoto";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Gerald Dave</span>
            </h1>
            <div className="items-center">
              <p className="max-w-[500px] mb-9 md:mx-auto sm:mx-auto lg:ml-0 text-white/80">
                Welcome to my portfolio! I specialize in crafting clean,
                user-friendly web interfaces using HTML, CSS, JavaScript, and
                React. With a solid understanding of both front-end, back-end
                development and ETL Development. I’m passionate about
                creating meaningful digital experiences and always eager to
                learn and grow in the process.
              </p>
            </div>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="./assets/Gerald_Dave_Trajano_Resume.pdf" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/*photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <MainPhoto />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
