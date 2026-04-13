import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Splash = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Web Instructor
        <span className="text-textGreen tracking-wide">
          @AscentTech Academy
        </span>
      </h3>

      <div className="flex flex-col md:flex-row md:justify-between text-sm mt-1 font-medium text-textDark">
        <p>Jan 2019 - Dec 2021</p>
        <p className="text-textGreen">Lagos, Nigeria (Hybrid)</p>
      </div>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Delivered engaging and interactive lectures on HTML, CSS, JavaScript,
          Scratch, and Python, catering to a diverse group of students aged 0-15
          and above.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Provided personalized career guidance and introduced students to new
          opportunities within the field, fostering their professional growth.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Conducted thorough assessments of training programs and skillfully
          recommended enhancements to senior management for continuous
          improvement.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Drove a 30% overall course enrollment growth by creating and
          developing content for two innovative courses.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Achieved exceptional results by mentoring students, leading to an
          impressive 80% average score improvement across 17 coding modules.
        </li>
      </ul>
    </motion.div>
  );
};

export default Splash;
