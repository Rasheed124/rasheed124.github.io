import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const P23Africa = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Frontend Developer
        <span className="text-textGreen tracking-wide">@P23 Africa</span>
      </h3>
      <div className="flex flex-col md:flex-row md:justify-between text-sm mt-1 font-medium text-textDark">
        <p>Aug 2025 - Jan 2026</p>
        <p className="text-textGreen">London (Remote)</p>
      </div>

      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed and optimized high-performance digital platforms focused on scaling African businesses and ensuring investment readiness.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated seamlessly with back-end teams to consume and integrate Laravel API structures, ensuring efficient data flow and robust application logic.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Translated strategic marketing and operational requirements into intuitive, user-friendly interfaces that drive business growth and user engagement.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Maintained and improved existing codebases, implementing modern frontend best practices to ensure platforms remain sustainable and scalable.
        </li>
      </ul>
    </motion.div>
  );
};

export default P23Africa;