import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Web Developer
        <span className="text-textGreen tracking-wide">@Duromedia</span>
      </h3>
      <div className="flex flex-col md:flex-row md:justify-between text-sm mt-1 font-medium text-textDark">
        <p>Jan 2021 - 2023</p>
        <p className="text-textGreen">Lagos, Nigeria (On-site)</p>
      </div>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Designed elegant and responsive websites for clients to help them grow
          their businesses and reach their target audience.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Conducted quality assurance tests to identify and rectify flaws,
          enhancing website usability.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed custom WordPress themes to help customers promote themselves
          and increase their income.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Assisted in maintaining and updating web content, ensuring accurate
          and up-to-date information for visitors.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Provided technical support to clients, resolving issues and ensuring a
          smooth user experience on their websites.
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
