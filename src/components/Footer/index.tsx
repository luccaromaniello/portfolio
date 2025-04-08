import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { GITHUB_URL, LINKEDIN_URL, MAIL_URL } from "@/constants";
import "@/styles/typography.css";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 items-center p-14 w-full sm:mt-12 mb-4">
      <div className="flex flex-row gap-6 items-center">
        <a href={GITHUB_URL} rel="noreferrer" target="_blank">
          <FaGithub
            size={24}
            className="text-2xl hover:text-content-tertiary"
          />
        </a>
        <a href={LINKEDIN_URL} rel="noreferrer" target="_blank">
          <FaLinkedin
            size={24}
            className="text-2xl hover:text-content-tertiary"
          />
        </a>
        <a href={MAIL_URL}>
          <FaEnvelope
            size={24}
            className="text-3x1 hover:text-content-tertiary"
          />
        </a>
      </div>
      <div className="flex flex-col gap-2 text-footer items-center">
        <p>Designed and coded by Lucca Romaniello.</p>
        <p>Last updated April 2025.</p>
      </div>
    </footer>
  );
};

export default Footer;
