import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Front-end Developer
        <span className="text-textGreen tracking-wide">@Ascent</span>
      </h3>
      <div className="flex flex-col md:flex-row md:justify-between text-sm mt-1 font-medium text-textDark">
        <p>May 2019 – 2024</p>
        <p className="text-textGreen">Lagos, Nigeria (Hybrid)</p>
      </div>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed sophisticated and responsive web applications using React
          and Next.js, incorporating AI solutions to help clients grow their
          businesses and engage their target audience.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Conducted thorough quality assurance tests to identify and fix issues,
          enhancing the usability of AI-integrated web applications.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Created custom components and themes within the React ecosystem,
          leveraging AI technologies to help clients promote their services and
          boost their revenue.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Assisted in maintaining and updating web content, ensuring accuracy
          and relevance with AI-driven insights for visitors. Provided technical
          support to clients, troubleshooting issues and ensuring a seamless
          user experience on their AI-enhanced web applications.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
