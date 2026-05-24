/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />

      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">

          <p>
            Hi there! I&apos;m Rasheed Tolulope, a Frontend-heavy Full-stack Developer with over 4 years of experience building modern, responsive, and user-centric web applications. I specialize in translating complex product ideas into clean, intuitive, and high-performance digital experiences.
          </p>

          <p>
            My work focuses on crafting pixel-perfect interfaces with strong attention to detail, ensuring smooth interactions and seamless user experiences. I bridge design and development by building frontend systems that are both visually refined and performance-optimized, supported by solid backend development using PHP and Laravel.
          </p>

          <p>
            I enjoy working on scalable products where maintainability, usability, and clean architecture matter. Whether it's building from scratch or improving existing systems, I care deeply about delivering thoughtful UI execution backed by reliable full-stack engineering.
          </p>

          <p>Here are a few technologies I have been working with recently:</p>

          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt /></span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt /></span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt /></span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt /></span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt /></span>
              PHP
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt /></span>
              MySQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt /></span>
              Laravel
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt /></span>
              Tailwind CSS
            </li>
          </ul>
        </div>

        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 lg:-left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-contain md:object-cover"
                src={"/rasheed-tolulope1.jpg"}
                alt="profileImg"
                fill
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/10 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>

          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;