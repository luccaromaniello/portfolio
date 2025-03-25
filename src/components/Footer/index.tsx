import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 items-center p-14 w-full">
      {/* <div className="flex flex-row gap-4">
        <FaGithub className="text-2xl hover:text-content-tertiary"/>
        <FaLinkedin className="text-2xl hover:text-content-tertiary"/>
        <FaEnvelope className="text-2x1 hover:text-content-tertiary"/>
       </div> */}
      <div className="flex flex-col gap-2 text-xs text-content-secondary items-center">
        <p>Designed and coded by Lucca Romaniello.</p>
        <p>Last updated April 2025.</p>
      </div>
    </footer>
  )
};

export default Footer;