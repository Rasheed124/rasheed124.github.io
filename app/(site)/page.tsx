"use client";
import LeftSide from "../components/site/LeftSide";
import Navbar from "../components/site/Navbar";

import { motion } from "framer-motion";
import RightSide from "../components/site/RightSide";
import Banner from "../components/site/Banner";
import About from "../components/site/About";
import Experience from "../components/site/Experience";
import Projects from "../components/site/Projects";
import Contact from "../components/site/Contact";

export default function Home() {
  return (
    <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight  overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
      <Navbar />
      <div className="w-full h-[88vh] ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full  fixed left-0 bottom-0"
        >
          <LeftSide />
        </motion.div>
        <div className="h-[88vh] mx-auto   p-4">
          <Banner />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex  w-32 h-full fixed right-0 bottom-0"
        >
          <RightSide />
        </motion.div>
      </div>
    </main>
  );
}
