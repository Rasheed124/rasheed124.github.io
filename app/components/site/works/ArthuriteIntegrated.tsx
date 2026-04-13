import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const ArthuriteIntegrated = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Web Developer
        <span className="text-textGreen tracking-wide">
          @Arthurite Integrated
        </span>
      </h3>
      <div className="flex flex-col md:flex-row md:justify-between text-sm mt-1 font-medium text-textDark">
        <p>March 2025 - May 2025</p>
        <p className="text-textGreen">Lagos, Nigeria (Remote)</p>
      </div>

      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Led development teams to deliver end-to-end web solutions,
          specializing in WordPress development and tailored platforms to meet
          diverse client needs.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Spearheaded the transformation of business concepts into fully
          operational WordPress websites by designing user-friendly interfaces
          and responsive layouts.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Optimized site performance, security, and SEO best practices, ensuring
          fast-loading and highly visible digital experiences across all
          devices.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated closely with clients to guide project vision from concept
          to deployment, ensuring final deliverables met rigorous quality and
          brand standards.
        </li>
      </ul>
    </motion.div>
  );
};

export default ArthuriteIntegrated;
