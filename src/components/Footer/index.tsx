import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="flex flex-row gap-4 items-center">
        <FaGithub className="text-2xl hover:text-content-tertiary"/>
        <FaLinkedin className="text-2xl hover:text-content-tertiary"/>
        <FaEnvelope className="text-2x1 hover:text-content-tertiary"/>
       </div>
      <span className="text-xs text-content-secondary"> <br />
        Designed and coded by Lucca Romaniello using Next.js and Tailwind CSS. <br />
        Last updated March 2025.
      </span>
    </footer>
  )
};

export default Footer;