// import { amazonImg, cyberImg, noorShop } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-contentContainer mx-auto lgl:px-20 py-24"
    >
      <SectionTitle title="Some Things I have Built" titleNo="03" />

      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">

        {/* ============ project One Start here ================ */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://durodolaabdulhad.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={"/rasheed-tolulope-project-portfolio.png"}
                alt="rasheed-tolulope-project-portfolio"
                fill
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>

          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Digial Marketer Portfolio</h3>
            </div>

            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              A portfolio that showcases strong design expertise and a refined visual perspective on a professional journey. It uses <span className="text-textGreen">Sanity</span> as the backend API.
            </p>

            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>Sanity</li>
              <li>Vercel Deployment</li>
            </ul>

            <div className="text-2xl flex gap-4">
              {/* <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Rasheed124/duroappp"
                target="_blank"
              >
                <TbBrandGithub />
              </a> */}
              <a
                className="hover:text-textGreen duration-300"
                href="https://durodolaabdulhad.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}


        {/* ============ project Two Start here (Tech Design Space) ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://techdesignspace.com"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={"/rasheed-tolulope-project-tech-design-space.png"}
                alt="tech-design-space"
                fill
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>

          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Tech Design Space</h3>
            </div>

            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              A frontend-focused digital architecture concept using Next.js and TypeScript with Google email and CAPTCHA integrations, helping startups and brands scale through high-performance web and mobile ecosystems that elevate their digital presence beyond “good enough” to industry-leading.
            </p>

            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>TypeScript</li>
              <li>Email Integration</li>
              <li>CAPTCHA</li>
            </ul>

            <div className="text-2xl flex gap-4">
              {/* <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/"
                target="_blank"
              >
                <TbBrandGithub />
              </a> */}
              <a
                className="hover:text-textGreen duration-300"
                href="https://techdesignspace.netlify.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}


        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://ascenttech.africa/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={"/rasheed-tolulope-project-tech-ascent-tech.png"}
                alt="rasheed-tolulope-project-TechAcademy"
                fill
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>

          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Ascent Tech</h3>
            </div>

            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              A dynamic platform built with Next.js to provide interactive courses and resources for aspiring tech professionals. It includes user-friendly navigation, personalized dashboards, and integrated forums for student engagement. The project aims to deliver high-quality education and foster a supportive learning community.
            </p>

            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Nodejs</li>
              <li>Custom Backend</li>
            </ul>

            <div className="text-2xl flex gap-4">
              {/* <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Rasheed124/Ascent"
                target="_blank"
              >
                <TbBrandGithub />
              </a> */}
              <a
                className="hover:text-textGreen duration-300"
                href="https://ascenttechhub.africa/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}

      </div>
    </section>
  );
};

export default Projects;